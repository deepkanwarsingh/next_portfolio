export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter outfit">
          DEEPKANWAR SINGH
        </div>

        <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
          © 2026 DEEPKANWAR SINGH. ALL RIGHTS RESERVED.
        </p>

        <div className="flex gap-8">
          {["GITHUB", "LINKEDIN"].map(item => (
            <a key={item} href="#" className="text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
