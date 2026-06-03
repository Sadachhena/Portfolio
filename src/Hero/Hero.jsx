import { TypeAnimation } from "react-type-animation";
import Heroimage from "../Hero/HeroImage.png";

export default function Hero() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 mt-20 grid md:grid-cols-2 md:py-3  items-center gap-12">

      {/* LEFT CONTENT */}
      <div>
        <span className="inline-block border border-white/20 px-4 py-1 text-sm bg-white/5 backdrop-blur-md rounded-full">
          Welcome to my Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
          Hi, I’m <span className="text-blue-400">Sada</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-gray-300">
          <TypeAnimation
            sequence={[
              "Web Developer", 2000,
              "Frontend Developer", 2000,
              "React Developer", 2000,
              "Next.js Developer", 2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-gray-400 mt-5 max-w-lg leading-relaxed">
          I build modern, responsive, and high-performance web applications
          focused on clean design and smooth user experience.
        </p>

        <button
          onClick={() =>
            window.location.href =
              "mailto:sadachhena@gmail.com?subject=Project Inquiry&body=Hi Sada, I want to work with you."
          }
          className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Let’s Connect →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center items-center">
        {/* Glow */}
        <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full opacity-30 blur-3xl"></div>

        {/* Image */}
      
         <img
          src={Heroimage}
          alt="Hero"
          className="relative w-[260px] md:w-[550px]  rounded-2xl object-cover"
        />
       
      </div>

    </section>
  );
}