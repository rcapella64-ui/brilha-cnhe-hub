import { motion } from "framer-motion";
import logoG1 from "@/assets/logo-g1.png";
import logoMetropoles from "@/assets/logo-metropoles.png";
import logoCorreio from "@/assets/logo-correio.png";
import logoR7 from "@/assets/logo-r7.png";
import logoBand from "@/assets/logo-band.png";

const logos = [
  { src: logoG1, alt: "G1" },
  { src: logoMetropoles, alt: "Metrópoles" },
  { src: logoCorreio, alt: "Correio Braziliense" },
  { src: logoR7, alt: "R7" },
  { src: logoBand, alt: "Band" },
];

const MediaSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-red-accent">
            Presença na mídia
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
