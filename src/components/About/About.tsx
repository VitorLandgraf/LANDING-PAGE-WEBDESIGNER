import { motion } from 'framer-motion';
import { Award, Users, Clock, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      value: '10+',
      label: 'Anos de Experiência',
    },
    {
      icon: Users,
      value: '200+',
      label: 'Clientes Satisfeitos',
    },
    {
      icon: Clock,
      value: '500+',
      label: 'Projetos Concluídos',
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Suporte ao Cliente',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Com mais de uma década de experiência em design, transformo conceitos em
            experiências visuais memoráveis. Minha abordagem combina criatividade,
            estratégia e tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Imagem do perfil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group max-w-md mx-auto w-full"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-primary/20 to-accent/20 backdrop-blur-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-white/5" />
              <div className="relative w-full h-full p-4">
                <img
                  src="/profile.jpg"
                  alt="Designer"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  style={{ maxHeight: '400px' }}
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/20 to-transparent opacity-60" />
              </div>
            </div>
            {/* Efeito de brilho */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" style={{ zIndex: -1 }} />
          </motion.div>

          {/* Texto e estatísticas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Designer Apaixonado por Inovação</h3>
              <p className="text-text/70 mb-6">
                Especializado em criar designs únicos e funcionais que não apenas
                impressionam visualmente, mas também geram resultados reais para
                seus negócios. Minha abordagem é centrada no usuário, combinando
                estética com usabilidade.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-text/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 