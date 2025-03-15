import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { getCategoryById, getSubjectsByCategory } from '@/data/subjects';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.id);
  
  if (!category) {
    notFound();
  }
  
  const subjects = getSubjectsByCategory(params.id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-20">
        {/* Hero Section */}
        <div className={`py-16 px-4 md:px-8 ${category.color}`}>
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
                  <span className="font-medium">{category.name}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
                <p className="text-xl mb-6">
                  Explora totes les assignatures de l'àmbit {category.name.toLowerCase()} i descobreix 
                  els recursos disponibles per preparar-te per a la selectivitat.
                </p>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <div className="bg-white p-8 rounded-full shadow-lg">
                  <span className="text-8xl">{category.icon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lista de asignaturas */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8">Assignatures de {category.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Link 
                  key={subject.id}
                  href={`/assignatura/${subject.id}`}
                  className="block group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className={`h-3 ${category.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold group-hover:text-selectivi-yellow transition-colors">
                          {subject.name}
                        </h3>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {subject.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {subject.weight ? 'Pondera fins a 0.2' : 'Assignatura general'}
                        </span>
                        <span className="text-selectivi-yellow font-medium group-hover:underline">
                          Més informació
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {subjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No s'han trobat assignatures en aquesta categoria.</p>
                <Link 
                  href="/"
                  className="text-selectivi-yellow hover:underline"
                >
                  Tornar a l'inici
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Recursos adicionales */}
        <div className="py-12 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Recursos per a l'àmbit {category.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Vídeos explicatius</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Accedeix a una selecció dels millors vídeos explicatius per a les assignatures d'aquest àmbit.
                </p>
                <Link 
                  href="/millors-videos"
                  className="text-selectivi-yellow hover:underline font-medium"
                >
                  Veure vídeos
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Exàmens anteriors</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Practica amb exàmens d'anys anteriors per preparar-te millor per a la selectivitat.
                </p>
                <Link 
                  href="/examens-anteriors"
                  className="text-selectivi-yellow hover:underline font-medium"
                >
                  Veure exàmens
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Bibliografia recomanada</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Consulta els llibres i materials recomanats per preparar les assignatures d'aquest àmbit.
                </p>
                <Link 
                  href="/bibliografia"
                  className="text-selectivi-yellow hover:underline font-medium"
                >
                  Veure bibliografia
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA para calculadora */}
        <div className="py-12 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Calcula la teva nota de selectivitat</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Utilitza la nostra calculadora per saber quina nota necessites per accedir als graus que t'interessen.
            </p>
            <Link 
              href="/calculadora" 
              className="btn bg-selectivi-yellow hover:bg-yellow-500 text-white px-8 py-3"
            >
              Anar a la calculadora
            </Link>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 