import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom"; 
import { Link as ScrollLink } from "react-scroll"; 
import LogoDark from "./assets/logo-dark.png";
import LogoLight from "./assets/logo-light.png";
import './Hstyle.css';
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const data = [
    { title: "Home", href: "/" },
    { title: "About", href: "about", scroll: true }, 
    { title: "Projects", href: "project", scroll: true },
    { title: "Resume", href: "resume", scroll: true },
    { title: "Contact", href: "contact", scroll: true },
  ];

  return (
  <header className="sticky top-0 bg-white/30 dark:bg-zinc-900/90 backdrop-blur-lg text-sm py-6 md:px-16 px-6 border-b border-zinc-200 dark:border-zinc-800 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          className="-mb-4 -mt-5"
          src={isDarkMode ? LogoDark : LogoLight}
          width={100}
          height={100}
          alt="logo"
        />

        {/* Navigation */}
        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-8">
            {data.map((link, id) => (
              <li key={id}>
                {link.scroll ? (
                  // Scroll Link for internal sections
                  <ScrollLink
                    to={link.href}
                    smooth={true}
                    duration={500}
                    className="font-incognito text-pink-600 dark:text-pink-400 dark:hover:text-pink-600 hover:text-pink-400 duration-300 text-base relative group cursor-pointer"
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-pink-600 dark:bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                ) : (
                  // React Router Link for other pages
                  <RouterLink
                    to={link.href}
                    className="font-incognito text-pink-600 dark:text-pink-400 dark:hover:text-pink-600 hover:text-pink-400 duration-300 text-base relative group"
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-pink-600 dark:bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 border rounded-md bg-zinc-200 dark:bg-zinc-700"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
