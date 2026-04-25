import { FileText, Mail } from 'lucide-react'; 
import fotoFernando from '../assets/Fernando_Carvalho_Foto.png';
import fotoFlavio from '../assets/Flavio_Muniz_Foto.png';
import fotoLisa from '../assets/Lisa_Matubara_Foto.png';
import fotoRafael from '../assets/Rafael_Melo_Foto.png';
import fotoVictor from '../assets/Victor_Costa_Foto.png';

const coordenacao = [
  {
    nome: "Fernando Carvalho",
    cargo: "Coordenador Geral",
    area: "Engenharia de Software, IoT e Robótica",
    email: "ffc@cesar.org.br",
    lattes: "http://lattes.cnpq.br/8491797408318076",
    linkedin: "https://www.linkedin.com/in/fernando-ferreira-carvalho-05890526/",
    foto: fotoFernando
  }, 
];

const pesquisadores = [
  { nome: "Fernando Carvalho", cargo: "Pesquisador", area: "Engenharia de Software, IoT e Robótica", lattes: "#", linkedin: "#", foto: fotoFernando },
  { nome: "Benedito Alberto Macedo", cargo: "Pesquisador", area: "Análise de Dados", lattes: "#", linkedin: "#", foto: null },
];

const alunos = [
  { nome: "Eduardo Muniz Fontelles", cargo: "Graduação", area: "Robótica", lattes: "#", linkedin: "#", foto: null },
  { nome: "Flávio Romero Santos de Sá Muniz", cargo: "Especialização", area: "Robótica", lattes: "http://lattes.cnpq.br/9189816041158285", linkedin: "https://www.linkedin.com/in/flavio-muniz/", foto: fotoFlavio },
  { nome: "Lisa Matubara", cargo: "Graduação", area: "Desenvolvedora Backend", lattes: "http://lattes.cnpq.br/0545406300374038", linkedin: "https://www.linkedin.com/in/lisa-matubara/", foto: fotoLisa },
  { nome: "Rafael Rodiani Faria Melo", cargo: "Graduação", area: "Robótica", lattes: " http://lattes.cnpq.br/0148847174850005", linkedin: "#", foto: fotoRafael },
  { nome: "Victor Guilherme Alves Costa", cargo: "Graduação", area: "Robótica", lattes: "http://lattes.cnpq.br/0491365749315456", linkedin: "#", foto: fotoVictor },
];

export default function Pessoas() {
  return (
    <div className="space-y-16 py-12">
      {/* Cabeçalho da Página - Forte uso da cor sotaque */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-1 w-full bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950">
          Nossa <span className="text-orange-600">Equipe</span>
        </h1>
        <p className="text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
          Conheça os pesquisadores, engenheiros e estudantes que impulsionam a inovação tecnológica no nosso grupo.
        </p>
      </header>

      {/* Seção Coordenadores */}
      <section>
        <SectionTitle>Coordenação</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coordenacao.map((p, i) => <CardPessoaDestaque key={i} pessoa={p} />)}
        </div>
      </section>

      {/* Seção Pesquisadores */}
      <section>
        <SectionTitle>Pesquisadores</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pesquisadores.map((p, i) => <CardPessoa key={i} pessoa={p} />)}
        </div>
      </section>

      {/* Seção Alunos */}
      <section>
        <SectionTitle>Estudantes</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alunos.map((p, i) => <CardPessoa key={i} pessoa={p} />)}
        </div>
      </section>
    </div>
  );
}

// Outros componentes

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
      <span className="text-orange-500">//</span>
      {children}
    </h2>
  );
}

// Icone Usuário
function UserPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-400 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-1/3 h-1/3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </div>
  );
}

// Card Coordenador
function CardPessoaDestaque({ pessoa }: { pessoa: any }) {
  return (
    <div className="group bg-white border border-slate-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-1 hover:border-orange-100">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-orange-200 transition-colors duration-300 flex-shrink-0">

          {pessoa.foto ? (
            <img src={pessoa.foto} alt={`Foto de ${pessoa.nome}`} className="w-full h-full object-cover" />
          ) : (
            <UserPlaceholder />
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-950">{pessoa.nome}</h3>
          <p className="text-lg font-semibold text-orange-600">{pessoa.cargo}</p>
        </div>
      </div>
      <p className="text-slate-700 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <strong className="text-slate-900">Área:</strong> {pessoa.area}
      </p>
      <div className="flex gap-4 pt-6 border-t border-slate-100">
        <IconLink href={`mailto:${pessoa.email}`} icon={Mail} label="Email" />
        <IconLink href={pessoa.lattes} icon={FileText} label="Lattes" />
        <IconLink href={pessoa.linkedin} icon={LinkedinIcon} label="LinkedIn" />
      </div>
    </div>
  );
}

// Card Pesquisadores e Alunos
function CardPessoa({ pessoa }: { pessoa: any }) {
  return (
    <div className="group bg-white border border-slate-100 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-orange-100 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-4 border-slate-50 group-hover:border-orange-100 transition-colors duration-300">

        {pessoa.foto ? (
          <img src={pessoa.foto} alt={`Foto de ${pessoa.nome}`} className="w-full h-full object-cover" />
        ) : (
          <UserPlaceholder />
        )}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 leading-snug flex-grow">{pessoa.nome}</h3>
      <p className="text-sm font-medium text-orange-600 mb-1">{pessoa.cargo}</p>
      <p className="text-xs text-slate-500 mb-4">{pessoa.area}</p>
      
      <div className="flex gap-3 pt-4 border-t border-slate-100 w-full justify-center">
        <IconLink href={pessoa.lattes} icon={FileText} label="Lattes" compact />
        <IconLink href={pessoa.linkedin} icon={LinkedinIcon} label="LinkedIn" compact />
      </div>
    </div>
  );
}

interface IconLinkProps { href: string; icon: React.ElementType; label: string; compact?: boolean }

function IconLink({ href, icon: Icon, label, compact }: IconLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`group/link flex items-center gap-2 text-slate-500 hover:text-orange-600 ${compact ? 'text-xs' : 'text-sm font-medium'}`}
      title={label}
    >
      <Icon className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} group-hover/link:animate-pulse`} />
      {!compact && label}
    </a>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}