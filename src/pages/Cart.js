import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderForm from '../components/OrderForm'; 

function Cart() {
    const { cart, removeFromCart, placeOrder } = useCart();
    const [isOrderFormOpen, setOrderFormOpen] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null); 

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        toast.success('Product removed from cart!');
    };

    const handlePlaceOrder = (item) => {
        setSelectedItem(item);
        setOrderFormOpen(true); 
    };

    return (
        <div className="p-6 max-w-screen-xl mx-auto">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty!</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="flex items-center p-4 border-b border-gray-300">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-24 h-24 object-cover rounded mr-4" 
                            />
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Stock: {item.stock}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="ml-4 p-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
                            >
                                Remove
                            </button>
                            <button
                                onClick={() => handlePlaceOrder(item)}
                                className="ml-4 p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
                            >
                                Order
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {isOrderFormOpen && (
                <OrderForm 
                    onClose={() => setOrderFormOpen(false)} 
                    cartItems={[selectedItem]} 
                />
            )}
        </div>
    );
}

export default Cart;
