export const Services = () => {
  return (
    <div className="bg-zinc-950 py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-900">
      {/* Process / How we work */}
      <div className="mb-32">
        <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-6 block">
          Our Process
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 max-w-3xl leading-tight">
          We distill complex ideas into{" "}
          <span className="italic text-zinc-500">moving art</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-zinc-800 -z-10"></div>

          <div className="space-y-6 relative bg-zinc-950 pr-4">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-lg shadow-black/50">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Discovery & Script
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                We dive deep into your brand&apos;s core message. We craft
                scripts that speak to your audience and define the visual
                language before a single pixel is pushed.
              </p>
            </div>
          </div>
          <div className="space-y-6 relative bg-zinc-950 pr-4">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-lg shadow-black/50">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Style & Storyboard
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                Every frame is designed intentionally. We build comprehensive
                style frames and storyboards to ensure the vision aligns
                perfectly with your brand guidelines.
              </p>
            </div>
          </div>
          <div className="space-y-6 relative bg-zinc-950 pr-4">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-lg shadow-black/50">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Animation & Sound
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                The magic happens here. We breathe life into static assets with
                fluid motion and immersive sound design for a broadcast-ready
                finish.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Categories */}
      <div>
        <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-12 block">
          Capabilities
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="group bg-zinc-900/20 p-8 border border-zinc-800 hover:border-indigo-900/50 hover:bg-zinc-900/40 transition-all duration-500">
            <div className="h-12 w-12 mb-6 text-zinc-600 group-hover:text-indigo-400 transition-colors">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">
              Animated Explainers
            </h3>
            <p className="text-zinc-400 font-light mb-8 text-sm leading-relaxed min-h-[80px]">
              Clarify your product or service. We turn technical manuals and
              abstract concepts into engaging narratives that drive conversion.
            </p>
            <ul className="text-xs text-zinc-500 space-y-3 font-mono border-t border-zinc-800 pt-6 group-hover:border-indigo-900/30 transition-colors">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Product Demos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                SaaS Walkthroughs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Educational Series
              </li>
            </ul>
          </div>

          <div className="group bg-zinc-900/20 p-8 border border-zinc-800 hover:border-indigo-900/50 hover:bg-zinc-900/40 transition-all duration-500">
            <div className="h-12 w-12 mb-6 text-zinc-600 group-hover:text-indigo-400 transition-colors">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">
              Motion Graphics
            </h3>
            <p className="text-zinc-400 font-light mb-8 text-sm leading-relaxed min-h-[80px]">
              Elevate your brand identity. From logo animations to full
              broadcast packages, we create systems of movement that define your
              brand.
            </p>
            <ul className="text-xs text-zinc-500 space-y-3 font-mono border-t border-zinc-800 pt-6 group-hover:border-indigo-900/30 transition-colors">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Logo Animation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Brand Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Event Visuals
              </li>
            </ul>
          </div>

          <div className="group bg-zinc-900/20 p-8 border border-zinc-800 hover:border-indigo-900/50 hover:bg-zinc-900/40 transition-all duration-500">
            <div className="h-12 w-12 mb-6 text-zinc-600 group-hover:text-indigo-400 transition-colors">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Digital Ads</h3>
            <p className="text-zinc-400 font-light mb-8 text-sm leading-relaxed min-h-[80px]">
              Stop the scroll. We produce high-octane, short-form content
              optimized for social media performance and digital marketing
              campaigns.
            </p>
            <ul className="text-xs text-zinc-500 space-y-3 font-mono border-t border-zinc-800 pt-6 group-hover:border-indigo-900/30 transition-colors">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Social Shorts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Performance Marketing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                Teasers & Promos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
