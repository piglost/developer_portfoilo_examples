import { projects } from '../data/projects';

export function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="projects">
      <div className="reveal-up mb-10 max-w-2xl">
        <p className="text-sm font-medium tracking-[0.28em] text-cyan-300 uppercase">Work</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">项目展示</h2>
        <p className="mt-4 text-zinc-300">精选项目覆盖作品集、数据看板和工程自动化方向。</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            className="reveal-up group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            key={project.name}
          >
            <div className="border-b border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-3">
              <img
                alt={`${project.name} 项目截图`}
                className="h-44 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                src={project.image}
              />
            </div>

            <div className="flex min-h-72 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                className="mt-6 inline-flex w-fit text-sm font-semibold text-cyan-300 transition hover:text-cyan-100"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                打开项目
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
