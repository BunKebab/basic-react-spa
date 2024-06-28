import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-blue-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-white">CodeSprint 2024</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center text-white">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
          <Link to="/schedule" className="mr-5 hover:text-gray-900">Schedule</Link>
          <Link to="/prizes" className="mr-5 hover:text-gray-900">Prizes & Judges</Link>
          <Link to="/register" className="mr-5 hover:text-gray-900">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;