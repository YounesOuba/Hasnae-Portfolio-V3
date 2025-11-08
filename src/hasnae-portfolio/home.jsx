import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import cv from "./assets/Ait_Lhaj_Hasnae-PFE_2026.pdf";

export default function Home() {
  const fullText = "Welcome to My World";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative w-full h-screen flex flex-col justify-center items-center text-center px-6 
        bg-gradient-to-b from-gray-100 via-white to-gray-200 
        dark:from-gray-900 dark:via-gray-800 dark:to-black 
        transition-all duration-500 overflow-hidden
      "
    >
      {/* Background Glow (subtle & theme-adaptive) */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(255,192,203,0.3), transparent 60%)",
            "radial-gradient(circle at 70% 80%, rgba(0,191,255,0.3), transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(255,182,193,0.3), transparent 60%)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Title (Typing effect) */}
      <motion.h1
        className="
          relative z-10 text-4xl md:text-6xl font-bold 
          text-gray-900 dark:text-white font-orbitron drop-shadow-lg
        "
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {displayText}
        <span className="animate-blink text-pink-500">|</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        className="
          relative z-10 mt-6 space-y-3 
          text-gray-700 dark:text-gray-300 text-lg md:text-2xl font-orbitron
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p>
          Bridging <span className="text-pink-500">Mechanics</span> &{" "}
          <span className="text-pink-500">Electronics</span>
        </p>
        <p>
          Innovating the Future of{" "}
          <span className="text-pink-500">Robotics & Automation</span>
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* Download CV */}
        <button
          onClick={() => window.open(cv, "_blank")}
          className="
            flex items-center justify-center gap-2 
            bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600
            text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-pink-400/40
            transition-all duration-300 font-orbitron
          "
        >
          <FaDownload className="text-lg" />
          Download CV
        </button>

        {/* Get Started */}
        <ScrollLink to="about" smooth={true} duration={600}>
          <button
            className="
              flex items-center justify-center gap-2 mx-auto 
              bg-gray-800 hover:bg-gray-700 
              dark:bg-gray-200 dark:hover:bg-gray-300 
              text-white dark:text-gray-900 font-bold 
              py-3 px-6 rounded-lg shadow-md transition-all duration-300 font-orbitron
            "
          >
            Get Started <FaArrowDown className="animate-bounce" />
          </button>
        </ScrollLink>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center text-gray-500 dark:text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown className="text-2xl text-pink-500" />
        <p className="text-sm mt-1 font-orbitron">Scroll Down</p>
      </motion.div>
    </section>
  );
}
