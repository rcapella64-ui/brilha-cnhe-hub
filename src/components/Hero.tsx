import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Shield, CheckCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-atendimento.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-surface-light rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-red-accent" />
            <span className="text-xs font-semibold tracking-wide uppercase text-foreground/70">
              Especialistas em defesa de trânsito
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.1] mb-6">
            Oferecemos ajuda especializada para multas de{" "}
            <span className="text-red-accent underline decoration-red-accent decoration-4 underline-offset-8">
              bafômetro
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            A SÓ Multas é especialista em proteção do direito de dirigir no Brasil.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/+5561992212024/?text=ola!%20acessei%20o%20site%20da%20SOMULTAS%20Lago%20Sul%20e%20tenho%20interesse%20em%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Fale com um especialista
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center gap-2 border-2 border-border text-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
            >
              Conheça nosso processo
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["C", "M", "R"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-navy text-primary-foreground flex items-center justify-center text-xs font-bold border-2 border-background"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-navy">+80 mil</p>
                <p className="text-xs text-muted-foreground">clientes atendidos</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-navy">8.3</span>
              <span className="text-xs text-muted-foreground">Reclame Aqui</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImg}
              alt="Atendimento Só Multas"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 bg-background rounded-xl shadow-lg p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy">94% de sucesso</p>
              <p className="text-xs text-muted-foreground">Taxa comprovada desde 2015</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
