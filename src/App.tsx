import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Background from './components/Background/Background';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackToTop } from './components/ui/BackToTop';
import { siteMetadata } from './config/meta';

// Lazy loading dos componentes
const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const About = lazy(() => import('./components/About/About'));
const Services = lazy(() => import('./components/Services/Services'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="keywords" content={siteMetadata.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:type" content={siteMetadata.openGraph.type} />
        <meta property="og:locale" content={siteMetadata.openGraph.locale} />
        <meta property="og:image" content={siteMetadata.openGraph.images[0].url} />
        
        {/* Acessibilidade */}
        <html lang="pt-BR" />
      </Helmet>

      <div className="relative min-h-screen bg-background text-text w-full overflow-hidden">
        <ScrollProgress />
        <Background />
        
        <Suspense fallback={<LoadingSpinner size="lg" className="fixed inset-0 bg-background/80 backdrop-blur-sm" />}>
          <Header />
        </Suspense>

        <main className="relative w-full" role="main">
          {/* Container decorativo com gradientes e efeitos */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent" />
            <div className="absolute left-0 top-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute right-0 top-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
            <div className="absolute inset-x-0 top-[33%] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            <div className="absolute inset-x-0 top-[66%] h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
            <div 
              className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                backgroundRepeat: 'repeat',
                transform: 'translate3d(0,0,0)',
                willChange: 'transform'
              }}
            />
          </div>

          <div className="relative">
            <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[50vh] flex items-center justify-center" />}>
              <Hero />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Portfolio />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
              <Testimonials />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          </div>
        </main>

        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>

        <BackToTop />
      </div>
    </>
  );
}

export default App; 