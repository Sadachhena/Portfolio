import { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-7xl mx-auto">

          {/* Logo */}
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-8 sm:w-10 md:w-12 lg:w-14 h-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/skill" className="hover:text-blue-400">Skills</Link>
            <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Social */}
            <div className="hidden md:flex gap-4 items-center">

              <a href="https://github.com/Sadachhena" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/sada-chhena-35465a3a6/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>

              <a href="https://wa.me/923166046910?text=Hi%20Sada%2C%20I%20want%20to%20connect%20with%20you" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>

              <a href="https://www.facebook.com/profile.php?id=100084144860145" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>

            </div>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download="Sada-Hussain-CV.pdf"
              className="hidden md:block border border-white/40 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Download CV
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

      {/* MOBILE MENU */}
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

          {/* Download CV (Mobile) */}
          <a
            href="/cv.pdf"
            download="Sada-Hussain-CV.pdf"
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition text-lg"
          >
            Download CV
          </a>

        </div>

        {/* Social Bottom */}
        <div className="flex justify-center gap-6 pb-10 text-xl">

          <a href="https://github.com/Sadachhena" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sada-chhena-35465a3a6/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>

          <a href="https://wa.me/923166046910?text=Hi%20Sada%2C%20I%20want%20to%20connect%20with%20you" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100084144860145" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>

        </div>

      </div>
    </>
  );
}