import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-violet-950 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-between">
      
        <div className="mb-6 lg:mb-0 w-full lg:w-1/3">
          <h3 className="text-lg font-bold mb-4">InventoryApp</h3>
          <p className="mb-2">&copy; 2024 InventoryApp. All rights reserved.</p>
          <p className="mb-2">1234 Inventory St., Business City, XYZ 12345</p>
          <p>Email: <a href="mailto:support@inventoryapp.com" className="hover:text-orange-400">support@inventoryapp.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-orange-400">+1 234 567 890</a></p>
        </div>


        <div className="mb-6 lg:mb-0 w-full lg:w-1/3">
          <h4 className="text-lg font-bold mb-4">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <Link to="/products" className="hover:text-orange-500">
                Products
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/orders" className="hover:text-orange-500">
                Orders
              </Link>
            </li>
         
            <li className="mb-2">
              <Link to="/contact" className="hover:text-orange-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>


        <div className="w-full lg:w-1/3">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400" aria-label="Facebook">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.43 9.88v-6.99H8.35v-2.9h2.08v-2.2c0-2.06 1.23-3.2 3.1-3.2.9 0 1.84.16 1.84.16v2.03h-1.04c-1.02 0-1.34.64-1.34 1.3v1.91h2.28l-.36 2.9h-1.92v6.99c4.77-.76 8.43-4.89 8.43-9.88 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Twitter">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.633 7.997c.014.192.014.385.014.577 0 5.877-4.473 12.648-12.648 12.648-2.512 0-4.847-.735-6.812-2.007.355.042.71.056 1.065.056 2.082 0 3.997-.71 5.523-1.91-1.944-.042-3.582-1.319-4.148-3.086.276.042.552.07.828.07.407 0 .814-.056 1.192-.154-2.036-.42-3.566-2.205-3.566-4.378v-.056c.59.332 1.274.532 2.002.56-1.18-.79-1.96-2.107-1.96-3.623 0-.795.213-1.536.59-2.176 2.14 2.626 5.36 4.352 8.98 4.533-.07-.318-.106-.663-.106-1.008 0-2.436 1.977-4.413 4.413-4.413 1.273 0 2.422.532 3.228 1.38 1.007-.204 1.932-.56 2.778-1.064-.332 1.032-1.032 1.9-1.944 2.45.896-.112 1.764-.344 2.564-.69-.59.896-1.336 1.68-2.196 2.31z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Instagram">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.058 2.124.275 2.615.463a5.327 5.327 0 011.853 1.185 5.331 5.331 0 011.185 1.853c.188.491.405 1.356.463 2.615.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.275 2.124-.463 2.615a5.333 5.333 0 01-1.185 1.853 5.327 5.327 0 01-1.853 1.185c-.491.188-1.356.405-2.615.463-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.124-.275-2.615-.463a5.331 5.331 0 01-1.853-1.185 5.327 5.327 0 01-1.185-1.853c-.188-.491-.405-1.356-.463-2.615C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.058-1.259.275-2.124.463-2.615a5.331 5.331 0 011.185-1.853A5.327 5.327 0 015.664 2.7c.491-.188 1.356-.405 2.615-.463C8.416 2.175 8.796 2.163 12 2.163m0-2.163c-3.259 0-3.67.013-4.947.072-1.274.059-2.15.292-2.89.621a7.562 7.562 0 00-2.75 1.752A7.56 7.56 0 00.621 5.223C.292 5.963.059 6.839.072 8.113.013 9.39 0 9.801 0 13.06s.013 3.67.072 4.947c.059 1.274.292 2.15.621 2.89a7.562 7.562 0 001.752 2.75 7.56 7.56 0 002.75 1.752c.74.329 1.616.562 2.89.621 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.274-.059 2.15-.292 2.89-.621a7.562 7.562 0 002.75-1.752 7.56 7.56 0 001.752-2.75c.329-.74.562-1.616.621-2.89.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.059-1.274-.292-2.15-.621-2.89a7.56 7.56 0 00-1.752-2.75 7.562 7.562 0 00-2.75-1.752c-.74-.329-1.616-.562-2.89-.621C15.67.013 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 106.162 6.162A6.16 6.16 0 0012 5.838zm0 10.162a3.999 3.999 0 113.999-3.999A4 4 0 0112 16zm6.406-10.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.01h3.56v11.44zm-1.78-13.1c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.07-2.06 2.07zm14.11 13.1h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.93v5.67h-3.56V9.01h3.42v1.56h.05c.48-.92 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55v6.18z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
