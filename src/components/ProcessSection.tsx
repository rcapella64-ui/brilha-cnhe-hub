import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const steps = [
  { label: "Atendimento inicial", desc: "Atendimento personalizado à situação do cliente" },
  { label: "Análise da solução", desc: "Entender qual a melhor solução" },
  { label: "Criar doc de defesa", desc: "Aplicar estratégias de acordo com o seu caso" },
  { label: "Apresentar a defesa", desc: "Protocolar no órgão de trânsito" },
  { label: "Acompanhar a defesa", desc: "Acompanhar o resultado e situação do cliente" },
  { label: "Finalização", desc: "Pós venda e orientação" },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy max-w-3xl mx-auto">
          A SÓ Multas vai muito além de recursos. Cuidamos do seu caso em todas as etapas, de forma individualizada.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Etapas</th>
              <th className="text-center py-4 px-4 text-sm font-bold text-navy">SÓ Multas</th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Outras empresas</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((step, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-4 px-4">
                  <p className="text-sm font-semibold text-navy">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  {i < 3 ? (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                      <X className="w-4 h-4 text-red-accent" />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
