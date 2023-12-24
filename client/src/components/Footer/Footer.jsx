import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center mb-4">
          &copy; {new Date().getFullYear()} Budget Buddy
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/saurabhjaykar1603"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            GitHub
          </a>
          <a
            href="mailto:jaykarsaurabh97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
