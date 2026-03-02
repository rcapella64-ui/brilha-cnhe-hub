import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  target: number;
  suffix?: string;
  decimals?: number;
};

const AnimatedNumber = ({ target, suffix = "", decimals = 0 }: AnimatedNumberProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setValue(latest),
    });

    return controls.stop;
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl font-black text-brand sm:text-5xl lg:text-6xl">
      {decimals ? value.toFixed(decimals) : Math.round(value)}
      {suffix}
    </span>
  );
};

const stats = [
  { target: 94, suffix: "%", label: "Taxa de sucesso", sub: "Medida desde 2015", decimals: 0 },
  { target: 80, suffix: " mil", label: "Clientes atendidos", sub: "", decimals: 0 },
  { target: 100, suffix: " mil", label: "Casos defendidos", sub: "", decimals: 0 },
  { target: 8.3, suffix: "", label: "Nota no Reclame Aqui", sub: "Indicados ao prêmio 2024", decimals: 1 },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-danger">Resultados comprovados</p>
          <h2 className="mt-3 text-3xl font-black text-brand sm:text-4xl">Nossos números falam por nós</h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-surface px-5 py-8 text-center shadow-card"
            >
              <AnimatedNumber target={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
              {stat.sub && <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
