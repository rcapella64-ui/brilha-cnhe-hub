import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = `Olá! Meu nome é ${name} e meu telefone é ${phone}. Gostaria de saber mais sobre os serviços da SÓ Multas.`;
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-brand sm:text-4xl">Presente em todo o país</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Com unidades em mais de 100 cidades, a SÓ Multas possui uma estrutura robusta para te atender.
          </p>

          <div className="mt-8 flex max-w-md items-start gap-3 rounded-xl border border-border bg-surface-alt p-4">
            <MapPin className="mt-0.5 h-5 w-5 text-danger" />
            <div>
              <p className="text-sm font-bold text-brand">Unidade Lago Sul — Brasília/DF</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface-alt p-7"
        >
          <h3 className="text-xl font-bold text-brand">Envie uma Mensagem</h3>
          <p className="mt-2 text-sm text-muted-foreground">Insira seus dados abaixo e inicie uma conversa no WhatsApp.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Seu nome"
              required
              className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Seu telefone"
              required
              className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              Enviar mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
