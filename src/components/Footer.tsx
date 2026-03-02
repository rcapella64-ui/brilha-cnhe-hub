const Footer = () => {
  return (
    <footer className="bg-navy py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-primary-foreground">SÓ</span>
          <span className="text-xs font-bold text-primary-foreground/70">MULTAS</span>
        </div>
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} SÓ Multas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
