import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import rachelImg from "@/assets/rachel.jpg";
import vitorImg from "@/assets/vitor.jpg";

const testimonials = [
  {
    text: "Recebi ótimas recomendações dos serviços da SÓ Multas e resolvi buscar auxílio. Sempre que surgiam dúvidas eu entrava em contato e todos estão de prontidão. O recurso foi de grande sucesso e a autuação foi Deferida.",
    name: "Rachel",
    role: "Defesa de Autuação",
    img: rachelImg,
  },
  {
    text: "Eu estava com uma multa de radar que quase me custou a carteira por dois anos. A equipe entrou no caso com entendimento real, aquele peso nos ombros foi aliviado e o que parecia um problemão foi resolvido!",
    name: "Vitor",
    role: "Tratamento Especial - PAI",
    img: vitorImg,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-red-accent">
          Depoimentos
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-navy mt-3">
          Quem confiou na SÓ Multas <br className="hidden sm:block" /> aprova o resultado
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-surface-light rounded-2xl p-8 relative"
          >
            <Quote className="w-8 h-8 text-red-accent/20 mb-4" />
            <p className="text-foreground/80 text-sm leading-relaxed mb-6">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
