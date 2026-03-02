import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import baltazarImg from "@/assets/baltazar.avif";
import caioImg from "@/assets/caio.avif";
import joseMariaImg from "@/assets/jose-maria.avif";
import mauricioImg from "@/assets/mauricio.avif";
import rachelImg from "@/assets/rachel.jpg";
import vitorImg from "@/assets/vitor.jpg";

const testimonials = [
  {
    text: "A minha experiência com a Só Multas foi muito satisfatória, super recomendo, eles são atenciosos, educados e organizados. Cumprem o que prometem e com certeza eu indico a SÓ Multas.",
    name: "Baltazar",
    role: "Defesa de Processo por Infração",
    image: baltazarImg,
  },
  {
    text: "Fiquei muito satisfeito com a transparência e atendimento da equipe da Só Multas. Graças ao recurso não tive que pagar uma multa aplicada de forma injusta no valor de R$ 3000,00 e ter minha CNH suspensa por 12 meses. Valeu cada centavo!",
    name: "Caio",
    role: "Tratamento Especial - Embriaguez",
    image: caioImg,
  },
  {
    text: "O trabalho da SÓ Multas foi muito técnico e eficiente. Fez minha defesa baseado em falhas técnicas do radar instalado. Sempre respondendo prontamente as vezes que pedi atualização do andamento do recurso cujo deferimento foi favorável. Recomendo os serviços prestados pela SÓ Multas.",
    name: "José Maria",
    role: "Recurso de Multa",
    image: joseMariaImg,
  },
  {
    text: "A minha experiência com a SÓ Multas foi maravilhosa, tive uma ocorrência da lei seca, e com a ajuda da SÓ Multas imediatamente me acolheram e me deram a melhor forma de pagamento. Entramos com o processo e fomos vitoriosos. A empresa é muito séria e o atendimento é espetacular, indico mesmo!",
    name: "Mauricio",
    role: "Defesa de Processo por Pontuação",
    image: mauricioImg,
  },
  {
    text: "Recebi ótimas recomendações dos serviços da SÓ Multas e resolvi buscar auxílio em minha demanda. Sempre que surgiam dúvidas eu entrava em contato e todos estão de prontidão para o atendimento. Agradeço imensamente a SÓ Multas pelo trabalho realizado onde o recurso interposto foi de grande sucesso e ao final o cancelamento da autuação foi Deferida.",
    name: "Rachel",
    role: "Defesa de Autuação",
    image: rachelImg,
  },
  {
    text: "Eu estava em uma situação complicada, com uma multa de radar que quase me custou a carteira por dois anos. Tentei me virar por conta e eles recusaram. Foi então que eu conheci o Só Multas. A equipe entrou no caso com um entendimento real do que eu estava passando, aquele peso nos ombros foi aliviado, e o que parecia um problemão foi resolvido!",
    name: "Vitor",
    role: "Tratamento Especial - PAI",
    image: vitorImg,
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-danger">Depoimentos</p>
            <h2 className="mt-3 text-3xl font-black text-brand sm:text-4xl">
              Nossos clientes comprovam a qualidade
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Depoimento anterior"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-alt"
            >
              <ChevronLeft className="h-5 w-5 text-brand" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo depoimento"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-alt"
            >
              <ChevronRight className="h-5 w-5 text-brand" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface-alt p-7">
                  <Quote className="mb-4 h-8 w-8 text-danger/30" />
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground/85">
                    "{item.text}"
                  </p>
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
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex ? "w-6 bg-danger" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
