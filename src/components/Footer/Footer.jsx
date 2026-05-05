import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-50 mt-24 border-t border-white/10 py-8 text-white">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <h2 className="text-lg font-semibold">
          © 2026 Sada. All rights reserved.
        </h2>

        <div className="flex gap-5 text-xl">

          <a href="https://github.com/Sadachhena" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sada-chhena-35465a3a6/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/923166046910?text=Hi%20Sada%2C%20I%20want%20to%20connect%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100084144860145" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>

        </div>

      </div>

    </footer>
  );
}