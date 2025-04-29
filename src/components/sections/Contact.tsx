import React from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          data-aos="fade-up"
        >
          Me <span className="text-[#00BFFF]">Contacter</span>
        </h2>

        <div
          className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Mes coordonnées</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="text-[#00BFFF] mr-4 mt-1" size={24} />
              <div>
                <h4 className="text-white font-medium mb-1">Localisation</h4>
                <p className="text-gray-400">Louveciennes, France</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="text-[#00BFFF] mr-4 mt-1" size={24} />
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href="mailto:florian.huguet78@orange.fr" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300">
                  florian.huguet78@orange.fr
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="text-[#00BFFF] mr-4 mt-1" size={24} />
              <div>
                <h4 className="text-white font-medium mb-1">Téléphone</h4>
                <a href="tel:+33782478310" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300">
                  07 82 47 83 10
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Linkedin className="text-[#00BFFF] mr-4 mt-1" size={24} />
              <div>
                <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/florian-huguet-812a61236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300"
                >
                  Florian Huguet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
