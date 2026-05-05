export default function CTA() {
  return (
    <section className="mt-24 px-6 relative z-10">

      <div className="max-w-6xl mx-auto rounded-[40px] p-10 md:p-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a Project in Mind?
        </h2>

        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          I design and build modern, high-performance websites that help businesses grow.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded hover:scale-105 transition"
          >
            Hire Me
          </a>

         <a
  href="/cv.pdf"
  download="Sada-Hussain-CV.pdf"
  className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
>
  Download CV
</a>

        </div>
      </div>

    </section>
  );
}