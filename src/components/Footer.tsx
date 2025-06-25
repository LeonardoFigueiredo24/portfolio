
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/leonardo-moura-083486332/" },
    { icon: "👨‍💻", label: "GitHub", href: "https://github.com/LeonardoFigueiredo24" },
    { icon: "📸", label: "Instagram", href: "https://www.instagram.com/leonardofigs/" },
    { icon: "📧", label: "Email", href: "mailto:leonardodemouraf.santos@gmail.com" },
  ];

  return (
    <footer className="bg-gradient-to-t from-black/20 to-transparent border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Leonardo.dev
            </h3>
            <p className="text-muted-foreground text-sm">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl glow-hover hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Leonardo Figueiredo
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Feito com 💜 e muito ☕
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glass-effect glow-hover px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
          >
            ↑ Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
