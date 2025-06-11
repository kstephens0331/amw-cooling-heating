import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        {/* Contact info */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">AMW Cooling & Heating</h3>
          <p className="text-sm">Conroe, TX</p>
          <p className="text-sm">Phone: (936) 587-7612</p>
          <p className="text-sm">Email: admin@amwairconditioning.com</p>
        </div>

        {/* Social media links + hours */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-4 text-white text-xl mb-2">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaYelp /></a>
          </div>
          <div className="text-xs text-white">
            <p>Hours: Mon – Fri, 8:00 AM – :00 PM</p>
            <p>Emergency Service Available from 5:00 PM – 9:00 PM</p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} AMW Cooling & Heating LLC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;