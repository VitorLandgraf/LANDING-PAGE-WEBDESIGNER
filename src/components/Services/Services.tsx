import { motion } from 'framer-motion';
import {
  Laptop,
  Smartphone,
  PenTool,
  Layout,
  Share2,
  Camera,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: 'UI/UX Design',
      description:
        'Interfaces intuitivas e experiências de usuário excepcionais que encantam seus clientes.',
    },
    {
      icon: Laptop,
      title: 'Web Design',
      description:
        'Sites responsivos e modernos que representam sua marca com excelência.',
    },
    {
      icon: Smartphone,
      title: 'Design Mobile',
      description:
        'Apps e interfaces mobile que proporcionam a melhor experiência em dispositivos móveis.',
    },
    {
      icon: PenTool,
      title: 'Identidade Visual',
      description:
        'Desenvolvimento de logos, cores e elementos visuais que fortalecem sua marca.',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description:
        'Design para redes sociais que aumentam o engajamento e alcance da sua marca.',
    },
    {
      icon: Camera,
      title: 'Direção de Arte',
      description:
        'Direção criativa para ensaios fotográficos e produções audiovisuais.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Ofereço soluções completas em design para transformar sua visão em
            realidade, com foco em qualidade e inovação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text/70">{service.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-primary hover:text-accent transition-colors"
              >
                Saiba mais →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 