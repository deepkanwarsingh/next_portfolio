"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions";

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    setIsPending(false);
    if (result.success) {
      setStatus({ success: true });
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus({ error: result.error });
    }
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 outfit leading-tight">
              Let&apos;s build <br />
              <span className="text-primary-glow glow-yellow">something real.</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-12 max-w-sm mx-auto md:mx-0 text-sm md:text-base">
              Currently open to Opportunities in Frontend and Full stack.
            </p>

            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary-glow/20 transition-colors">
                  <span className="text-lg md:text-xl">📍</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase">Location</p>
                  <p className="text-xs md:text-sm font-medium">Chandigarh, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-secondary-glow/20 transition-colors">
                  <span className="text-lg md:text-xl">✉️</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase">Email</p>
                  <p className="text-xs md:text-sm font-medium">deepkanwarmann@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4 mt-10 md:mt-12">
              {["LinkedIn", "Twitter", "GitHub"].map(social => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[10px] font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-10 rounded-3xl box-glow-yellow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase mb-2 block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-primary-glow outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-primary-glow outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-primary-glow outline-none transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {status?.success && (
                <p className="text-green-500 text-sm font-medium text-center">Message sent successfully!</p>
              )}
              {status?.error && (
                <p className="text-red-500 text-sm font-medium text-center">{status.error}</p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-primary-glow text-black font-black rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 text-sm"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
