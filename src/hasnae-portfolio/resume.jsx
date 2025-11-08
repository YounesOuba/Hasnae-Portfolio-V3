import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaGlobe, FaWhatsapp } from "react-icons/fa";
import cv from "./assets/Ait_Lhaj_Hasnae-PFE_2026.pdf";

const Resume = () => {
  const technicalSkills = [
    "CAD / CAM / RDM / FEM",
    "Robotics & Automotive Systems",
    "Programming: Python, Java, C",
  ];

  const personalSkills = [
    "Teamwork",
    "Problem-solving",
    "Adaptability under pressure",
    "Curiosity & Scientific thinking",
  ];

  const software = [
    "Catia V5", "SolidWorks", "Ansys", "Matlab/Simulink", "LabVIEW", "FeatureCAM", "Microsoft Office"
  ];

  const certifications = [
    "Machine Learning with Python | IBM",
    "Fusion 360 Circuit Design and PCB Manufacturing | Udemy",
  ];

  const languages = [
    "French: Fluent", "English: Intermediate", "Arabic: Native",
  ];

  const education = [
    {
      year: "2023 – Present",
      degree: "State Engineer Diploma in Mechatronics and Production",
      institution: "Faculty of Sciences and Techniques of Beni Mellal (FSTBM)",
    },
    {
      year: "2021 – 2023",
      degree: "University Diploma in Science and Technology (Maths, CS, Physics)",
      institution: "Faculty of Sciences and Techniques of Errachidia (FSTE)",
    },
    {
      year: "2020 – 2021",
      degree: "Baccalaureate in Mathematics Science A",
      institution: "Hassan II High School, Midelt",
    },
  ];

  const experience = [
    {
      role: "End-of-Study Internship (PFE)",
      company: "3D Smart Factory, Mohammedia",
      period: "Aug 2025 – Sep 2025",
      description:
        "Modeling of a 6-axis robotic arm and development of precision algorithms for motion control.",
    },
    {
      role: "PFA Internship",
      company: "Harmony Technology, Rabat",
      period: "Jul 2025 – Aug 2025",
      description:
        "Designed an intelligent assistance system for elderly and disabled people and developed an associated web application.",
    },
    {
      role: "PFA Internship",
      company: "Smart Automation Technologies, Tangier",
      period: "Jul 2025 – Aug 2025",
      description:
        "Developed a predictive maintenance solution for gearboxes using machine learning and vibration analysis.",
    },
    {
      role: "Introductory Internship",
      company: "Univers Système Auto, Midelt",
      period: "Jul 2024",
      description:
        "Explored the automotive industry, studied vehicle systems, and performed electronic diagnostics using CLIP software.",
    },
  ];

  const projects = [
    "Line-following robot design and development",
    "Personnel management system in Java",
    "Intelligent waste sorting system",
    "6-DOF robotic arm design with Matlab/Simulink & ROS",
    "Automated electric jack design",
    "Smart Farm project using AI & IoT for agricultural optimization",
  ];

  return (
    <section
      id="resume"
      className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-gray-900 dark:text-white"
    >
      <motion.h1
        className="text-5xl font-bold text-center mb-16 text-pink-600 dark:text-pink-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Resume
      </motion.h1>

      {/* Profile */}
      <motion.div
        className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-pink-600 dark:text-pink-400">
          Profile
        </h2>
        <p className="text-lg leading-relaxed">
          Future Engineer in Mechatronics and Production Engineering at FST Beni Mellal. 
          Currently seeking a final-year internship (PFE) lasting 4 to 6 months, starting from February 2026.
        </p>
      </motion.div>

      {/* Grid for Education & Experience */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Education */}
        <motion.div
          className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-pink-600 dark:text-pink-400">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-5">
              <h3 className="text-xl font-medium">{edu.degree}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {edu.year} | {edu.institution}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-pink-600 dark:text-pink-400">
            Professional Experience
          </h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-medium">{job.role}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {job.company} | {job.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                {job.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Projects */}
      <motion.div
        className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-pink-600 dark:text-pink-400">
          Academic Projects
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </motion.div>

      {/* Skills & Certifications */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-pink-600 dark:text-pink-400">
            Technical Skills
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-pink-600 dark:text-pink-400">
            Software
          </h3>
          <div className="flex flex-wrap gap-3">
            {software.map((soft, index) => (
              <span
                key={index}
                className="bg-gray-300 dark:bg-gray-700 py-1 px-3 rounded-lg text-sm"
              >
                {soft}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-pink-600 dark:text-pink-400">
            Certifications & Languages
          </h2>
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <ul className="list-disc pl-6 space-y-1">
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Contact */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-4">
            Download My CV
          </h2>
          <button
            onClick={() => window.open(cv, "_blank")}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-5 rounded-lg transition-all"
          >
            Download <FaArrowDown className="inline ml-2 animate-bounce" />
          </button>
        </div>

        <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-4">
            Contact
          </h2>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/hasnae-ait-lhaj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:aitlhajhasnae@gmail.com"
              className="hover:text-pink-600"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/212651250889"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
              title="WhatsApp"
            >
              <FaWhatsapp className="inline w-6 h-6 -mt-2" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
