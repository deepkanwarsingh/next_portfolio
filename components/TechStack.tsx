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
    <section id="skills" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 outfit">Technical Stack</h2>
          <p className="text-gray-500 text-sm">The tools I use to build the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stack.map((group) => (
            <div key={group.category} className="glass-card rounded-2xl p-8 hover:box-glow-blue transition-all">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-lg font-bold outfit tracking-tight">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-400 hover:text-white hover:border-primary-glow transition-all cursor-default"
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
