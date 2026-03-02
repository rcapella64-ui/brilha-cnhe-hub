import { motion } from "framer-motion";
import { MessageCircle, ChevronRight, AlertTriangle, Car, ShieldOff, Gauge, Bike, Ban, ParkingCircle, TrafficCone, Siren } from "lucide-react";

const WA_LINK = "https://wa.me/+5561992212024/?text=ola!%20acessei%20o%20site%20da%20SOMULTAS%20Lago%20Sul%20e%20tenho%20interesse%20em%20saber%20mais.";

const services = [
  {
    id: "lei-seca",
    tag: "Recurso para Lei Seca (Bafômetro)",
    title: "Recurso para Lei Seca (Bafômetro)",
    description: "Feito para quem precisa de ajuda especializada porque foi parado na blitz do bafômetro.",
    situations: [
      { icon: Siren, text: "Foi abordado em uma blitz e soprou o bafômetro" },
      { icon: AlertTriangle, text: "Foi abordado em uma blitz de balada segura ou Lei Seca" },
      { icon: Ban, text: "Foi abordado e se recusou a soprar o bafômetro" },
      { icon: Car, text: "Sofreu um acidente de carro e soprou o bafômetro ou realizou exame de sangue" },
    ],
    showSecondButton: true,
  },
  {
    id: "nao-perder-cnh",
    tag: "Não quero perder minha CNH",
    title: "Não quero perder minha CNH",
    description: "Feito para quem precisa de auxílio para não perder a habilitação.",
    situations: [
      { icon: Gauge, text: "Transitar em velocidade em mais de 50% do que o permitido" },
      { icon: ShieldOff, text: "Dirigir com a carteira suspensa" },
      { icon: Bike, text: "Dirigir sem capacete" },
      { icon: AlertTriangle, text: "Manobra perigosa" },
    ],
    showSecondButton: false,
  },
  {
    id: "recurso-multa",
    tag: "Recurso contra multa de trânsito",
    title: "Recurso contra multa de trânsito",
    description: "Feito para quem não concorda com uma multa de trânsito.",
    situations: [
      { icon: Gauge, text: "Transitar em velocidade em até 20% do permitido" },
      { icon: ParkingCircle, text: "Estacionar em local proibido" },
      { icon: TrafficCone, text: "Avanço de sinal" },
      { icon: Car, text: "Cinto de segurança" },
    ],
    showSecondButton: false,
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-navy-dark">
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-accent">
                {service.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary-foreground mt-3 mb-4">
                {service.title}
              </h2>
              <p className="text-primary-foreground/60 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-accent text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  Converse conosco
                </a>
                {service.showSecondButton && (
                  <a
                    href="#processo"
                    className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:bg-white/5 transition-colors"
                  >
                    Conheça melhor o serviço
                  </a>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-primary-foreground/70 mb-4 uppercase tracking-wider">
                Principais situações que atendemos:
              </h4>
              <div className="space-y-3">
                {service.situations.map((sit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/5 rounded-xl p-4"
                  >
                    <sit.icon className="w-5 h-5 text-red-accent flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/80">{sit.text}</span>
                    <ChevronRight className="w-4 h-4 text-primary-foreground/30 ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {index < services.length - 1 && (
            <div className="border-t border-white/10 mt-16" />
          )}
        </section>
      ))}
    </div>
  );
};

export default ServiceSection;
