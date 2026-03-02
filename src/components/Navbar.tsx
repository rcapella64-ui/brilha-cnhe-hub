import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";

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
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="SÓ Multas">
          <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-danger text-sm font-black text-brand">
            SÓ
          </div>
          <div className="leading-none">
            <p className="text-base font-extrabold text-brand">MULTAS</p>
            <p className="text-xs text-muted-foreground">A sua ajuda especializada</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Área do Cliente
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
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
