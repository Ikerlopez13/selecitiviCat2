import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

export default function SectionCategories() {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Título con animación */}
        <AnimateOnScroll animation="fadeIn" className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
        </AnimateOnScroll>
        
        {/* Categorías principales */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <AnimateOnScroll animation="slideUp" delay={0.1}>
            <Link href="/categoria/comunes" className="bg-yellow-300 hover:bg-yellow-300/90 text-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm transition-all">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">📚</span>
                <span className="font-medium">Comunes</span>
              </div>
            </Link>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideUp" delay={0.2}>
            <Link href="/categoria/tecnologic" className="bg-green-200 hover:bg-green-200/90 text-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm transition-all">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">√x</span>
                <span className="font-medium">Tecnològic i Científic</span>
              </div>
            </Link>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideUp" delay={0.3}>
            <Link href="/categoria/artistic" className="bg-blue-200 hover:bg-blue-200/90 text-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm transition-all">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">🎨</span>
                <span className="font-medium">Artístic</span>
              </div>
            </Link>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideUp" delay={0.4}>
            <Link href="/categoria/llengues" className="bg-purple-200 hover:bg-purple-200/90 text-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm transition-all">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">abc</span>
                <span className="font-medium">Llengües</span>
              </div>
            </Link>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideUp" delay={0.5}>
            <Link href="/categoria/social" className="bg-red-200 hover:bg-red-200/90 text-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm transition-all">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">👥</span>
                <span className="font-medium">Social</span>
              </div>
            </Link>
          </AnimateOnScroll>
        </div>
        
        {/* Listado de asignaturas por categoría - Visible solo en desktop (lg y superior) */}
        <AnimateOnScroll animation="fadeIn" delay={0.6}>
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Comunes */}
            <div>
              <ul className="space-y-2">
                <li><Link href="/assignatura/historia-filosofia" className="hover:underline">Història de la filosofia</Link></li>
                <li><Link href="/assignatura/angles" className="hover:underline">Anglès</Link></li>
                <li><Link href="/assignatura/llengua-catalana" className="hover:underline">Llengua catalana</Link></li>
                <li><Link href="/assignatura/historia" className="hover:underline">Història</Link></li>
                <li><Link href="/assignatura/llengua-castellana" className="hover:underline">Llengua castellana</Link></li>
              </ul>
            </div>
            
            {/* Tecnológico y Científico */}
            <div>
              <ul className="space-y-2">
                <li><Link href="/assignatura/ciencies-generals" className="hover:underline">Ciències Generals</Link></li>
                <li><Link href="/assignatura/biologia" className="hover:underline">Biologia</Link></li>
                <li><Link href="/assignatura/ciencies-terra" className="hover:underline">Ciències de la terra</Link></li>
                <li><Link href="/assignatura/dibuix-tecnic" className="hover:underline">Dibuix tècnic</Link></li>
                <li><Link href="/assignatura/fisica" className="hover:underline">Física</Link></li>
                <li><Link href="/assignatura/matematiques" className="hover:underline">Matemàtiques</Link></li>
                <li><Link href="/assignatura/electrotecnia" className="hover:underline">Electrotècnia</Link></li>
                <li><Link href="/assignatura/quimica" className="hover:underline">Química</Link></li>
                <li><Link href="/assignatura/tecnologia-industrial" className="hover:underline">Tecnologia Industrial</Link></li>
              </ul>
            </div>
            
            {/* Artístico */}
            <div>
              <ul className="space-y-2">
                <li><Link href="/assignatura/analisi-musical" className="hover:underline">Anàlisi musical</Link></li>
                <li><Link href="/assignatura/arts-esceniques" className="hover:underline">Arts Escèniques</Link></li>
                <li><Link href="/assignatura/cultura-audiovisual" className="hover:underline">Cultura Audiovisual</Link></li>
                <li><Link href="/assignatura/dibuix-artistic" className="hover:underline">Dibuix artístic</Link></li>
                <li><Link href="/assignatura/disseny" className="hover:underline">Disseny</Link></li>
                <li><Link href="/assignatura/fonaments-arts" className="hover:underline">Fonaments de les arts</Link></li>
                <li><Link href="/assignatura/historia-musica-dansa" className="hover:underline">Història de la Música i de la Dansa</Link></li>
              </ul>
            </div>
            
            {/* Lenguas */}
            <div>
              <ul className="space-y-2">
                <li><Link href="/assignatura/llati" className="hover:underline">Llatí</Link></li>
                <li><Link href="/assignatura/italia" className="hover:underline">Italià</Link></li>
                <li><Link href="/assignatura/frances" className="hover:underline">Francès</Link></li>
                <li><Link href="/assignatura/grec" className="hover:underline">Grec</Link></li>
                <li><Link href="/assignatura/alemany" className="hover:underline">Alemany</Link></li>
              </ul>
            </div>
            
            {/* Social */}
            <div>
              <ul className="space-y-2">
                <li><Link href="/assignatura/geografia" className="hover:underline">Geografia</Link></li>
                <li><Link href="/assignatura/economia-empresa" className="hover:underline">Economia de l'empresa</Link></li>
                <li><Link href="/assignatura/historia-art" className="hover:underline">Història de l'art</Link></li>
                <li><Link href="/assignatura/literatura-castellana" className="hover:underline">Literatura castellana</Link></li>
                <li><Link href="/assignatura/literatura-catalana" className="hover:underline">Literatura catalana</Link></li>
                <li><Link href="/assignatura/matematiques-ccss" className="hover:underline">Matemàtiques CCSS</Link></li>
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Mensaje informativo para dispositivos móviles y tablets */}
        <AnimateOnScroll animation="fadeIn" delay={0.7} className="lg:hidden text-center mt-6 text-gray-600">
          <p>Toca una categoria per veure les assignatures</p>
        </AnimateOnScroll>
      </div>
    </div>
  );
} 