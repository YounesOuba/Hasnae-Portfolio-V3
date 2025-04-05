import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzenrjk");
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-900 dark:text-white">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎉 Thank You!
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your message has been successfully sent. I will get back to you as soon as possible.
        </motion.p>
        <motion.a
          href="Home"
          className="mt-6 bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Back Home
        </motion.a>
      </div>
    );
  }


  return (
    <div id="contact" className="contact -mt-8 p-6 md:p-12 py-32 w-full min-h-screen flex flex-col items-center text-gray-900 dark:text-white">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Contact Me
      </motion.h1>

      <motion.section
        className="contact-content w-full bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Contact Information */}
        <motion.div
          className="contact-info flex flex-col gap-6 w-full lg:w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">Get In Touch</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Feel free to reach out to me through any of the following methods:
          </p>
          <ul className="space-y-6">
            <motion.li
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope size={20} color="currentColor" />
              <span>
                Email:{" "}
                <a href="mailto:aitlhajhasnae@gmail.com" className="text-pink-500 dark:text-pink-400 hover:underline">
                  aitlhajhasnae@gmail.com
                </a>
              </span>
            </motion.li>
            <motion.li
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaLinkedin size={20} color="currentColor" />
              <span>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/hasnae-ait-lhaj" target="_blank" rel="noopener noreferrer" className="text-pink-500 dark:text-pink-400 hover:underline">
                  Hasnae Ait Lhaj
                </a>
              </span>
            </motion.li>
            <motion.a
              href="tel:+212651250889"
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-3 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone size={20} color="currentColor" />
              Phone:{" "}
              <span className="text-pink-500 dark:text-pink-400 hover:underline">+212 6 51-250889</span>
            </motion.a>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form w-full lg:w-2/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">Send Me a Message</h2>
          <form
            className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6"
            action="https://formspree.io/f/mrbekgyq"
            method="POST"
            onSubmit={handleSubmit}
            acceptCharset="UTF-8"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="p-3 md:p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-400 transition-all"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="p-3 md:p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-400 transition-all"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              className="p-3 md:p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-400 transition-all"
            ></textarea>
            <motion.button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg transition-all mt-2 md:mt-4"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
