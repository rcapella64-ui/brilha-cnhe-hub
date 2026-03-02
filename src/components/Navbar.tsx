import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";
import logo from "@/assets/logo-so-multas.png";
const links = [
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "SOBRE", href: "#processo" },
  { label: "RESULTADOS", href: "#resultados" },
  { label: "CONTATO", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" aria-label="SÓ Multas">
          <img src={logo} alt="SÓ Multas - A sua ajuda especializada" className="h-9" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-brand-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" />
          Área do Cliente
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-5 py-4 md:hidden">
          <nav className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold text-foreground/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
