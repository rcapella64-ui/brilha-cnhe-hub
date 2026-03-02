import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "SERVIÇOS", href: "#servicos" },
    { label: "SOBRE", href: "#processo" },
    { label: "RESULTADOS", href: "#resultados" },
    { label: "CONTATO", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-black text-navy">SÓ</span>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold text-navy">MULTAS</span>
              <span className="text-[10px] text-muted-foreground">A sua ajuda especializada</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/+5561992212024/?text=ola!%20acessei%20o%20site%20da%20SOMULTAS%20Lago%20Sul%20e%20tenho%20interesse%20em%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-navy text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Área do Cliente
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border py-4 px-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-semibold text-foreground/70 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
