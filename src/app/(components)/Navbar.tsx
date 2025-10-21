"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#tools", label: "Tools" },
    { href: "#recentwork", label: "Recent Work" },
    { href: "#contact", label: "Get In Touch" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/emwiri/",
      icon: <SlSocialInstagram />,
      hover: "hover:text-pink-600",
    },
    {
      href: "https://www.linkedin.com/in/amir-nekoonam-945125281/",
      icon: <SlSocialLinkedin />,
      hover: "hover:text-blue-400",
    },
    {
      href: "https://github.com/amirnekoonam",
      icon: <SlSocialGithub />,
      hover: "hover:text-white",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 250;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
      <header
        className={`mx-auto flex items-center justify-between font-sans px-6 max-w-[1200px] rounded-b-2xl transition-all duration-300 backdrop-blur-md
        ${
          scrolled
            ? "bg-[#2b750946]/90 py-5 shadow-lg shadow-black/30"
            : "bg-[#1c1d1c]/90 py-3"
        }`}
      >
        {/* Logo */}
        <h1
          className={`text-white font-semibold transition-all duration-300 ${
            scrolled ? "text-xl" : "text-lg"
          }`}
        >
          Amir.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[#9C9C9C]">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <a
                key={href}
                href={href}
                className={`hover:text-white transition ${
                  isActive
                    ? "border-b-2 border-green-400 text-white"
                    : "text-[#9C9C9C]"
                }`}
              >
                {label}
              </a>
            );
          })}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5 text-[#9C9C9C] text-xl">
          {socialLinks.map(({ href, icon, hover }, i) => (
            <a key={i} href={href} target="_blank" className={hover}>
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white"
        >
          {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#1B1B1B] flex flex-col items-center gap-6 py-6 text-[#9C9C9C] text-lg md:hidden z-50 transition-all">
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-white transition ${
                    isActive
                      ? "border-b-2 border-green-400 text-white"
                      : "text-[#9C9C9C]"
                  }`}
                >
                  {label}
                </a>
              );
            })}

            {/* Social icons (mobile) */}
            <div className="flex items-center gap-6 text-xl mt-4">
              {socialLinks.map(({ href, icon, hover }, i) => (
                <a key={i} href={href} target="_blank" className={hover}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
