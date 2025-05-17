import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'CEO, TechStart',
      content: 'Um profissional excepcional! Transformou completamente a identidade visual da nossa empresa com um design moderno e impactante.',
      rating: 5
    },
    {
      id: 2,
      name: 'Pedro Santos',
      role: 'Diretor de Marketing, InnovaCorp',
      content: 'Incrível capacidade de transformar conceitos em designs memoráveis. Superou todas as nossas expectativas!',
      rating: 5
    },
    {
      id: 3,
      name: 'Maria Costa',
      role: 'Fundadora, ArtStudio',
      content: 'Profissionalismo e criatividade em cada projeto. Recomendo fortemente!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Depoimentos{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              dos Clientes
            </span>
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Veja o que meus clientes dizem sobre meu trabalho e como tenho ajudado
            a transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
              <div className="relative">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-text/80 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-text/70">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 