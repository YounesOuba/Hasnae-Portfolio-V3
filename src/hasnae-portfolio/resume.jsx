import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import cv from "./assets/HasnaeAitLhaj.pdf";

const Resume = () => {
  const technicalSkills = [
    "Computer-Aided Design (CAD)",
    "Computer-Aided Manufacturing (CAM)",
    "Manufacturing and Mechanical Construction (RDM)",
    "Robotics Programming and Automotive Skills",
  ];

  const personalSkills = [
    "Scientific curiosity",
    "Ability to work under pressure",
  ];

  const software = [
    "Catia V5", "Ansys", "Matlab", "LabVIEW", "FeatureCAM", "Microsoft Office"
  ];

  const languages = [
    "French: B2", "English: B1", "Arabic"
  ];

  const certifications = [
    "Jupyter | 365 Data Science",
    "Computer Vision | Alison",
    "Fusion 360 Circuit Design and PCB Manufacturing | Udemy"
  ];

  const education = [
    {
      year: "2023-present",
      degree: "State Engineer Diploma in Mechatronics and Production",
      institution: "Faculty of Sciences and Techniques of Beni Mellal (FSTBM)"
    },
    {
      year: "2021-2023",
      degree: "University Diploma in Science and Technology in Mathematics, Computer Science, and Physics",
      institution: "Faculty of Sciences and Techniques of Errachidia (FSTE)"
    },
    {
      year: "2020-2021",
      degree: "Baccalaureate in Mathematics Science A",
      institution: "Hassan II High School, Midelt"
    }
  ];

  const experience = [
    {
      role: "Introductory Internship",
      company: "Univers Système Auto Company, Midelt",
      period: "July 2024",
      description: "First contact with the professional environment and discovering the field of automobiles. Understanding vehicle components and systems, repairing parts, and performing electronic diagnostics using CLIP software."
    }
  ];

  const projects = [
    "Design and development of a tracking robot",
    "Development and manufacturing of an automated electric jack",
    "Development of an intelligent waste sorting system"
  ];

  return (
    <section id="resume" className="py-20 px-8 text-gray-900 dark:text-white max-w-5xl mx-auto">
      <motion.h1 
        className="text-5xl text-center font-bold mb-10 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Resume
      </motion.h1>

      {/* Profile Section */}
      <motion.div
        className="flex mb-8 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">Profile</h2>
          <p>
            Future Engineer in Mechatronics and Production Engineering at FST Beni Mellal. Currently, I am looking for a final year internship (PFA) for a duration of 2 months, starting from July 2025.
          </p>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="flex mb-8 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{edu.year} | {edu.institution}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Professional Experience Section */}
      <motion.div
        className="flex mb-8 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">Professional Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white">{job.role} - {job.company}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{job.period}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="flex mb-8 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded-lg">{skill}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        className="flex mb-8 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">Certifications</h2>
          <ul className="list-disc pl-5">
            {certifications.map((cert, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300">{cert}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="flex mb-8 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">Academic Projects</h2>
          <ul className="list-disc pl-5">
            {projects.map((project, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300">{project}</li>
            ))}
          </ul>
        </div>
      </motion.div>

     {/* Contact & CV Download Section */}
<motion.div
  className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-8"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <motion.div 
    className="w-full md:w-auto p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer text-center md:text-left"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">
      Download My CV
    </h2>
    <button 
      onClick={() => window.open(cv, "_blank")} 
      className="bg-gray-600 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg"
    >
      Download CV <FaArrowDown className="inline-block ml-2 animate-bounce" />
    </button>
  </motion.div>

  <motion.div 
    className="w-full md:w-auto p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer text-center md:text-left"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">
      Contact
    </h2>
    <div className="flex justify-center md:justify-start gap-6">
      <a href="https://github.com/hasnaeait" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-600">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hasnae-ait-lhaj" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-600">
        <FaLinkedin />
      </a>
      <a href="mailto:aitlhajhasnae@gmail.com" className="text-2xl text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-600">
        <FaEnvelope />
      </a>
    </div>
  </motion.div>
</motion.div>
    </section>
  );
};

export default Resume;