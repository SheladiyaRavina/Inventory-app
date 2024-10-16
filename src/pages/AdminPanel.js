import { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Wireless Headphones', price: 50, stock: 10, image: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Smart Watch', price: 30, stock: 5, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Bluetooth Speaker', price: 20, stock: 15, image: 'https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', image: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock && newProduct.image) {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      setNewProduct({ name: '', price: '', stock: '', image: '' });
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const startEditing = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const updateProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock && newProduct.image) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? newProduct : product
        )
      );
      setNewProduct({ name: '', price: '', stock: '', image: '' });
      setEditingProduct(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-orange-600">Admin Panel</h1>

      <div className="mb-6 p-4 bg-white rounded shadow-md">
        <h3 className="text-xl font-bold mb-4 text-center text-violet-950">Add/Edit Product</h3>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Product Price"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            placeholder="Product Stock"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="Product Image URL"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={editingProduct ? updateProduct : addProduct}
            className="p-2  bg-green-600 text-white rounded hover:bg-rose-700 transition duration-200"
          >
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </div>

      
      <h3 className="text-xl font-bold mb-4">Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-600">Stock: {product.stock}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => startEditing(product)}
                className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
