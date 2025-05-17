import { motion } from 'framer-motion';
import { useMemo, memo } from 'react';

const Background = () => {
  // Memoize os pontos decorativos para evitar recálculos
  const decorativePoints = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      key: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 3,
    }));
  }, []);

  // Memoize as linhas decorativas
  const decorativeLines = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      key: i,
      top: `${(i + 1) * 10}%`,
      duration: Math.random() * 10 + 20,
      delay: Math.random() * 5,
    }));
  }, []);

  // Configurações de animação memorizadas
  const pointAnimation = useMemo(() => ({
    opacity: [0.1, 0.3, 0.1],
    scale: [1, 1.5, 1],
  }), []);

  const lineAnimation = useMemo(() => ({
    opacity: [0.1, 0.3, 0.1],
    y: ['100%', '-100%'],
  }), []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradientes de fundo principais - Usando CSS transform para melhor performance */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/30 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/30 rounded-full filter blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-[130px] animate-pulse-slow delay-2000" />
        <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full filter blur-[120px] animate-pulse-slow delay-3000" />
      </div>

      {/* Grid decorativo - Usando will-change para otimizar */}
      <div className="absolute inset-0 opacity-[0.03] will-change-transform">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Pontos decorativos - Usando transform3d para ativar aceleração de hardware */}
      <div className="absolute inset-0">
        {decorativePoints.map((point) => (
          <motion.div
            key={point.key}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{ opacity: 0.1, scale: 1 }}
            animate={pointAnimation}
            transition={{
              duration: point.duration,
              repeat: Infinity,
              delay: point.delay,
              ease: "linear"
            }}
            style={{
              left: point.left,
              top: point.top,
              filter: 'blur(1px)',
              transform: 'translate3d(0,0,0)',
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>

      {/* Linhas decorativas - Reduzindo a quantidade de reflows */}
      <div className="absolute inset-0 overflow-hidden">
        {decorativeLines.map((line) => (
          <motion.div
            key={line.key}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
            initial={{ opacity: 0.1, y: -100 }}
            animate={lineAnimation}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: "linear"
            }}
            style={{
              top: line.top,
              transform: 'translate3d(0,0,0)',
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Memorizando o componente inteiro para evitar re-renders desnecessários
export default memo(Background); 