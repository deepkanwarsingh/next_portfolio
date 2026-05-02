import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 outfit">Curated Works</h2>
            <p className="text-gray-500 text-sm max-w-md">A selection of architectures designed for performance and purpose.</p>
          </div>
          <p className="text-[10px] md:text-xs font-bold tracking-widest text-gray-600 uppercase">Scroll to explore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Project */}
          <div className="md:col-span-8 group">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] glass-card rounded-3xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-black/40 z-10 md:bg-black/20 group-hover:bg-black/0 transition-colors" />
              <Image 
                src="/dashboard_mockup.png" 
                alt="SaaS AI Platform" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 z-20">
                <span className="px-3 py-1 bg-primary-glow text-black text-[10px] font-black rounded-full mb-4 inline-block tracking-tighter">FEATURED</span>
                <h3 className="text-2xl md:text-4xl font-bold mb-2 outfit">SaaS AI Platform</h3>
                <p className="text-gray-300 text-xs md:text-sm max-w-sm mb-6">
                  Full-scale enterprise dashboard for AI performance monitoring and resource management. Scaled to 10k+ daily users.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "GraphQL"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-gray-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Projects */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="glass-card rounded-3xl p-6 md:p-8 flex-1 group hover:border-secondary-glow/30">
              <div className="w-10 h-10 bg-secondary-glow/10 rounded-xl flex items-center justify-center text-secondary-glow mb-6">
                <span>🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-2 outfit">MLOps Pipeline</h3>
              <p className="text-gray-500 text-xs mb-6">Automated cloud infrastructure for machine learning workflows.</p>
              <span className="text-[10px] font-bold text-gray-600">AWS • PYTHON</span>
            </div>

            <div className="glass-card rounded-3xl p-6 md:p-8 flex-1 group hover:border-primary-glow/30">
              <div className="w-10 h-10 bg-primary-glow/10 rounded-xl flex items-center justify-center text-primary-glow mb-6">
                <span>📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2 outfit">Data Analytics</h3>
              <p className="text-gray-500 text-xs mb-6">Real-time business intelligence for financial dashboards.</p>
              <span className="text-[10px] font-bold text-gray-600">D3.JS • POSTGRES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
