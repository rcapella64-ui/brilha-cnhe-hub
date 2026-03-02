import logo from "@/assets/logo-so-multas.png";

const Footer = () => {
  return (
    <footer className="bg-brand py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
        <img src={logo} alt="SÓ Multas" className="h-8 brightness-0 invert" />
        <p className="text-xs text-brand-foreground/60">
          © {new Date().getFullYear()} SÓ Multas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
