import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Início', href: '#home' },
    { title: 'Sobre', href: '#about' },
    { title: 'Serviços', href: '#services' },
    { title: 'Portfólio', href: '#portfolio' },
    { title: 'Depoimentos', href: '#testimonials' },
    { title: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Designer.
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-text/80 hover:text-primary transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-6"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-text/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header; 