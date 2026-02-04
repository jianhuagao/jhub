import AnimatedShow from '@/components/AnimatedShow';
import Image from 'next/image';

const config = [
  {
    name: 'Taurus',
    href: 'https://taurus.jhub.space',
    desc: 'Free open source Tailwind CSS component library',
    tags: ['react', 'nextjs', 'component-lib', 'tailwindcss']
  },
  {
    name: 'Libran',
    href: 'https://libran.jhub.space',
    desc: 'Libran is a Next.js and TaurusUI website example in TypeScript.',
    tags: ['react', 'nextjs', 'design', 'tailwindcss']
  }
];

export default function Home() {
  const avatarUrl = getGithubAvatar('jianhuagao', 80);
  return (
    <div className="relative grid min-h-screen grid-rows-[1fr] items-center justify-items-center gap-16 overflow-hidden p-8 pb-20 font-sans sm:p-8">
      <span className="pointer-events-none absolute bottom-0 left-1/2 -z-10 size-[80%] -translate-x-1/2 translate-y-2/3 rounded-full bg-rose-500/50 blur-[200px] transition-transform duration-300 ease-in-out dark:bg-rose-500/50"></span>
      <div className="flex w-full flex-wrap items-center justify-center gap-10">
        {config.map(proj => (
          <div
            key={proj.name}
            className="relative grid h-[440px] w-full max-w-[500px] shrink-0 grid-rows-[1fr_auto] overflow-hidden rounded-[46px] border border-white/20 bg-white/5 shadow-lg backdrop-blur-lg"
          >
            <div className="group relative m-1 flex w-full flex-col gap-1 overflow-hidden rounded-l-[40px] border border-white/10 shadow-2xl">
              <div
                className="absolute origin-top-left scale-[0.3] transition-all duration-500 ease-in-out group-hover:scale-[0.35]"
                style={{
                  // transform: "scale(0.3)", // 缩小比例 30%
                  width: '333.33%', // = 100% / 0.3
                  height: '333.33%'
                }}
              >
                <iframe src={proj.href} className="h-full w-full" loading="lazy" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 hover:opacity-100">
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                  <span className="pointer-events-none absolute right-2 bottom-2 z-0 size-5 rounded-full bg-purple-400/50 blur-[6px] transition-transform duration-300 ease-in-out group-hover:translate-1/2 dark:bg-purple-400/40"></span>
                </a>
              </div>
            </div>
            <div className="bg-linear-to-t from-black/50 to-transparent p-8 pt-4">
              <a href={proj.href} target="_blank" className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white">{proj.name}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </a>
              <p className="mt-1 text-xs text-gray-300">{proj.desc}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {proj.tags.map(tag => (
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
      <AnimatedShow scale={0.5} inViewShow className="sm:justify-self-end">
        <a
          href="https://github.com/jianhuagao"
          target="_blank"
          className="group block size-[80px] cursor-pointer rounded-full border border-white/20 bg-white/5 p-1 shadow-2xl backdrop-blur dark:bg-black/10"
        >
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/20 shadow-2xl transition-all duration-700">
            {/* SVG 图标 */}
            <svg
              className="absolute inset-0 z-10 m-auto size-8 opacity-0 transition-all duration-500 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>

            {/* Avatar */}
            <Image
              src={avatarUrl}
              alt="My GitHub Avatar"
              width={100}
              height={100}
              className="absolute inset-0 size-full rounded-full object-cover opacity-100 shadow-2xl transition-all duration-500 group-hover:opacity-0"
            />
          </div>
        </a>
      </AnimatedShow>
    </div>
  );
}

function getGithubAvatar(username: string, size: number = 64): string {
  return `https://avatars.githubusercontent.com/${username}?s=${size}&v=4`;
}
