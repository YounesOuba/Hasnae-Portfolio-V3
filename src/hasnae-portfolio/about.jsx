import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCube,
  FaPhone,
  FaBriefcase,
  FaUser,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  const skills = [
    "Robotics",
    "Electronics",
    "Machine Learning",
    "Python",
    "MATLAB",
    "Java",
    "Computer-Aided Manufacturing (CAM)",
    "Computer-Aided Design (CAD)",
    "Electrical Circuit Design (PCB Manufacturing)",
  ];

  const experiences = [
    {
      period: "Aug 2025 – Sep 2025",
      title: "Internship, 3D Smart Factory – Mohammedia",
      tasks: [
        "Modeling a 6-axis robotic arm and developing precision algorithms.",
      ],
    },
    {
      period: "Jul 2025 – Aug 2025",
      title: "Internship, Harmony Technology – Rabat",
      tasks: [
        "Design of an intelligent assistance system for elderly and disabled people.",
        "Development of an associated web application.",
      ],
    },
    {
      period: "Jul 2025 – Aug 2025",
      title: "Internship, Smart Automation Technologies – Tangier",
      tasks: [
        "Development of a predictive maintenance approach for gearboxes.",
        "Use of machine learning and vibration analysis.",
      ],
    },
    {
      period: "Jul 2024",
      title: "Introductory Internship, Univers Système Auto – Midelt",
      tasks: [
        "Discovery of the automotive field and understanding of vehicle systems.",
        "Carrying out electronic diagnostics using CLIP software.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-[#0d0d0f] text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center mb-16 font-rajdhani tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-10">
          {/* Introduction */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-pink-500/20 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-semibold mb-3 flex items-center gap-2 text-pink-500 font-rajdhani">
              <FaUser /> Introduction
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Hi, I'm{" "}
              <span className="text-pink-500 font-semibold">Hasnae</span>, an
              engineer and developer passionate about{" "}
              <strong>robotics</strong> and{" "}
              <strong>automation</strong>. I bridge{" "}
              <span className="text-pink-500 font-semibold">mechanics</span> and{" "}
              <span className="text-pink-500 font-semibold">electronics</span> to
              craft intelligent, innovative systems that shape the future.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 pb-20 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-pink-500/20 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2 text-pink-500 font-rajdhani">
              <FaTools /> Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-pink-100 dark:bg-pink-600/20 text-pink-600 dark:text-pink-300 font-medium py-2 px-4 rounded-full text-sm hover:bg-pink-200 dark:hover:bg-pink-600/40 transition-all cursor-default"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {/* Experience */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 pb-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-pink-500/20 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2 text-pink-500 font-rajdhani">
              <FaBriefcase /> Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <p className="text-pink-500 font-semibold">{exp.period}</p>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    {exp.title}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1 text-sm">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vision */}
          <motion.div
            className="bg-white mt-10 max-w-6xl mx-auto dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-pink-500/20 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2 text-pink-500 font-rajdhani">
              <FaLightbulb /> My Vision
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              My vision is to push the boundaries of robotics innovation —
              merging{" "}
              <span className="text-pink-500 font-semibold">mechanics</span> and{" "}
              <span className="text-pink-500 font-semibold">electronics</span>{" "}
              to build autonomous systems that improve industries and human
              lives through intelligent engineering.
            </p>
          </motion.div>


      {/* Contact Info */}
<motion.div
  className="mt-20 max-w-5xl mx-auto text-center"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl font-bold mb-10 flex justify-center items-center gap-3 text-pink-500 font-rajdhani">
    <FaPhone className="text-pink-500" /> Contact Info
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {/* Contact Card */}
    {[ 
      {
        icon: <FaGithub size={22} />,
        label: "GitHub",
        href: "https://github.com/hasnaeait",
        external: true,
      },
      {
        icon: <FaCube size={22} />,
        label: "GrabCAD",
        href: "https://grabcad.com/hasnae.ait.lhaj-1",
        external: true,
      },
      {
        icon: <FaLinkedin size={22} />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hasnae-ait-lhaj",
        external: true,
      },
      {
        icon: <FaEnvelope size={22} />,
        label: "Email",
        href: "mailto:aitlhajhasnae@gmail.com",
        external: true,
      },
      {
        icon: <FaPhone size={22} />,
        label: "+212 6 51-250889",
        href: "tel:+212651250889",
        external: true,
      },
      {
        icon: <FaEnvelope size={22} />,
        label: "Contact Me (Form)",
        to: "contact-form",
        scroll: true,
        external: false,
      },
    ].map((contact, i) => (
      contact.external ? (
        <motion.a
          key={i}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-pink-400 transition-all duration-300 flex flex-col items-center gap-3"
          whileHover={{ y: -5 }}
        >
          <div className="p-4 rounded-full bg-pink-100 dark:bg-pink-600/20 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
            {contact.icon}
          </div>
          <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-500">
            {contact.label}
          </span>
        </motion.a>
      ) : (
        <ScrollLink
          key={i}
          to={contact.to}
          smooth={true}
          duration={600}
          offset={-40}
        >
          <motion.button
            className="group bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-pink-400 transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer w-full"
            whileHover={{ y: -5 }}
          >
            <div className="p-4 rounded-full bg-pink-100 dark:bg-pink-600/20 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
              {contact.icon}
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-500">
              {contact.label}
            </span>
          </motion.button>
        </ScrollLink>
      )
    ))}
  </div>
</motion.div>

    </section>
  );
};

export default About;
