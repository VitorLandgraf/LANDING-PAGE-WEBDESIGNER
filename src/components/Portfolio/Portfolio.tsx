import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Web Design', 'Mobile', 'Branding', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      category: 'Web Design',
      image: '/portfolio/placeholder.svg',
      description: 'Design moderno para uma plataforma de e-commerce de moda.',
    },
    {
      id: 2,
      title: 'App Fitness',
      category: 'Mobile',
      image: '/portfolio/placeholder.svg',
      description: 'Aplicativo mobile para acompanhamento de treinos.',
    },
    {
      id: 3,
      title: 'Identidade Visual Restaurante',
      category: 'Branding',
      image: '/portfolio/placeholder.svg',
      description: 'Branding completo para restaurante contemporâneo.',
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'UI/UX',
      image: '/portfolio/placeholder.svg',
      description: 'Interface de usuário para plataforma de analytics.',
    },
    {
      id: 5,
      title: 'App Bancário',
      category: 'Mobile',
      image: '/portfolio/placeholder.svg',
      description: 'Design de app para serviços bancários digitais.',
    },
    {
      id: 6,
      title: 'Site Corporativo',
      category: 'Web Design',
      image: '/portfolio/placeholder.svg',
      description: 'Website institucional para empresa de tecnologia.',
    },
  ];

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background/50 to-background w-full">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meu{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, demonstrando minha
            experiência em diferentes áreas do design.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white/5 hover:bg-white/10 text-text/70'
              } transition-all duration-300`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/5 rounded-2xl overflow-hidden"
              >
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-text/70 mb-4">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      Ver Projeto
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 text-white text-sm px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 