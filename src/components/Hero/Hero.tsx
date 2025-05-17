import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Design que{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transforma
              </span>{' '}
              Ideias em Realidade
            </h1>
            <p className="text-text/80 text-lg mb-8">
              Criando experiências visuais únicas e memoráveis para sua marca.
              Design moderno, criativo e profissional para destacar seu negócio.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full flex items-center space-x-2 group"
            >
              <span>Iniciar Projeto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Grid de ícones animados */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Monitor, title: 'Web Design', desc: 'Sites modernos e responsivos' },
              { icon: Smartphone, title: 'Mobile', desc: 'Apps e interfaces mobile' },
              { icon: Palette, title: 'Branding', desc: 'Identidade visual completa' },
              {
                icon: ArrowRight,
                title: 'UI/UX',
                desc: 'Experiências intuitivas',
                className: 'rotate-45',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <item.icon
                  className={`w-10 h-10 text-primary mb-4 ${item.className || ''}`}
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-text/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decoração de fundo */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl -z-10" />
        <div className="absolute bottom-40 right-0 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default Hero; 