const links = [
  { label: 'Email', href: 'mailto:hello@example.com' },
  { label: 'GitHub', href: 'https://github.com/piglost' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
];

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="contact">
      <div className="reveal-up rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-10">
        <p className="text-sm font-medium tracking-[0.28em] text-emerald-300 uppercase">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">联系方式</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">
          如果你想交流产品前端、工程效率或合作机会，可以通过下面的链接联系我。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {links.map((link) => (
            <a
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
              href={link.href}
              key={link.href}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
