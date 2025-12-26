
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaFacebook, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
       
        <div>
          <h3 className="text-xl font-bold mb-4">About Our Platform</h3>
          <p>
            We provide the best online courses to enhance your skills across various fields. Our goal is to empower you to learn easily and flexibly.
          </p>
        </div>

       
        <div className='flex flex-col ml-30'>
          <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
       
             <Link className="mb-2 hover:text-blue-400 cursor-pointer" to="/">Home</Link>
                  <Link className="mb-2 hover:text-blue-400 cursor-pointer"to="/courses">Courses</Link>
                  <Link className="mb-2 hover:text-blue-400 cursor-pointer" to="/cart">Cart</Link>
                   <Link to="/login">Login</Link>
        </div>

     
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitterSquare /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagramSquare /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; 2025 Our Courses Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
