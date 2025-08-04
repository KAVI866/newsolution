import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter,FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 flex gap-4">
            <NavLink to="/" className="hover:text-gradientEnd">Home</NavLink>
            <NavLink to="/about" className="hover:text-gradientEnd">About</NavLink>
            <NavLink to="/service" className="hover:text-gradientEnd">Service</NavLink>
            <NavLink to="/contact" className="hover:text-gradientEnd">Contact</NavLink>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gradientEnd"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-gradientEnd"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gradientEnd"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-gradientEnd"><FaTwitter size={24} /></a>
          </div>
        </div>

        <div className="md:col-span-3 pt-6 border-t border-gray-700 text-sm text-center">
          © 2025 New Solution. All rights reserved.
        </div>
      </div>
    </footer>  );
};

