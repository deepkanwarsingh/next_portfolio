export default function Stats() {
  return (
    <section id="about" className="py-20 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="md:col-span-5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 outfit tracking-tight">Summary</h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              I am havinig 2 years of expirence in developinng production grade applications , have developed multiple web applications using various technologies.
              I am always eager to learn new technologies and develop new applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 glass-card rounded-2xl">
                <p className="text-[10px] md:text-xs font-bold text-gray-500 mb-2 uppercase">Domain Expertise</p>
                <p className="text-xs md:text-sm text-gray-300">Scalable Architecture & Cloud Infrastructure</p>
              </div>
              <div className="p-6 glass-card rounded-2xl">
                <p className="text-[10px] md:text-xs font-bold text-gray-500 mb-2 uppercase">Innovation</p>
                <p className="text-xs md:text-sm text-gray-300">AI Integration & Interactive Experiences</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-square glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-end group">
              <div className="mb-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-glow/10 rounded-xl flex items-center justify-center text-primary-glow mb-4">
                  <span className="text-xl md:text-2xl">&lt;/&gt;</span>
                </div>
              </div>
              <h3 className="text-6xl md:text-7xl font-bold mb-2 outfit group-hover:text-primary-glow transition-colors">2+</h3>
              <p className="text-gray-500 font-bold tracking-widest uppercase text-[10px] md:text-xs">Years Exp</p>
            </div>

            <div className="aspect-square glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-end group">
              <div className="mb-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary-glow/10 rounded-xl flex items-center justify-center text-secondary-glow mb-4">
                  <span className="text-xl md:text-2xl">🚀</span>
                </div>
              </div>
              <h3 className="text-6xl md:text-7xl font-bold mb-2 outfit group-hover:text-secondary-glow transition-colors">8</h3>
              <p className="text-gray-500 font-bold tracking-widest uppercase text-[10px] md:text-xs">Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
