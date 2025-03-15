import Link from 'next/link';

export default function NavbarMain() {
  return (
    <div className="navbar bg-white px-4 md:px-8 py-2 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-white rounded-box w-52">
            <li><Link href="/calculadora" className="hover:text-selectivi-yellow">Calculadora</Link></li>
            <li><Link href="/notes-de-tall" className="hover:text-selectivi-yellow">Notes de tall</Link></li>
            <li>
              <a className="hover:text-selectivi-yellow">Assignatures</a>
              <ul className="p-2 bg-white">
                <li><Link href="/categories" className="hover:text-selectivi-yellow">Totes les categories</Link></li>
                <li><Link href="/categoria/comunes" className="hover:text-selectivi-yellow">Comunes</Link></li>
                <li><Link href="/categoria/tecnologic" className="hover:text-selectivi-yellow">Científic i Tecnològic</Link></li>
                <li><Link href="/categoria/artistic" className="hover:text-selectivi-yellow">Artístic</Link></li>
                <li><Link href="/categoria/llengues" className="hover:text-selectivi-yellow">Llengües</Link></li>
                <li><Link href="/categoria/social" className="hover:text-selectivi-yellow">Social</Link></li>
              </ul>
            </li>
            <li><Link href="/millors-videos" className="hover:text-selectivi-yellow">Millors Videos</Link></li>
            <li><Link href="/premium" className="hover:text-selectivi-yellow">Fes-te Premium ✨</Link></li>
          </ul>
        </div>
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">selectivi<span className="text-selectivi-yellow">CAT</span></span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/calculadora" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Calculadora</Link></li>
          <li><Link href="/notes-de-tall" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Notes de tall</Link></li>
          <li>
            <details>
              <summary className="text-base font-medium hover:text-selectivi-yellow transition-colors">Assignatures</summary>
              <ul className="p-2 bg-white shadow-md rounded-md z-[100]">
                <li><Link href="/categories" className="hover:text-selectivi-yellow">Totes les categories</Link></li>
                <li><Link href="/categoria/comunes" className="hover:text-selectivi-yellow">Comunes</Link></li>
                <li><Link href="/categoria/tecnologic" className="hover:text-selectivi-yellow">Científic i Tecnològic</Link></li>
                <li><Link href="/categoria/artistic" className="hover:text-selectivi-yellow">Artístic</Link></li>
                <li><Link href="/categoria/llengues" className="hover:text-selectivi-yellow">Llengües</Link></li>
                <li><Link href="/categoria/social" className="hover:text-selectivi-yellow">Social</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/millors-videos" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Millors Videos</Link></li>
          <li><Link href="/premium" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Fes-te Premium ✨</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90 border-none">
          Iniciar Sessió
        </Link>
      </div>
    </div>
  );
} 