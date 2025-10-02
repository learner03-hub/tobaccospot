import { useState } from 'react';
import { Link } from 'react-router-dom';
// import routes from '../routes'; // Optional, if using route constants

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <header className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <div className='flex items-center gap-3'>
            <button
          className="w-10 h-10 bg-green-600 text-black font-bold text-xl rounded-md flex items-center justify-center"
            >
            <Link to="/" className="">TS</Link>
            </button>
            <h1 className="text-green-600 text-xl font-bold"><Link to="/" className="">Tobacco Spot</Link></h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="hover:underline text-green-600 font-bold">Home</Link>
          <Link to="/products" className="hover:underline ">Products</Link>
          <Link to="/contact" className="hover:underline ">Contact</Link>
          <Link to="/about" className="hover:underline ">About</Link>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gray-800 rounded shadow p-4 flex flex-col gap-2">
          <Link to="/" className='hover:underline text-gray-300 bg-gray-900 p-4 font-bold' onClick={closeDrawer}>Home</Link>
          <Link to="/products" className='hover:underline text-gray-300 bg-gray-900 p-4 font-bold' onClick={closeDrawer}>Products</Link>
          <Link to="/contact" className='hover:underline text-gray-300 bg-gray-900 p-4 font-bold' onClick={closeDrawer}>Contact</Link>
          <Link to="/about" className='hover:underline text-gray-300 bg-gray-900 p-4 font-bold' onClick={closeDrawer}>About</Link>
        </div>
      )}
    </header>
  );
}
