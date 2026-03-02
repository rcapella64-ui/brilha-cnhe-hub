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
    <section id="processo" className="container px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-4xl text-center"
      >
        <h2 className="text-3xl font-black text-brand sm:text-4xl">
          A SÓ Multas vai muito além de recursos. Cuidamos do seu caso em todas as etapas, de forma individualizada.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-card"
      >
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">Etapas</th>
              <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wide text-brand">SÓ Multas</th>
              <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wide text-muted-foreground">Outras empresas</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((step, index) => (
              <tr key={step.label} className="border-b border-border last:border-b-0">
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-brand">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </td>
                <td className="px-5 py-4 text-center">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success-soft text-success">
                    <Check className="h-4 w-4" />
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  {index < 3 ? (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success-soft text-success">
                      <Check className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger-soft text-danger">
                      <X className="h-4 w-4" />
                    </span>
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
