import { motion } from "framer-motion";
import logoBand from "@/assets/logo-band.png";
import logoCorreio from "@/assets/logo-correio.png";
import logoG1 from "@/assets/logo-g1.png";
import logoMetropoles from "@/assets/logo-metropoles.png";
import logoR7 from "@/assets/logo-r7.png";

const logos = [
  { src: logoG1, alt: "Logo G1" },
  { src: logoMetropoles, alt: "Logo Metrópoles" },
  { src: logoCorreio, alt: "Logo Correio Braziliense" },
  { src: logoR7, alt: "Logo R7" },
  { src: logoBand, alt: "Logo Band" },
];

const MediaSection = () => {
  return (
    <section className="bg-surface-alt py-14">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-danger">Presença na mídia</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-8 object-contain grayscale transition-all hover:grayscale-0 sm:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
