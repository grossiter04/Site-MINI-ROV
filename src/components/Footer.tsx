import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 mt-16 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-orange-500">CREATE@C.E.S.A.R</span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Somos um grupo de pesquisa dedicado a explorar as fronteiras da tecnologia e inovação. 
            Nosso foco é desenvolver soluções práticas e impactantes para os desafios atuais, combinando ciência, engenharia e criatividade.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Acesso Rápido
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500 transition-colors">Início</Link></li>
            <li><Link to="/pesquisa" className="hover:text-orange-500 transition-colors">Pesquisa</Link></li>
            <li><Link to="/pessoas" className="hover:text-orange-500 transition-colors">Equipe</Link></li>
            <li><Link to="/publicacoes" className="hover:text-orange-500 transition-colors">Publicações</Link></li>
            <li><Link to="/contato" className="hover:text-orange-500 transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contatos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Contato
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span>Rua Bione, Cais do Apolo, 220<br/>Recife, PE</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <a href="mailto:ffc@cesar.school" className="hover:text-orange-500 transition-colors">
                ffc@cesar.school
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Linha de Copyright (Ano automático) */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>© {new Date().getFullYear()} CREATE@C.E.S.A.R. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}