import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import rachelImg from "@/assets/rachel.jpg";
import vitorImg from "@/assets/vitor.jpg";

const testimonials = [
  {
    text: "Recebi ótimas recomendações dos serviços da SÓ Multas e resolvi buscar auxílio. Sempre que surgiam dúvidas eu entrava em contato e todos estão de prontidão. O recurso foi de grande sucesso e a autuação foi deferida.",
    name: "Rachel",
    role: "Defesa de Autuação",
    image: rachelImg,
  },
  {
    text: "Eu estava com uma multa de radar que quase me custou a carteira por dois anos. A equipe entrou no caso com entendimento real, aquele peso nos ombros foi aliviado e o que parecia um problemão foi resolvido.",
    name: "Vitor",
    role: "Tratamento Especial - PAI",
    image: vitorImg,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-wide text-danger">Depoimentos</p>
        <h2 className="mt-3 text-3xl font-black text-brand sm:text-4xl">Quem confiou na SÓ Multas aprova o resultado</h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-border bg-surface-alt p-7"
          >
            <Quote className="mb-4 h-8 w-8 text-danger/30" />
            <p className="mb-6 text-sm leading-relaxed text-foreground/85">“{item.text}”</p>
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={`Foto de ${item.name}`}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-brand">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
