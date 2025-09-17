const config = [
  {
    name: "Twinkle",
    href: "https://twinkle.jhub.space",
    desc: "Free open source Tailwind CSS component library",
    tags: ["react", "nextjs", "component-lib", "tailwindcss"],
  },
  {
    name: "Libran",
    href: "https://libran.jhub.space",
    desc: "Libran is a Next.js and TwinkleUI website example in TypeScript.",
    tags: ["react", "nextjs", "design", "tailwindcss"],
  },
];

export default function Home() {
  return (
    <div className="font-sans grid relative overflow-hidden grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <span className="bg-rose-500/50 dark:bg-rose-500/50 pointer-events-none absolute bottom-0 left-1/2 z-0 size-[80%] -translate-x-1/2 translate-y-2/3 rounded-full blur-[200px] transition-transform duration-300 ease-in-out"></span>
      <div className="w-full flex items-center flex-wrap justify-center gap-10">
        {config.map((proj) => (
          <div
            key={proj.name}
            className="h-[440px] relative flex-shrink-0 overflow-hidden grid grid-rows-[1fr_auto] max-w-[500px] w-full rounded-2xl border border-white/20 bg-white/5 shadow-lg backdrop-blur-lg"
          >
            <div className="relative group m-4 flex w-full flex-col gap-1 overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <div
                className="absolute origin-top-left scale-[0.3] group-hover:scale-[0.35] duration-500 ease-in-out transition-all"
                style={{
                  // transform: "scale(0.3)", // 缩小比例 30%
                  width: "333.33%", // = 100% / 0.3
                  height: "333.33%",
                }}
              >
                <iframe
                  src={proj.href}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a
                  href={proj.href}
                  target="_blank"
                  className="group relative inline-flex cursor-pointer items-center justify-center rounded-xl bg-white/60 px-4 py-2 text-sm text-purple-800 no-underline ring-1 ring-gray-300/50 backdrop-blur-md transition-all duration-300 hover:shadow-lg active:scale-90 dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20 dark:hover:ring-white/50"
                >
                  访问项目
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 w-0 transition-all group-hover:w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span className="pointer-events-none absolute right-2 bottom-2 z-0 size-5 rounded-full bg-purple-400/50 blur-[6px] transition-transform duration-300 ease-in-out group-hover:translate-1/2 dark:bg-purple-400/40"></span>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-t from-black/50 to-transparent p-5 pt-3">
              <h3 className="text-2xl font-bold text-white">{proj.name}</h3>
              <p className="text-xs text-gray-300 mt-1">{proj.desc}</p>
              <div className="flex items-center gap-2 mt-3">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="relative inline-block truncate rounded-full bg-white/70 px-3 py-1 text-xs text-purple-800 shadow ring-1 shadow-black/10 ring-white/30 backdrop-blur-md dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20"
                  >
                    <span className="relative z-10">{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
