import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importamos o hook
import { Globe } from 'lucide-react'; // Ícone para o botão de idioma
import logoCesar from '../assets/CESAR_Laranja.png'; 

export default function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation(); // Inicializamos a tradução

  // Função para alternar o idioma
  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  // Agora usamos t('caminho.no.dicionario') em vez do texto fixo
  const navLinks = [
    { name: t('navbar.inicio'), path: '/' },
    { name: t('navbar.pesquisa'), path: '/pesquisa' },
    { name: t('navbar.eventos'), path: '/eventos' },
    { name: t('navbar.equipe'), path: '/pessoas' },
    { name: t('navbar.publicacoes'), path: '/publicacoes' },
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

          {/* Botões da Direita (Idioma + Contato) */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Botão de Idioma */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-orange-600 transition-colors text-sm font-bold uppercase"
              title="Mudar idioma / Change language"
            >
              <Globe className="w-4 h-4" />
              {i18n.language.startsWith('pt') ? 'PT' : 'EN'}
            </button>

            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              {t('navbar.contato')}
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}