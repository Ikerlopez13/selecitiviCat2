import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { getSubjectById, getCategoryById } from '@/data/subjects';

interface SubjectPageProps {
  params: {
    id: string;
  };
}

export default function SubjectPage({ params }: SubjectPageProps) {
  // Convertir params.id a string para evitar el error
  const subjectId = String(params.id);
  const subject = getSubjectById(subjectId);
  
  if (!subject) {
    notFound();
  }
  
  const category = getCategoryById(subject.category);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-20">
        {/* Hero Section */}
        <div className={`py-16 px-4 md:px-8 ${category?.color || 'bg-selectivi-yellow'}`}>
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
                  <Link 
                    href={`/categoria/${subject.category}`} 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {category?.name || subject.category}
                  </Link>
                  <span>/</span>
                  <span className="font-medium">{subject.name}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{subject.name}</h1>
                <p className="text-xl mb-6">{subject.description}</p>
                
                <div className="flex items-center gap-2 mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/20 text-gray-800">
                    <span className="mr-1">{category?.icon}</span>
                    {category?.name}
                  </span>
                </div>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <div className="bg-white p-8 rounded-full shadow-lg">
                  <span className="text-8xl">{category?.icon || '📚'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenido principal */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Sobre aquesta assignatura</h2>
                
                <div className="prose max-w-none">
                  <p>
                    L'assignatura de {subject.name} és una matèria fonamental dins del currículum de batxillerat. 
                    Els estudiants que cursen aquesta assignatura adquireixen coneixements essencials que els 
                    preparen tant per a la selectivitat com per als seus futurs estudis universitaris.
                  </p>
                  
                  <h3>Continguts principals</h3>
                  <ul>
                    <li>Introducció a {subject.name}</li>
                    <li>Conceptes bàsics i fonamentals</li>
                    <li>Aplicacions pràctiques</li>
                    <li>Metodologies d'anàlisi i resolució de problemes</li>
                    <li>Preparació específica per a la selectivitat</li>
                  </ul>
                  
                  <h3>Competències que desenvoluparàs</h3>
                  <p>
                    En cursar aquesta assignatura, desenvoluparàs competències clau com l'anàlisi crítica, 
                    la resolució de problemes complexos, i la capacitat d'aplicar els coneixements teòrics 
                    a situacions pràctiques.
                  </p>
                  
                  <h3>Recomanacions per a l'estudi</h3>
                  <p>
                    Per treure el màxim profit d'aquesta assignatura, et recomanem:
                  </p>
                  <ul>
                    <li>Mantenir un estudi constant i regular</li>
                    <li>Practicar amb exàmens d'anys anteriors</li>
                    <li>Formar grups d'estudi amb companys</li>
                    <li>Consultar recursos addicionals com vídeos i llibres especialitzats</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Ponderacions</h3>
                  <p className="mb-4">
                    Aquesta assignatura pot ponderar fins a 0.2 en determinats graus universitaris. 
                    Consulta les ponderacions específiques per als graus que t'interessen.
                  </p>
                  <Link 
                    href="/ponderacions" 
                    className="btn bg-selectivi-yellow hover:bg-yellow-500 text-white w-full"
                  >
                    Veure ponderacions
                  </Link>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Recursos recomanats</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/millors-videos" 
                        className="flex items-center gap-2 text-gray-800 hover:text-selectivi-yellow transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Vídeos explicatius
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/examens-anteriors" 
                        className="flex items-center gap-2 text-gray-800 hover:text-selectivi-yellow transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Exàmens d'anys anteriors
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/bibliografia" 
                        className="flex items-center gap-2 text-gray-800 hover:text-selectivi-yellow transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Bibliografia recomanada
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA para calculadora */}
        <div className="py-12 px-4 md:px-8 bg-gray-50">
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