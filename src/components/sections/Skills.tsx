import React from 'react';
import { skillCategories } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          data-aos="fade-up"
        >
          Mes <span className="text-[#00BFFF]">Compétences</span>
        </h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={category.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.name}</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={skillIndex * 50}
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img 
                        src={skill.icon}
                        alt={skill.name}
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <p className="text-white text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;