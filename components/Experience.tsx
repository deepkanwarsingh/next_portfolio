export default function Experience() {
  const jobs = [
    {
      role: "Software Developer",
      company: "Wissen Research",
      period: "Aug 2024 — PRESENT",
      description: [
        "Led the transition from monolithic architecture to a microservices ecosystem, reducing latency by 45%.",
        "Orchestrated cross-functional teams of 12 engineers to ship a mission-critical financial dashboard.",
        "Implemented automated CI/CD pipelines resulting in a 70% reduction in deployment frequency errors."
      ]
    },
    {
      role: "MERN stack Developer intern",
      company: "Infostride",
      period: "jan 2024 — may 2024",
      description: [
        "Built and maintained reusable UI components library used across 5 different product lines.",
        "Developed high-performance API endpoints serving 1M+ requests daily with Node.js and Redis."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 outfit text-center">My Professional Journey</h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-12 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          {jobs.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Dot */}
              <div className="absolute left-[-8px] md:left-1/2 md:translate-x-[-50%] top-2 md:top-1/2 md:translate-y-[-50%] z-10 w-4 h-4 rounded-full bg-primary-glow box-glow-yellow" />

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                <div className="flex-1 md:text-right">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-1 md:gap-4">
                    <h3 className="text-xl md:text-2xl font-bold outfit">{job.role}</h3>
                    <span className="hidden md:block text-gray-600">|</span>
                    <p className="text-primary-glow font-bold text-xs md:text-sm uppercase tracking-wider">{job.company}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">{job.period}</p>
                </div>
              </div>

              {/* Description Content */}
              <div className="mt-6 glass-card p-6 md:p-8 rounded-2xl max-w-2xl mx-auto md:mx-0 md:ml-auto md:w-[45%] md:relative md:left-0">
                <ul className="space-y-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-xs md:text-sm leading-relaxed flex gap-3">
                      <span className="text-primary-glow text-base md:text-lg">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
