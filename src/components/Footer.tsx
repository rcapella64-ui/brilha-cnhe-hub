const Footer = () => {
  return (
    <footer className="bg-brand py-10">
      <div className="container flex flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-bold text-brand-foreground">SÓ MULTAS</p>
        <p className="text-xs text-brand-foreground/75">© {new Date().getFullYear()} SÓ Multas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
