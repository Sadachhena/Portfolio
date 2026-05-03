import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-8 text-white">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <h2 className="text-lg font-semibold">© 2026 Sada. All rights reserved.</h2>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-xl">

          <a
            href="#"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            target="_blank"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="#"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

    </footer>
  );
}