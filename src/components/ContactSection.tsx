import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name} e meu telefone é ${phone}. Gostaria de saber mais sobre os serviços da SÓ Multas.`;
    window.open(
      `https://wa.me/+5561992212024/?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
            Presente em todo o país
          </h2>
          <p className="text-muted-foreground mb-8">
            Com unidades em mais de 100 cidades, a SÓ Multas possui uma estrutura robusta para te atender.
          </p>
          <div className="flex items-start gap-3 bg-surface-light rounded-xl p-4">
            <MapPin className="w-5 h-5 text-red-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-navy">Unidade Lago Sul — Brasília/DF</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-surface-light rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2">Envie uma Mensagem</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Insira seus dados abaixo e inicie uma conversa no WhatsApp
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-navy text-primary-foreground px-6 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Enviar mensagem
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
