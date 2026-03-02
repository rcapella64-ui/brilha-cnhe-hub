import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";

type ServiceItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
  showProcessLink?: boolean;
  icon: LucideIcon;
};

const services: ServiceItem[] = [
  {
    id: "lei-seca",
    tag: "Recurso para Lei Seca (Bafômetro)",
    title: "Recurso para Lei Seca (Bafômetro)",
    description:
      "Feito para quem precisa de ajuda especializada porque foi parado na blitz do bafômetro.",
    points: [
      "Foi abordado em uma blitz e soprou o bafômetro",
      "Foi abordado em uma blitz de balada segura ou Lei Seca",
      "Foi abordado e se recusou a soprar o bafômetro",
      "Sofreu um acidente de carro e soprou o bafômetro ou realizou exame de sangue",
    ],
    showProcessLink: true,
    icon: CheckCircle2,
  },
  {
    id: "nao-perder-cnh",
    tag: "Não quero perder minha CNH",
    title: "Não quero perder minha CNH",
    description: "Feito para quem precisa de auxílio para não perder a habilitação.",
    points: [
      "Transitar em velocidade em mais de 50% do que o permitido",
      "Dirigir com a carteira suspensa",
      "Dirigir sem capacete",
      "Manobra perigosa",
    ],
    icon: CheckCircle2,
  },
  {
    id: "recurso-multa",
    tag: "Recurso contra multa de trânsito",
    title: "Recurso contra multa de trânsito",
    description: "Feito para quem não concorda com uma multa de trânsito.",
    points: [
      "Transitar em velocidade em até 20% do permitido",
      "Estacionar em local proibido",
      "Avanço de sinal",
      "Cinto de segurança",
    ],
    icon: CheckCircle2,
  },
];

const ServiceSection = () => {
  return (
    <div>
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 ${index % 2 === 0 ? "bg-brand-deep" : "bg-brand"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-10 lg:grid-cols-2"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-danger">{service.tag}</p>
                <h2 className="mt-3 text-3xl font-black text-brand-foreground sm:text-4xl">{service.title}</h2>
                <p className="mt-4 max-w-xl text-brand-foreground/70">{service.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-danger px-5 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Converse conosco
                  </a>
                  {service.showProcessLink && (
                    <a
                      href="#processo"
                      className="rounded-full border border-brand-foreground/30 px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
                    >
                      Conheça melhor o serviço
                    </a>
                  )}
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-foreground/80">
                  Principais situações que atendemos:
                </p>
                <div className="space-y-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-xl border border-brand-foreground/15 bg-brand-foreground/5 px-4 py-3"
                    >
                      <service.icon className="h-5 w-5 flex-shrink-0 text-brand-foreground/70" />
                      <span className="text-sm text-brand-foreground/90">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServiceSection;
