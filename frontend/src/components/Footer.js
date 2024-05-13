import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1 fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/gaurav-dhamane-8054a0209/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/gaurav-dhamane" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <p className="mb-2 lg:mb-0 mx-auto">Gaurav Dhamane</p>
        <a href="/your-resume.pdf" download className="bg-gray-800 text-white px-4 py-2 rounded ">
          Download Resume
        </a>
      </div>
    </footer>
  );
}

export default Footer;
