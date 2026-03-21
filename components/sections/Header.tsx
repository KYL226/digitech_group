type NavLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  navLinks: NavLink[];
};

export function Header({ navLinks }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070814]/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-semibold tracking-wide">
          DigiTech Agency
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
        >
          Demarrer
        </a>
      </div>
    </header>
  );
}
