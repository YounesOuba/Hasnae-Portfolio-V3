import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { title: "Home", href: "/" },
    { title: "About", href: "about", scroll: true },
    { title: "Projects", href: "project", scroll: true },
    { title: "Resume", href: "resume", scroll: true },
    { title: "Contact", href: "contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-20">
          <ul className="flex flex-col items-center gap-y-4 py-4">
            {data.map((link, id) => (
              <li key={id}>
                {link.scroll ? (
                  <ScrollLink
                    to={link.href}
                    smooth={true}
                    duration={500}
                    className="font-incognito text-pink-600 dark:text-pink-400 dark:hover:text-pink-600 hover:text-pink-400 duration-300 text-base relative group cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={link.href}
                    className="font-incognito text-pink-600 dark:text-pink-400 dark:hover:text-pink-600 hover:text-pink-400 duration-300 text-base relative group"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
