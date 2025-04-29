import React, { useCallback } from 'react';
import { Link } from 'react-scroll';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: '#121212',
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#00BFFF',
              },
              links: {
                color: '#00BFFF',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div 
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            <span className="block">Je suis</span>
            <span className="text-[#00BFFF]">Florian Huguet</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">Développeur Fullstack</p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-[#00BFFF] hover:bg-[#00a6df] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              Voir mes projets
            </Link>
            <a
              href="../../public/CV/CVFlorianHuguet.pdf"
              download="CV_Florian_Huguet.pdf"
              className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-6 border border-white hover:border-transparent rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <Download size={18} className="mr-2" />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
        <span className="text-white text-sm mt-2">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;