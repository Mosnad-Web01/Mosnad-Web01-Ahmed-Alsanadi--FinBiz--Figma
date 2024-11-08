import { useState } from 'react';
import logo from '../images/logo.svg';
import Button from './reusable-components/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);  
  };

  return (
    <nav className="bg-dark-900">
      <div className="container mx-auto px-4 py-4 flex lg:justify-evenly sm:justify-between items-center text-white">
        {/* Logo */}
        <div className='flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={logo} alt="FinBiz Logo" />
          <div className="text-xl font-bold">
            FinBiz
          </div>
        </div>

        
        <div className="hidden md:flex space-x-4 items-center text-anotherDark">
          <a href="#" className="hover:text-green transition">Product</a>
          <a href="#" className="hover:text-green transition">Pages</a>
          <a href="#" className="hover:text-green transition">Integrations</a>
          <a href="#" className="hover:text-green transition">Blog</a>
          <a href="#" className="hover:text-green transition">Pricing</a>
        </div>

        
        <div className="hidden md:flex items-center space-x-4">
          <Button text={"Get started"} variant="default" addClass="bg-grayDark font-button text-white py-2 px-4 rounded-full transition-transform duration-300 transform hover:bg-green-700 hover:scale-105" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center Hamburger justify-end flex-1">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-dark-800 px-4 py-4 transition-transform duration-300`}>
        <a href="#" className="block py-2 hover:text-green transition">Product</a>
        <a href="#" className="block py-2 hover:text-green transition">Pages</a>
        <a href="#" className="block py-2 hover:text-green transition">Integrations</a>
        <a href="#" className="block py-2 hover:text-green transition">Blog</a>
        <a href="#" className="block py-2 hover:text-green transition">Pricing</a>

        {/* Mobile Button */}
        <div className="mt-4">
          <Button text={"Get started"} variant="default" addClass="w-full bg-grayDark font-button text-white py-2 px-4 rounded-full transition-transform duration-300 transform hover:bg-green-700 hover:scale-105" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
