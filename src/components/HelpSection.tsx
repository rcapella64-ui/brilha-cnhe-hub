import { motion } from "framer-motion";
import { Shield, ShieldAlert } from "lucide-react";

const options = [
  {
    title: "Fui parado na blitz do bafômetro.",
    subtitle: "Defesa para quem foi abordado na Lei Seca",
    href: "#lei-seca",
    icon: ShieldAlert,
  },
  {
    title: "Não quero perder minha CNH",
    subtitle: "Auxílio para não perder a carteira",
    href: "#nao-perder-cnh",
    icon: Shield,
  },
];

const HelpSection = () => {
  return (
    <section id="servicos" className="container relative z-10 -mb-12 px-4 pb-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-brand/20 bg-brand p-3 shadow-soft"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="rounded-2xl bg-brand-deep px-5 py-4 lg:min-w-[280px]">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-foreground">Como podemos te ajudar?</p>
            <p className="text-xs text-brand-foreground/70">Selecione a opção mais adequada</p>
          </div>

          {options.map((option) => (
            <a
              key={option.title}
              href={option.href}
              className="flex flex-1 items-start gap-3 rounded-2xl border border-brand-foreground/15 bg-brand-soft px-4 py-4 transition-colors hover:bg-brand-deep"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-danger/15">
                <option.icon className="h-5 w-5 text-danger" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-foreground">{option.title}</p>
                <p className="text-xs text-brand-foreground/70">{option.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HelpSection;
