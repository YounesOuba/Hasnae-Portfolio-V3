import React, { useState } from "react";
import { motion } from "framer-motion";




    // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    // ⚠️⚠️ Hnaaya ghantbedli f haad joj const lli 3ndeQ lteeht ( Projects, Categories ) 3la hsaab dakchii lli bagha . ⚠️⚠️
    // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️


    //⚠️⚠️⚠️⚠️⚠️⚠️ read here :
    // f kolla projet 3ndeQ (objet) hadchi llii lteht... fach tbedlii title ghaykhsseQ tbedlii m3aah category bach fach nklikiiw ela 
    // category dyalna yb9a ytlee3 fiiha daak lprojet ...

const projects = [
  { id: 1, title: "Conception I", category: "Grabcad", tech: ["SolidWorks"], link: "https://grabcad.com/library/elfin10-cobot-6dof-1"},
  { id: 2, title: "Conception II", category: "Grabcad", tech: ["SolidWorks"], link: "https://grabcad.com/library/plastic-shredder-machine-7"},


  { id: 3, title: "Automatique", category: "Github", tech: ["MATLAB"], link: "https://github.com/hasnaeait/supreme-octo-spoon.git"},
  { id: 4, title: "Python", category: "Github", tech: ["Python"], link: "https://github.com/hasnaeait/Python-code.git"},
];

    // ⚠️⚠️⚠️ and here :
    // ndozo l category ghatbedlii ela hsab dakchii lli 3ndeQ ntiiya , o kolla wehda kayna hna khass tkoon f weha mn hadou lfoo9 
    // bach fach nkliikiiw eliiha tlle3 liina lprojects lli 3ndhom diik category x.

const categories = ["All", "Github", "Grabcad"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="project" className="py-28 px-6 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedCategory === category
                ? "bg-pink-500 text-white"
                : "bg-pink-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="p-6 rounded-xl shadow-md shadow-gray-400 dark:shadow-gray-50 transition-all text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm opacity-80">{project.category}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-semibold bg-pink-500 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block text-white bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg font-semibold shadow-lg hover:from-purple-500 hover:to-pink-500 hover:shadow-xl transition-all duration-300 ease-in-out self-end"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
