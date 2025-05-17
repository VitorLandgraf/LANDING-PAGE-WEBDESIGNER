import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import defaultAvatar from '../../assets/default-avatar.svg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'CEO, TechStart',
      content: 'Um profissional excepcional! Transformou completamente a identidade visual da nossa empresa com um design moderno e impactante.',
      rating: 5,
      image: defaultAvatar
    },
    {
      id: 2,
      name: 'Pedro Santos',
      role: 'Diretor de Marketing, InnovaCorp',
      content: 'Incrível capacidade de transformar conceitos em designs memoráveis. Superou todas as nossas expectativas!',
      rating: 5,
      image: defaultAvatar
    },
    {
      id: 3,
      name: 'Maria Costa',
      role: 'Fundadora, ArtStudio',
      content: 'Profissionalismo e criatividade em cada projeto. Os resultados sempre impressionam nossos clientes.',
      rating: 5,
      image: defaultAvatar
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que os{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Feedback de clientes que transformaram suas ideias em realidade através do design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute -top-2 -left-2" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-text/70 text-sm">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-text/80 italic">"{testimonial.content}"</p>
              
              <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 