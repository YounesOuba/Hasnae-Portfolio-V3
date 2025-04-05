import React, { useState } from "react";
import { motion } from "framer-motion";




    // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    // ⚠️⚠️ Hnaaya ghantbedli f haad joj const lli 3ndeQ lteeht ( Projects, Categories ) 3la hsaab dakchii lli bagha . ⚠️⚠️
    // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️


    //⚠️⚠️⚠️⚠️⚠️⚠️ read here :
    // f kolla projet 3ndeQ (objet) hadchi llii lteht... fach tbedlii title ghaykhsseQ tbedlii m3aah category bach fach nklikiiw ela 
    // category dyalna yb9a ytlee3 fiiha daak lprojet okay ...

const projects = [
  { id: 1, title: "AI Robot", category: "Robotics", tech: ["Python", "TensorFlow"] },
  { id: 2, title: "E-Commerce Website", category: "Web Development", tech: ["React", "Node.js"] },
  { id: 3, title: "Smart Home Automation", category: "Electronics", tech: ["IoT", "Raspberry Pi"] },
  { id: 4, title: "Portfolio Website", category: "Web Development", tech: ["Next.js", "Tailwind"] },
  { id: 5, title: "Autonomous Car System", category: "AI & ML", tech: ["Python", "OpenCV"] },
];

    // ⚠️⚠️⚠️ and here :
    // ndozo l category ghatbedlii ela hsab dakchii lli 3ndeQ ntiiya , o kolla wehda kayna hna khass tkoon f weha mn hadou lfoo9 
    // bach fach nkliikiiw eliiha tlle3 liina lprojects lli 3ndhom diik category x.

const categories = ["All", "Robotics", "Web Development", "Electronics", "AI & ML"];

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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
