import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCube, FaPhone } from "react-icons/fa";

const About = () => {
  const skills = [
    "Robotics",
    "Electronics",
    "Python",
    "MATLAB",
    "SolidWorks",
    "Java",
    "Computer-Aided Manufacturing (CAM)",
    "Computer-Aided Design (CAD)",
    "Electrical Circuit Design (PCB Manufacturing)",
  ];

  return (
    <section id="about" className="flex flex-col items-center justify-center py-20 px-6 bg-pink-500 min-h-screen">
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-white mb-12 font-orbitron text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Card Container */}
      <div className="relative w-full max-w-4xl space-y-10">
        {/* Card 1: Introduction */}
        <motion.div
          className="bg-[#1E1E40] p-8 rounded-2xl shadow-lg border-l-8 border-[#303b9c] text-white text-lg font-orbitron"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-bold text-[#00aced] mb-4">👋 Introducing Myself</h2>
          <p>
            Hi, I'm Hasnae, an engineer and developer bridging mechanics & electronics.
            Passionate about robotics & automation, I strive to create innovations that shape the future.
          </p>
        </motion.div>

        {/* Card 2: Skills */}
        <motion.div
          className="bg-[#1f8397] p-8 rounded-2xl shadow-lg border-l-8 border-[#00aced] text-white text-lg font-orbitron"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-bold text-[#F9C784] mb-4">🚀 Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-[#F9C784] text-[#1E1E40] text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Vision */}
        <motion.div
          className="bg-[#846d12] p-8 rounded-2xl shadow-lg border-l-8 border-[#FFD700] text-white text-lg font-orbitron"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">🌟 My Vision</h2>
          <p>
            I aim to push the boundaries of robotics innovation, merging mechanics & electronics
            to create intelligent, autonomous systems.
          </p>
        </motion.div>

        {/* Card 4: Contact Info */}
        <motion.div
          className="bg-[#0f6042] p-8 rounded-2xl shadow-lg border-l-8 border-[#46955c] text-white text-lg font-orbitron"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-bold text-[#E9D8FD] mb-4">📞 Contact Info</h2>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/hasnaeait"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#95ffdd] transition-all"
            >
              <FaGithub size={25} /> GitHub
            </a>
            <a
              href="https://grabcad.com/hasnae.ait.lhaj-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#95ffdd] transition-all"
            >
              <FaCube size={25} /> GrabCAD
            </a>
            <a
              href="https://www.linkedin.com/in/hasnae-ait-lhaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#95ffdd] transition-all"
            >
              <FaLinkedin size={25} /> LinkedIn
            </a>
            <a
              href="mailto:aitlhajhasnae@gmail.com"
              className="flex items-center gap-3 text-white hover:text-[#95ffdd] transition-all"
            >
              <FaEnvelope size={25} /> aitlhajhasnae@gmail.com
            </a>
            <a
              href="tel"
              className="flex items-center gap-3 text-white hover:text-[#95ffdd] transition-all">
              <FaPhone size={25} /> +212 6 51-250889
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
