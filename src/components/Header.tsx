const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a className="text-sm font-semibold tracking-[0.28em] text-white uppercase" href="#home">
          Portfolio
        </a>
        <div className="flex gap-4 text-sm text-zinc-300 sm:gap-7">
          {navItems.map((item) => (
            <a className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
