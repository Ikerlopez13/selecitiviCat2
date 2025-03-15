import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';
import SearchBar from './SearchBar';
import { categories } from '@/data/subjects';

export default function HeroMain() {
  return (
    <div className="bg-selectivi-yellow py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <AnimateOnScroll animation="fadeIn" duration={0.8}>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Treu el màxim partit de selectiviCAT,</h2>
                <h1 className="text-5xl md:text-6xl font-bold">
                  El teu <span className="text-white">aliat.</span>
                </h1>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeIn" delay={0.2} duration={0.8}>
              <p className="text-lg">
                Treu la teva <Link href="/millor-versio" className="underline font-semibold">millor versió</Link> a la Selectivitat i 
                aconsegueix anar a la carrera <Link href="/somnis" className="underline font-semibold">dels teus somnis.🔮</Link>
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slideUp" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link href="/notes-de-tall" className="btn bg-white text-selectivi-yellow hover:bg-white/90 border-none flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Consulta les notes de tall
                </Link>
                <Link href="/calculadora" className="btn bg-white/20 text-white hover:bg-white/30 border-white/30 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calcula la teva nota
                </Link>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slideUp" delay={0.6}>
              <div className="pt-4">
                <SearchBar 
                  placeholder="Cerca itineraris, assignatures..."
                  onSearch={(results) => {
                    console.log('Resultados de búsqueda:', results);
                  }}
                />
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slideUp" delay={0.8}>
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-medium">Categories populars:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      href={`/categoria/${category.id}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                    </Link>
                  ))}
                  <Link 
                    href="/categories"
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <span className="mr-1">🔍</span>
                    Veure totes
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          <AnimateOnScroll animation="slideLeft" delay={0.3} duration={0.8}>
            <div className="flex justify-center items-center">
              <div className="w-full h-full relative">
                <div className="p-4 rounded-lg w-full h-auto flex items-center justify-center">
                  <img 
                    src="/images/Group10.png" 
                    alt="SelectiviCAT Ilustración" 
                    className="w-full h-auto object-contain max-w-[500px]"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
} 