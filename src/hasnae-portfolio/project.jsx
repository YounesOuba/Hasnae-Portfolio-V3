import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import preview from "./assets/projects/ConceptionI/preview.JPG"; 
import large from "./assets/projects/LineDrawer/large.jpg";
import large1 from "./assets/projects/ShrederMachine/large1.jpg";
import carJack from "./assets/projects/CarJack/carJack.jpg";
import smart from "./assets/projects/smartWast/smart.jpeg";
import auto from "./assets/projects/automatique/auto.jpg";
import counter from "./assets/projects/Counter/counter.jpg"

const projects = [
  {
    id: 1,
    title: "Elfin10-cobot | 6DOF",
    description: "Modèle 3D du bras robotique Elfin 10 de Han’s Robot, un robot collaboratif 6 axes conçu pour l'automatisation industrielle. Ce modèle est idéal pour la simulation, l’intégration dans des projets robotiques et l’apprentissage en CAO. Disponible en formats STEP et SolidWorks. N'hésitez pas à commenter et partager vos retours !",
    category: "Grabcad",
    tech: ["SolidWorks"],
    images: [preview],
    link: "https://grabcad.com/library/elfin10-cobot-6dof-1",
  },
  {
    id: 2,
    title: "Plastic Shredder Machine",
    description: "This is a complete 3D model of a plastic shredder machine designed for recycling applications. The model includes all major components such as the shredding chamber, blades, motor mount, hopper, and frame. Ideal for mechanical and industrial design projects related to waste processing or environmental engineering",
    category: "Grabcad",
    tech: ["SolidWorks"],
    images: [large1],
    link: "https://grabcad.com/library/plastic-shredder-machine-3d-model-1",
  },
  {
    id: 3,
    title: "Line Drawer Robot",
    description: "This drawing robot is designed to trace predefined plans or patterns on the ground with precision. It features a compact 3D structure, a two-wheel drive system, and space for a microcontroller. Ideal for automation and mechatronics projects, it can be customized for various field marking or floor plotting applications", 
    category: "Grabcad",
    tech: ["SolidWorks"],
    images: [large],
    link: "https://grabcad.com/library/line-follower-robot-26",
  },
  {
    id: 4,
    title: "Electric Car Jack",
    description: "This is a complete 3D model of an electric car jack designed for automatic vehicle lifting. The model includes the motor housing, scissor mechanism, base plate, screw drive, and support arms. Ideal for automotive design, mechatronics, and mechanical engineering projects.",
    category: "Grabcad",
    tech: ["SolidWorks"],
    images: [carJack],
    link: "https://grabcad.com/library/electric-car-jack-1",
  },
  {
    id: 5,
    title: "Automatique",
    description: "Le projet consiste à créer une interface graphique utilisateur (GUI) sous MATLAB dédiée à la méthode de Nyquist, dans le cadre du module d’automatique. Cette application permettra de tracer et d’analyser les diagrammes de Nyquist pour des systèmes linéaires, facilitant ainsi l’étude de la stabilité et des marges de gain et de phase. Le GUI offrira une interaction intuitive pour entrer les fonctions de transfert, ajuster les paramètres, et visualiser les résultats en temps réel, ce qui rendra l’apprentissage et l’analyse plus accessibles aux étudiants et ingénieurs.",
    category: "Github",
    tech: ["MATLAB"],
    images: [auto, ],
    link: "https://github.com/hasnaeait/supreme-octo-spoon.git",
  },
  {
    id: 6,
    title: "Smart Wast Sorting Bin",
    description:"Le projet Smart Waste Sorting Bin est une poubelle intelligente conçue pour trier automatiquement les déchets à l’aide de capteurs et d’un programme développé en Python. Elle utilise une caméra  pour détecter le type de déchet (plastique, métal, papier, etc.) et le trier dans le compartiment approprié grâce à un système motorisé. L’objectif est de faciliter le tri sélectif, réduire les erreurs humaines et encourager une gestion plus écologique des déchets. Ce système peut être utilisé dans les maisons, les écoles ou les espaces publics pour améliorer le recyclage",
    category: "Github",
    tech: ["Python"],
    images: [smart, ],
    link: "https://github.com/hasnaeait/Python-code.git",
  },
  {
    id: 7,
    title: "Counter 0000-to-9999 asembler language",
    description: "Le projet porte sur la réalisation d’un compteur numérique de 0000 à 0999 utilisant un microcontrôleur PIC16F877A associé à un afficheur 7 segments à 4 digits. Ce système permet d’afficher en temps réel un compteur incrémental, géré par le microcontrôleur, avec un multiplexage efficace des digits pour une lecture claire et précise. Ce projet illustre la maîtrise des concepts d’interfaçage matériel, de gestion des temporisations et de programmation embarquée en langage assembleur ou C, dans le cadre des systèmes électroniques et automatiques",
    category: "Github",
    tech: ["Assembly Language"],
    images: [counter, ],
    link: "https://github.com/hasnaeait/Counter-0000-to-9999-aasembler-language",
  }
];

const categories = ["All", "Github", "Grabcad"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="project" className="py-28 px-4 md:px-10 bg-gradient-to-br from-pink-50 via-purple-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg font-orbitron">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-all duration-200
              ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-pink-500 scale-105 shadow-xl"
                  : "bg-white dark:bg-zinc-800 text-pink-600 border-pink-200 dark:border-zinc-700 hover:bg-pink-100 dark:hover:bg-zinc-700 hover:text-purple-600"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      className="p-6 bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl border border-pink-100 dark:border-zinc-700 flex flex-col transition-all hover:shadow-pink-200 dark:hover:shadow-purple-900"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with arrows */}
      <div className="relative w-full h-52 overflow-hidden rounded-2xl mb-6 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={project.images[currentImage]}
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-52 object-cover rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/70 hover:bg-pink-100 dark:hover:bg-pink-700 p-2 rounded-full shadow transition"
            >
              <ChevronLeft className="w-5 h-5 text-pink-600 dark:text-pink-300" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/70 hover:bg-pink-100 dark:hover:bg-pink-700 p-2 rounded-full shadow transition"
            >
              <ChevronRight className="w-5 h-5 text-pink-600 dark:text-pink-300" />
            </button>
          </>
        )}
      </div>

      <h3 className="text-2xl font-bold mb-2 text-pink-600 dark:text-pink-400 transition">{project.title}</h3>

      <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-full mb-4' : 'max-h-0'}`}>
        <p className="text-gray-700 dark:text-gray-300 px-1 pt-1">{project.description}</p>
      </div>

      <p className="text-xs uppercase tracking-wider text-purple-500 dark:text-purple-300 mb-3">{project.category}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-r from-pink-400 to-purple-400 px-3 py-1 rounded-full text-white text-xs font-semibold shadow"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-purple-500 hover:to-pink-500 hover:shadow-xl transition-all duration-300"
      >
        View Project
      </a>
    </motion.div>
  );
};


export default Projects;