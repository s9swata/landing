const navLinks = [
  { label: "Features", active: true },
  { label: "Insights" },
  { label: "About" },
  { label: "Case Studies", strike: true },
  { label: "Contact" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-nuturn-glass border-b border-nuturn-border">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-medium tracking-tight text-nuturn-white text-lg">Nuturn</span>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            className={`text-sm transition-colors ${
              link.strike
                ? "line-through text-nuturn-muted hover:text-nuturn-white/60"
                : link.active
                ? "text-nuturn-white border-b border-transparent bg-gradient-to-r from-nuturn-white/80 to-nuturn-white/40 bg-clip-text text-transparent"
                : "text-nuturn-muted hover:text-nuturn-white/80"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <button className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-b from-nuturn-white to-nuturn-muted text-nuturn-black transition-opacity hover:opacity-90">
        Book a Call
      </button>
    </div>
  </nav>
);

export default Navbar;
