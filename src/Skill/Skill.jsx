import { motion } from "framer-motion";

const skills = [
  { name: "Web Development", value: 95 },
  { name: "Brand Identity", value: 80 },
  { name: "Logo Design", value: 90 },
];

export default function Skills() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto mt-24 px-6">
      <div className="bg-black/60 backdrop-blur-lg rounded-3xl py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Turning ideas into clean and high-performance digital experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skill, i) => {
            const circumference = 2 * Math.PI * 54;

            return (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="relative w-32 h-32">

                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="#1f2937"
                      strokeWidth="10"
                      fill="transparent"
                    />

                    {/* Animated Circle */}
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="url(#gradient)"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{
                        strokeDashoffset:
                          circumference -
                          (circumference * skill.value) / 100,
                      }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Gradient */}
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                    {skill.value}%
                  </div>
                </div>

                <p className="mt-4 text-sm">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}