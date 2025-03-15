import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { categories } from '@/data/subjects';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="py-16 px-4 md:px-8 bg-selectivi-yellow">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-3/5">
                <div className="flex items-center gap-2 mb-4">
                  <Link 
                    href="/" 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Inici
                  </Link>
                  <span>/</span>
                  <span className="font-medium">Categories</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Categories d'assignatures</h1>
                <p className="text-xl mb-6">
                  Explora totes les categories d'assignatures disponibles per a la selectivitat i 
                  descobreix els recursos que t'ajudaran a preparar-te millor.
                </p>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <div className="bg-white p-8 rounded-full shadow-lg">
                  <span className="text-8xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lista de categorías */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Totes les categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  href={`/categoria/${category.id}`}
                  className="block group"
                >
                  <div className={`${category.color} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg`}>
                    <div className="p-8 flex flex-col items-center text-center">
                      <span className="text-6xl mb-4">{category.icon}</span>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-gray-800 mb-4">
                        Explora les assignatures de l'àmbit {category.name.toLowerCase()}
                      </p>
                      <span className="inline-block px-4 py-2 bg-white/20 rounded-full font-medium">
                        Veure assignatures
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sección de información */}
        <div className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Com funciona la selectivitat?</h2>
                <p className="mb-4">
                  La selectivitat és una prova d'accés a la universitat que avalua els coneixements 
                  adquirits durant el batxillerat. Consta de diferents exàmens agrupats en dues fases:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>
                    <strong>Fase general obligatòria:</strong> Inclou exàmens de llengua catalana, 
                    llengua castellana, llengua estrangera, història o filosofia, i una matèria de modalitat.
                  </li>
                  <li>
                    <strong>Fase específica voluntària:</strong> Permet examinar-se d'assignatures 
                    addicionals per millorar la nota d'accés a determinats graus universitaris.
                  </li>
                </ul>
                <Link 
                  href="/notes-de-tall"
                  className="text-selectivi-yellow hover:underline font-medium"
                >
                  Consulta les notes de tall
                </Link>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Com es calcula la nota?</h2>
                <p className="mb-4">
                  La nota d'accés a la universitat es calcula a partir de:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>
                    <strong>Nota d'accés:</strong> 60% nota mitjana de batxillerat + 40% nota fase general 
                    (màxim 10 punts)
                  </li>
                  <li>
                    <strong>Nota d'admissió:</strong> Nota d'accés + (ponderació assignatures fase específica) 
                    (màxim 14 punts)
                  </li>
                </ul>
                <Link 
                  href="/calculadora"
                  className="text-selectivi-yellow hover:underline font-medium"
                >
                  Calcula la teva nota
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA para recursos */}
        <div className="py-12 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Recursos per preparar la selectivitat</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Accedeix als millors recursos per preparar-te per a la selectivitat: vídeos explicatius, 
              exàmens d'anys anteriors i bibliografia recomanada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/millors-videos" 
                className="btn bg-selectivi-yellow hover:bg-yellow-500 text-white px-6 py-3"
              >
                Vídeos explicatius
              </Link>
              <Link 
                href="/examens-anteriors" 
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3"
              >
                Exàmens anteriors
              </Link>
              <Link 
                href="/bibliografia" 
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3"
              >
                Bibliografia
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 