import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@designer.com',
      href: 'mailto:contato@designer.com',
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Paulo, SP - Brasil',
      href: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Vamos trabalhar juntos? Entre em contato e transforme suas ideias em
            realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Vamos Conversar!</h3>
              <p className="text-text/70 mb-8">
                Estou sempre aberto para discutir novos projetos, ideias criativas
                ou oportunidades de fazer parte de suas visões.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-text/70">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 