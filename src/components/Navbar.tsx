import { Link, useLocation } from 'react-router-dom';
import logoCesar from '../assets/CESAR_Laranja.png'; 

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Pesquisa', path: '/pesquisa' },
    { name: 'Equipe', path: '/pessoas' },
    { name: 'Publicações', path: '/publicacoes' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={logoCesar} 
                alt="Logo CESAR" 
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Links Centrais */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'border-orange-500 text-orange-600' 
                      : 'border-transparent text-slate-500 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Botão de Contato */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              Fale Conosco
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}