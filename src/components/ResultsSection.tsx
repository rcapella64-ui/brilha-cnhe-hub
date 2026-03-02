import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";

const AnimatedNumber = ({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl font-black text-navy">
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 94, suffix: "%", label: "Taxa de sucesso", sub: "Medida desde 2015", decimals: 0 },
  { value: 80, suffix: " mil", label: "Clientes atendidos", sub: "", decimals: 0 },
  { value: 100, suffix: " mil", label: "Casos defendidos", sub: "", decimals: 0 },
  { value: 8.3, suffix: "", label: "Nota no Reclame Aqui", sub: "Indicados ao prêmio 2024", decimals: 1 },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-red-accent">
            Resultados comprovados
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mt-3">
            Nossos números falam <br className="hidden sm:block" /> por nós
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <p className="text-sm font-semibold text-foreground mt-2">{stat.label}</p>
              {stat.sub && (
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
