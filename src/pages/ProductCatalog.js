import { useState } from 'react';
import { useCart } from '../context/CartContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = [
  { id: 1, name: 'Wireless Headphones', price: 50, stock: 10, image: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Smart Watch', price: 30, stock: 5, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Bluetooth Speaker', price: 20, stock: 15, image: 'https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: '4K UHD TV', price: 100, stock: 3, image: 'https://images.pexels.com/photos/28884413/pexels-photo-28884413/free-photo-of-modern-home-office-tech-setup-with-gadgets.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Laptop', price: 750, stock: 0, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Gaming Console', price: 400, stock: 8, image: 'https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' },
  { id: 7, name: 'Smartphone', price: 300, stock: 12, image: 'https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'Action Camera', price: 150, stock: 1, image: 'https://images.pexels.com/photos/3945323/pexels-photo-3945323.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 9, name: 'Wireless Mouse', price: 25, stock: 7, image: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 10, name: 'Mechanical Keyboard', price: 80, stock: 4, image: 'https://images.pexels.com/photos/257872/pexels-photo-257872.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 11, name: 'Portable Charger', price: 15, stock: 6, image: 'https://images.pexels.com/photos/3921697/pexels-photo-3921697.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 12, name: 'Smart Home Assistant', price: 100, stock: 5, image: 'https://images.pexels.com/photos/24346971/pexels-photo-24346971/free-photo-of-home-monitoring-security.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 13, name: 'Tablet', price: 200, stock: 3, image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 14, name: 'E-Reader', price: 120, stock: 10, image: 'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 15, name: 'Fitness Tracker', price: 40, stock: 2, image: 'https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 16, name: 'Smart Thermostat', price: 70, stock: 0, image: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 17, name: 'Drone', price: 500, stock: 20, image: 'https://images.pexels.com/photos/28861948/pexels-photo-28861948/free-photo-of-drone-soaring-over-snow-capped-mountains.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 18, name: 'VR Headset', price: 300, stock: 9, image: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

function ProductCatalog() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Product Catalog</h2>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar 
        newestOnTop 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-700">Price: ${product.price}</p>
         
            <button
              onClick={() => {
                if (product.stock > 0) {
                  addToCart(product);
                  toast.success(`${product.name} added to cart!`);
                }
              }}
              className={`mt-4 p-2 rounded text-white transition duration-200 ${product.stock > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
