import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Shield, Star } from "lucide-react";
import heroImg from "@/assets/hero-atendimento.png";
import { getWhatsAppLink } from "@/lib/contact";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-24 lg:px-8 lg:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-surface px-4 py-2">
            <Shield className="h-4 w-4 text-brand" />
            <span className="text-xs font-bold uppercase tracking-wide text-brand">
              Especialistas em defesa de trânsito
            </span>
          </div>

          <h1 className="mb-5 text-[2.6rem] font-black leading-[1.08] tracking-tight text-brand sm:text-[3.2rem] lg:text-[3.8rem]">
            Oferecemos ajuda especializada para multas de{" "}
            <span className="text-danger underline decoration-danger decoration-[4px] underline-offset-[6px]">
              bafômetro
            </span>
          </h1>

          <p className="mb-7 max-w-md text-base text-muted-foreground">
            A SÓ Multas é especialista em proteção do direito de dirigir no Brasil.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-[13px] font-semibold text-brand-foreground shadow-card transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Fale com um especialista
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 text-[13px] font-semibold text-brand transition-colors hover:bg-secondary"
            >
              Conheça nosso processo
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 border-t border-border pt-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["C", "M", "R"].map((letter) => (
                  <div
                    key={letter}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-surface bg-brand text-xs font-bold text-brand-foreground"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-brand">+80 mil</p>
                <p className="text-xs text-muted-foreground">clientes atendidos</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-sm font-bold text-brand">8.3</p>
              <p className="text-xs text-muted-foreground">Reclame Aqui</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Decorative pink accent behind image */}
          <div
            className="absolute -right-4 top-8 h-[90%] w-[60%] rounded-[2rem]"
            style={{ background: "hsl(0 60% 90%)" }}
          />

          <div className="relative overflow-hidden rounded-[1.4rem] shadow-soft">
            <img
              src={heroImg}
              alt="Equipe da SÓ Multas atendendo cliente"
              className="w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-card sm:left-8">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-success-soft">
              <CheckCircle2 className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand">94% de sucesso</p>
              <p className="text-xs text-muted-foreground">Taxa comprovada desde 2015</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
