import { Shield, FileWarning } from "lucide-react";
import { motion } from "framer-motion";

const HelpSection = () => {
  return (
    <section id="servicos" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-navy rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
      >
        <div className="flex-shrink-0">
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/70">
            Como podemos te ajudar?
          </h3>
          <p className="text-xs text-primary-foreground/50 mt-1">Selecione a opção mais adequada</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <a
            href="#lei-seca"
            className="flex items-start gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 flex-1"
          >
            <div className="w-10 h-10 rounded-full bg-red-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Shield className="w-5 h-5 text-red-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary-foreground">
                Fui parado na blitz do bafômetro.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Defesa para quem foi abordado na Lei Seca
              </p>
            </div>
          </a>

          <a
            href="#nao-perder-cnh"
            className="flex items-start gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 flex-1"
          >
            <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <FileWarning className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary-foreground">
                Não quero perder minha CNH
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Auxílio para não perder a carteira
              </p>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HelpSection;
