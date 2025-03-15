"use client";

import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Link from 'next/link';
import { useState } from 'react';

export default function MillorsVideosPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setActiveSubFilter('all'); // Reset sub-filter when changing main filter
  };

  const handleSubFilterClick = (subFilter: string) => {
    setActiveSubFilter(subFilter);
  };

  // Verificar si el video debe mostrarse según el filtro activo
  const shouldShowVideo = (tags: string[], subTags: string[] = []) => {
    if (activeFilter === 'all') return true;
    if (!tags.includes(activeFilter)) return false;
    
    // Si hay un subfiltro activo, verificar si el video tiene ese subfiltro
    if (activeSubFilter !== 'all') {
      return subTags.includes(activeSubFilter);
    }
    
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-selectivi-yellow py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Millors Vídeos Educatius</h1>
                <p className="text-xl mb-6">Recursos audiovisuals seleccionats per ajudar-te a preparar la selectivitat.</p>
                <p className="mb-8">Hem recopilat els millors vídeos de professors experts que expliquen conceptes clau de manera clara i concisa.</p>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <div className="bg-white p-8 rounded-full shadow-lg">
                  <span className="text-8xl">📹</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filtros de categoría */}
        <div className="bg-gray-100 py-6 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              <button 
                className={`${activeFilter === 'all' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors`}
                onClick={() => handleFilterClick('all')}
              >
                Tots els vídeos
              </button>
              <button 
                className={`${activeFilter === 'Matemàtiques' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Matemàtiques')}
              >
                Matemàtiques
              </button>
              <button 
                className={`${activeFilter === 'Matemàtiques CCSS' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Matemàtiques CCSS')}
              >
                Matemàtiques CCSS
              </button>
              <button 
                className={`${activeFilter === 'Física' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Física')}
              >
                Física
              </button>
              <button 
                className={`${activeFilter === 'Química' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Química')}
              >
                Química
              </button>
              <button 
                className={`${activeFilter === 'Història' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Història')}
              >
                Història
              </button>
            </div>
            
            {/* Subfiltros para Matemáticas */}
            {(activeFilter === 'Matemàtiques' || activeFilter === 'Matemàtiques CCSS') && (
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button 
                  className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('all')}
                >
                  Tots els temes
                </button>
                <button 
                  className={`${activeSubFilter === 'Integrals' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Integrals')}
                >
                  Integrals
                </button>
                <button 
                  className={`${activeSubFilter === 'Sistemes' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Sistemes')}
                >
                  Sistemes d'equacions
                </button>
                <button 
                  className={`${activeSubFilter === 'Derivades' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Derivades')}
                >
                  Derivades
                </button>
                <button 
                  className={`${activeSubFilter === 'Probabilitat' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Probabilitat')}
                >
                  Probabilitat
                </button>
                <button 
                  className={`${activeSubFilter === 'Geometria' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Geometria')}
                >
                  Geometria
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Sección de videos destacados */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {activeFilter === 'all' ? 'Vídeos Destacats' : 
               activeSubFilter === 'all' ? `Vídeos de ${activeFilter}` : 
               `Vídeos de ${activeFilter}: ${activeSubFilter}`}
            </h2>
            
            {/* Mostrar mensaje si no hay videos para el filtro seleccionado */}
            {activeFilter !== 'all' && 
             activeFilter !== 'Matemàtiques' && 
             activeFilter !== 'Matemàtiques CCSS' &&
             activeFilter !== 'Física' && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">Encara no hi ha vídeos disponibles per a aquesta categoria.</p>
                <p>Estem treballant per afegir més contingut aviat!</p>
              </div>
            )}
            
            {/* Video de profesor10demates - Física */}
            {shouldShowVideo(['Física']) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Video principal destacado */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/HtJTBubySkg" 
                      title="Física: Movimiento Armónico Simple (MAS)" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Movimiento Armónico Simple (MAS)</h3>
                    <p className="text-gray-600 mb-4">
                      Explicación detallada del Movimiento Armónico Simple, un tema fundamental en la física de la selectividad, con ejemplos prácticos y resolución de problemas.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://yt3.googleusercontent.com/ytc/AIf8zZRVPb3NF5rJKQUGAOdBRLqRBPiAKQqS_1uuCTN7=s176-c-k-c0x00ffffff-no-rj" 
                        alt="profesor10demates" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">profesor10demates (Sergio)</p>
                        <p className="text-sm text-gray-500">Professor de Física i Matemàtiques</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Física</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">MAS</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Oscilaciones</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://www.youtube.com/watch?v=HtJTBubySkg&list=PLunRFUHsCA1yOJhwcVcGIUAFhwKcukhOa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black font-medium"
                      >
                        Veure a YouTube
                      </a>
                      <a 
                        href="https://www.youtube.com/@profesor10demates" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                      >
                        Subscriu-te al canal
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Información sobre el profesor */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Per què recomanem a profesor10demates?</h3>
                  <p className="mb-4">
                    Sergio (profesor10demates) és un excel·lent professor de física i matemàtiques amb una gran capacitat per explicar conceptes complexos de manera clara i entenedora. Els seus vídeos destaquen per:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Explicacions metòdiques i detallades de conceptes físics complexos</li>
                    <li>Resolució pas a pas de problemes típics de selectivitat</li>
                    <li>Ús d'exemples visuals i gràfics per facilitar la comprensió</li>
                    <li>Llistes de reproducció organitzades per temes</li>
                  </ul>
                  <p className="mb-6">
                    El seu canal de YouTube és un recurs molt valuós per als estudiants que volen reforçar els seus coneixements de física i preparar-se adequadament per a la selectivitat.
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://www.youtube.com/@profesor10demates" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                    >
                      Visita el seu canal
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Video de Sergiprofe - Sistemas de ecuaciones */}
            {shouldShowVideo(['Matemàtiques', 'Matemàtiques CCSS'], ['Sistemes']) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Video principal destacado */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/EIfZqtg-Tik" 
                      title="Sistemes d'equacions: Gauss i el Teorema de Rouché-Frobenius" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sistemes d'equacions: Gauss i Rouché-Frobenius</h3>
                    <p className="text-gray-600 mb-4">
                      Explicació detallada del mètode de Gauss i el Teorema de Rouché-Frobenius per resoldre sistemes d'equacions lineals, amb exemples pràctics per a la selectivitat.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                        alt="Sergiprofe" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">Sergiprofe</p>
                        <p className="text-sm text-gray-500">Professor de Matemàtiques</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Matemàtiques</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Matemàtiques CCSS</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Sistemes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://www.youtube.com/watch?v=EIfZqtg-Tik" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black font-medium"
                      >
                        Veure a YouTube
                      </a>
                      <a 
                        href="https://www.youtube.com/@sergiprofe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                      >
                        Subscriu-te al canal
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Información sobre el profesor */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Per què recomanem a Sergiprofe?</h3>
                  <p className="mb-4">
                    Sergiprofe és un excel·lent professor de matemàtiques amb anys d'experiència en la preparació d'estudiants per a la selectivitat. Els seus vídeos destaquen per:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Explicacions clares i concises dels conceptes més complexos</li>
                    <li>Exemples pràctics similars als que apareixen a la selectivitat</li>
                    <li>Trucs i consells per resoldre problemes de manera eficient</li>
                    <li>Material complementari disponible al seu canal</li>
                  </ul>
                  <p className="mb-6">
                    El seu canal de YouTube és un recurs imprescindible per a qualsevol estudiant que vulgui preparar-se a fons per a les proves d'accés a la universitat.
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://www.youtube.com/@sergiprofe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                    >
                      Visita el seu canal
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Lista de reproducción de Integrales */}
            {shouldShowVideo(['Matemàtiques', 'Matemàtiques CCSS'], ['Integrals']) && (
              <div className="mb-16">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Llista de reproducció: Integrals</h3>
                  <a 
                    href="https://www.youtube.com/watch?v=qqHrFjr9Scg&list=PLy4Skq8Pu_yVaWoiYV_wD5vMADbbyl7AO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                  >
                    Veure llista completa
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Video 1 de la lista */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/qqHrFjr9Scg" 
                        title="Integrals: Introducció" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Integrals: Introducció</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Conceptes bàsics d'integració i primeres tècniques per resoldre integrals senzilles.
                      </p>
                      <div className="flex items-center">
                        <img 
                          src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                          alt="Sergiprofe" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-xs text-gray-500">Sergiprofe</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video 2 de la lista */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/EIfZqtg-Tik" 
                        title="Integrals: Integració per parts" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Integrals: Integració per parts</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Mètode d'integració per parts amb exemples pràctics per a la selectivitat.
                      </p>
                      <div className="flex items-center">
                        <img 
                          src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                          alt="Sergiprofe" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-xs text-gray-500">Sergiprofe</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video 3 de la lista */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/qqHrFjr9Scg" 
                        title="Integrals: Canvi de variable" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Integrals: Canvi de variable</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Tècnica de canvi de variable per resoldre integrals més complexes.
                      </p>
                      <div className="flex items-center">
                        <img 
                          src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                          alt="Sergiprofe" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-xs text-gray-500">Sergiprofe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Más videos recomendados (placeholders) - Solo se muestran si el filtro es 'all' o 'Matemàtiques' */}
            {(activeFilter === 'all' || 
              (activeFilter === 'Matemàtiques' && activeSubFilter !== 'Integrals' && activeSubFilter !== 'Sistemes')) && (
              <>
                <h3 className="text-2xl font-bold mb-6">Més vídeos recomanats</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* Video placeholder 1 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Derivades i aplicacions</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Aprèn a calcular derivades i les seves aplicacions en problemes pràctics.
                      </p>
                      <p className="text-xs text-gray-500">Properament</p>
                    </div>
                  </div>
                  
                  {/* Video placeholder 2 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Probabilitat i estadística</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Conceptes clau de probabilitat i estadística per a la selectivitat.
                      </p>
                      <p className="text-xs text-gray-500">Properament</p>
                    </div>
                  </div>
                  
                  {/* Video placeholder 3 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Geometria analítica</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Vectors, rectes i plans en l'espai: tot el que necessites saber.
                      </p>
                      <p className="text-xs text-gray-500">Properament</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Sección de otras categorías - Solo se muestra si el filtro es 'all' */}
        {activeFilter === 'all' && (
          <div className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Explora altres categorías</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Categoría Física */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-selectivi-yellow flex items-center justify-center">
                    <span className="text-6xl">⚛️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Física</h3>
                    <p className="text-gray-600 mb-4">
                      Vídeos sobre mecànica, electromagnetisme, ones i física moderna.
                    </p>
                    <button 
                      className="text-gray-800 font-medium hover:text-black"
                      onClick={() => handleFilterClick('Física')}
                    >
                      Veure vídeos →
                    </button>
                  </div>
                </div>
                
                {/* Categoría Química */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-selectivi-yellow flex items-center justify-center">
                    <span className="text-6xl">🧪</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Química</h3>
                    <p className="text-gray-600 mb-4">
                      Vídeos sobre química orgànica, inorgànica, equilibris i reaccions.
                    </p>
                    <button 
                      className="text-gray-800 font-medium hover:text-black"
                      onClick={() => handleFilterClick('Química')}
                    >
                      Veure vídeos →
                    </button>
                  </div>
                </div>
                
                {/* Categoría Historia */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-selectivi-yellow flex items-center justify-center">
                    <span className="text-6xl">📜</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Història</h3>
                    <p className="text-gray-600 mb-4">
                      Vídeos sobre història contemporània, d'Espanya i de Catalunya.
                    </p>
                    <button 
                      className="text-gray-800 font-medium hover:text-black"
                      onClick={() => handleFilterClick('Història')}
                    >
                      Veure vídeos →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA para sugerir videos */}
        <div className="py-12 px-4 md:px-8 bg-selectivi-yellow text-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Coneixes algun vídeo que hauria d'estar aquí?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Si coneixes algun professor o canal de YouTube amb contingut de qualitat per a la selectivitat, fes-nos-ho saber!
            </p>
            <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300">
              Suggerir un vídeo
            </button>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 