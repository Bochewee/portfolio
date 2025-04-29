import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Site E-commerce',
    description: 'Site e-commerce complet avec gestion des utilisateurs et des paiements. Et un chat d\'assistance',
    image: '../../public/images/flashfind.png',
    tags: ['Shopify'],
  },
  {
    id: 2,
    title: 'Page d\'inscritpion / Connexion',
    description: 'Simple page ou l\'utilisateur peut s\'inscrire ou se connecter. Avec base de données MySQL.',
    image: '../../public/images/inscription.png',
    tags: ['HTML', 'CSS', 'PHP MySQL'],
  },
  {
    id: 3,
    title: 'Planète 3D avec affichage de trajectoires',
    description: 'Terre 3D avec affichage de trajectoires de satellites et de fusées. Utilisation de la bibliothèque Three.js.',
    image: '../../public/images/CTStage.png',
    tags: ['JavaScript', 'Three.js', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    id: 4,
    title: 'BDD pour une agence immobilière (fictive)',
    description: 'Une BDD pour une agence immobilière fictive. Avec un site vitrine et un site de gestion de biens.',
    image: '../../public/images/ImmoFictif.png',
    tags: ['HTML', 'CSS', 'PHP MySQL', 'JavaScript'],
  },
];