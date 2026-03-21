import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background  py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-semibold tracking-tight text-foreground text-xl mb-2">Nuturn Studio</span>
          <span className="text-sm text-muted-foreground">Execution that moves the needle.</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8  flex justify-center">
        <p className="text-sm text-muted-foreground/60">
          © {new Date().getFullYear()} Nuturn Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
