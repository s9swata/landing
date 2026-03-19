const navLinks = [
  { label: "Services", href: "#services", active: false },
  { label: "Pricing", href: "#pricing", active: false },
  { label: "FAQ", href: "#faq", active: false },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-surface/50 backdrop-blur-md ">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-medium tracking-tight text-foreground text-lg">Nuturn</span>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href} className={`text-sm transition-colors ${
              link.active
                ? "text-foreground border-b border-transparent bg-gradient-to-r from-primary/80 to-primary/40 bg-clip-text text-transparent"
                : "text-muted-foreground hover:text-foreground/80"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a 
        href="https://cal.com/saswata-biswas-dfnuvi/client-call" 
        target="_blank" 
        rel="noreferrer" className="px-5 py-2 rounded-full text-sm font-medium bg-pearl text-pearl-foreground hover:bg-pearl/90 transition-all"
      >
        Book a Call
      </a>
    </div>
  </nav>
);

export default Navbar;
