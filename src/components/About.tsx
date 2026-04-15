import { skills } from '../data/skills';

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="about">
      <div className="reveal-up grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.28em] text-emerald-300 uppercase">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">关于我</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-zinc-300">
            我关注产品问题、工程质量和用户体验之间的平衡，擅长把模糊需求拆解成可交付的前端模块。
            日常工作中重视类型安全、组件边界、可读性和响应式体验。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
