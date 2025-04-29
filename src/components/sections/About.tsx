import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            data-aos="fade-up"
          >
            À propos <span className="text-[#00BFFF]">de moi</span>
          </h2>
          
          <div 
            className="bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              En tant que développeur fullstack, j'ai eu l'occasion de toucher à beaucoup de langages. Ma formation et mes expériences professionnelles m'ont permis d'acquérir une solide compréhension de différentes technologies, allant du frontend au backend, en passant par les bases de données et les outils de déploiement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Bien que je sois compétent dans plusieurs domaines techniques, j'ai une affinité particulière pour le web, que ce soit frontend ou backend. J'aime créer des interfaces utilisateur intuitives et des architectures serveur robustes, en veillant toujours à suivre les meilleures pratiques et à rester à jour avec les dernières technologies du marché.
            </p>
          </div>
          
          <div 
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Études</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-[#00BFFF] font-medium">2022 - 2027</p>
                  <p className="text-white">Mastère informatique</p>
                  <p className="text-gray-400">EPSI Paris</p>
                </li>
                <li>
                  <p className="text-[#00BFFF] font-medium">2020 - 2022</p>
                  <p className="text-white">Bac STI2D (SIN)</p>
                  <p className="text-gray-400">Lycée Saint Erembert</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Expérience</h3>
              <ul className="space-y-4">
                <li>
                    <p className="text-[#00BFFF] font-medium">2024 - 2025</p>
                    <p className="text-white">Développeur IA (Alternance)</p>
                    <p className="text-gray-400">CT Ingénierie, Guyancourt</p>
                    <p className="text-sm text-gray-500">Programmation d'un outil de génération de sons de bateaux utilisant du machine learning en Python</p>
                  </li>
                  <li>
                    <p className="text-[#00BFFF] font-medium">Janvier - Février 2024</p>
                    <p className="text-white">Développeur Python (Stage)</p>
                    <p className="text-gray-400">SNCF, Saint-Denis</p>
                    <p className="text-sm text-gray-500">Création d'un programme d'automatisation de données Excel nommé Viriato</p>
                  </li>
                  <li>
                    <p className="text-[#00BFFF] font-medium">Juin - Juillet 2022</p>
                    <p className="text-white">Développeur Web (Stage)</p>
                    <p className="text-gray-400">CT Ingénierie, Guyancourt</p>
                    <p className="text-sm text-gray-500">Création d'un globe terrestre 3D en JS et visualisation des trajectoires</p>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;