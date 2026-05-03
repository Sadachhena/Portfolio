import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative z-10 grid md:grid-cols-2 items-center max-w-7xl mx-auto px-6 md:px-10 mt-16">

      <div>
        <span className="border border-white/30 px-4 py-1 text-sm bg-purple-800/30 backdrop-blur">
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

        <p className="text-gray-300 mt-4 max-w-lg">
          I build modern, responsive, and high-performance web applications.
        </p>

        <button className="mt-6 border border-white/40 px-4 py-2 hover:bg-white hover:text-black">
          Let’s Connect →
        </button>
      </div>

      {/* FIXED PART */}
      <div className="mt-10 md:mt-0 flex justify-center pointer-events-none">
        <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 opacity-40 blur-2xl"></div>
      </div>

    </section>
  );
}