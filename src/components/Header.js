import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

 
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUserRole(currentUser.role); 
    }
  }, []);

  return (
    <header className="bg-violet-950 text-white">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold">
          InventoryApp
        </div>

    
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

      
        <ul className="hidden lg:flex space-x-6 text-lg">
          <li>
            <Link to="/products" className="hover:text-orange-700">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-orange-700">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/orders" className="hover:text-orange-700">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-700">
              Contact
            </Link>
          </li>
          
          {userRole === 'admin' && (
            <li>
              <Link to="/admin" className="hover:text-orange-700">
                Admin Panel
              </Link>
            </li>
          )}
          <li>
            <button
              onClick={() => {
                localStorage.removeItem('currentUser');
                window.location.href = '/';
              }}
              className="hover:text-gray-200"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

   
      {isOpen && (
        <ul className="lg:hidden bg-blue-700 text-white p-4 space-y-4">
          <li>
            <Link to="/products" className="block">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="block">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/orders" className="block">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block">
              Contact
            </Link>
          </li>
      
          {userRole === 'admin' && (
            <li>
              <Link to="/admin" className="block">
                Admin Panel
              </Link>
            </li>
          )}
          <li>
            <button
              onClick={() => {
                localStorage.removeItem('currentUser');
                window.location.href = '/';
              }}
              className="block"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
