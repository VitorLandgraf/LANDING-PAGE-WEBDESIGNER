import { motion } from 'framer-motion';
import { Instagram, Linkedin, Palette, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Palette,
      href: 'https://behance.net',
      label: 'Behance',
    },
    {
      icon: Mail,
      href: 'mailto:contato@designer.com',
      label: 'Email',
    },
  ];

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '#home' },
        { label: 'Sobre', href: '#about' },
        { label: 'Serviços', href: '#services' },
        { label: 'Portfólio', href: '#portfolio' },
        { label: 'Contato', href: '#contact' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { label: 'UI/UX Design', href: '#' },
        { label: 'Web Design', href: '#' },
        { label: 'Design Mobile', href: '#' },
        { label: 'Branding', href: '#' },
        { label: 'Consultoria', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Designer.
            </motion.div>
            <p className="text-text/70">
              Transformando ideias em experiências visuais memoráveis através do
              design criativo e inovador.
            </p>
          </div>

          {/* Links de Navegação */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-text/50">
          <p>© {new Date().getFullYear()} Designer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 