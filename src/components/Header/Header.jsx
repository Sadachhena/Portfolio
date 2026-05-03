import { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/60 backdrop-blur border-b border-white/10">

        <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-7xl mx-auto">

          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wider">LOGO</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/skill" className="hover:text-blue-400">Skills</Link>
            <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Social */}
            <div className="hidden md:flex gap-3">
              <FaGithub className="cursor-pointer hover:text-purple-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
              <FaWhatsapp className="cursor-pointer hover:text-green-400" />
              <FaFacebookF className="cursor-pointer hover:text-blue-500" />
              <FaInstagram className="cursor-pointer hover:text-pink-400" />
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="hidden md:block border border-white/40 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Let’s Connect
            </a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-2xl z-50"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (PRO VERSION) */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur flex flex-col transform transition duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >

        {/* Top */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <h1 className="text-lg font-bold">LOGO</h1>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl">

          <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/skill" onClick={() => setOpen(false)} className="hover:text-blue-400">
            Skills
          </Link>

          <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-blue-400">
            Projects
          </Link>

        </div>

        {/* Social Bottom */}
        <div className="flex justify-center gap-6 pb-10 text-xl">
          <FaGithub />
          <FaLinkedinIn />
          <FaWhatsapp />
          <FaFacebookF />
          <FaInstagram />
        </div>

      </div>
    </>
  );
}