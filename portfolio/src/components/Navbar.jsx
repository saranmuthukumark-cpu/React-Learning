import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f2a] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <a
          href="#"
          className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {"<Saran/>"}
        </a>

        <ul className="hidden md:flex gap-8 text-gray-300 font-bold">
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-cyan-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-cyan-400">
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 bg-linear-to-r from-cyan-400 to-purple-500 px-6 py-3 rounded-full">
              Contact
            </a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0f2a] px-8 pb-6">
          <ul className="flex flex-col gap-4 text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
      )}
    </nav>
  );
}
