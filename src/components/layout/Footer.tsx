import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-white font-bold text-xl">
              <span className="text-[#00BFFF]">F</span>lorian <span className="text-[#00BFFF]">H</span>uguet
            </span>
            <p className="text-gray-400 mt-2">Développeur Fullstack</p>
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; {currentYear} - Tous droits réservés</p>
            <p className="mt-1">Conçu avec <span className="text-red-500">❤</span> par Florian Huguet</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;