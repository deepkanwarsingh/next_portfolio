const stack = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js"]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express JS", "MongoDB", "C/C++"]
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Docker", "AWS", "GIT", "CI/CD", "Figma", "Trelo", "Jira", "Postman"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 outfit">Technical Stack</h2>
          <p className="text-gray-500 text-xs md:text-sm">The tools I use to build the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stack.map((group) => (
            <div key={group.category} className="glass-card rounded-2xl p-6 md:p-8 hover:box-glow-blue transition-all">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="text-lg md:text-xl">{group.icon}</span>
                <h3 className="text-base md:text-lg font-bold outfit tracking-tight">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] md:text-xs font-bold text-gray-400 hover:text-white hover:border-primary-glow transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
