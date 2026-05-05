import { TypeAnimation } from "react-type-animation";
import HeroImage from "../../Images/HeroImage.png";

export default function Hero() {
  return (
    <section className="relative z-10 grid md:grid-cols-2 items-center max-w-7xl mx-auto px-6 md:px-10 py-16 gap-10">

      {/* LEFT CONTENT */}
      <div className="text-center md:text-left">
        <span className="inline-block border border-white/30 px-4 py-1 text-sm bg-purple-800/30 backdrop-blur">
          Welcome to my Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
          Hi! I'm Sada
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-blue-400">
          <TypeAnimation
            sequence={[
              "Web Developer", 2000,
              "Frontend Developer", 2000,
              "React Developer", 2000,
              "Next Js Developer", 2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-gray-300 mt-4 max-w-lg mx-auto md:mx-0">
          I build modern, responsive, and high-performance web applications.
        </p>

        <button className="mt-6 border border-white/40 px-6 py-3 hover:bg-white hover:text-black transition">
          Let’s Connect →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center items-center w-full">

        {/* Glow Background */}
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 opacity-40 blur-3xl"></div>

        {/* Image */}
        <img
          src={HeroImage}
          alt="hero"
          className="relative z-10 w-full max-w-[500px] md:max-w-[650px] object-contain"
        />
      </div>

    </section>
  );
}