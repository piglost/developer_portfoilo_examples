export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl md:left-auto md:right-20 md:translate-x-0" />
      <div className="absolute bottom-10 left-6 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal-up">
          <p className="mb-5 text-sm font-medium tracking-[0.32em] text-cyan-300 uppercase">
            Frontend Developer
          </p>
          <h1 className="max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            构建
            <span className="bg-gradient-to-r from-cyan-200 via-emerald-200 to-cyan-400 bg-clip-text text-transparent">
              清晰稳定
            </span>
            的前端产品体验。
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
            我专注于 React、TypeScript 和现代前端工程，把产品目标转化为可维护的界面与可靠的交互流程。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:scale-[1.02]"
              href="#projects"
            >
              查看项目
            </a>
            <a
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/40"
              href="#contact"
            >
              联系我
            </a>
          </div>
        </div>

        <div className="reveal-up flex justify-center md:justify-end">
          <div className="relative h-76 w-76 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 shadow-2xl shadow-cyan-950/30 sm:h-88 sm:w-88">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(103,232,249,0.35),transparent_34%),radial-gradient(circle_at_75%_70%,rgba(110,231,183,0.22),transparent_36%)]" />
            <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-zinc-950/65 p-6">
              <img
                alt="个人头像"
                className="h-36 w-36 rounded-full border border-white/15 bg-zinc-900 object-cover shadow-xl shadow-black/30"
                loading="lazy"
                src="/avatar.svg"
              />
              <div>
                <p className="text-2xl font-semibold">Your Name</p>
                <p className="mt-2 text-sm text-zinc-400">React / TypeScript / Product UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
