import { FileText, Mail } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';

// Imports estáticos corretos para o Vite
import fotoFernando from '../assets/Fernando_Carvalho_Foto.png';
import fotoFlavio from '../assets/Flavio_Muniz_Foto.png';
import fotoLisa from '../assets/Lisa_Matubara_Foto.png';
import fotoRafael from '../assets/Rafael_Melo_Foto.png';
import fotoVictor from '../assets/Victor_Costa_Foto.png';
import fotoBeto from '../assets/Beto_Macedo_Foto.png';
import fotoMarco from '../assets/Marco_Antonio_Foto.png';

export default function Pessoas() {
  const { t } = useTranslation();

  const coordenacao = [
    {
      nome: "Fernando F. de Carvalho",
      cargo: t('equipe.cargos.invPrincipal'),
      area: t('equipe.areas.engSoftware'),
      email: "ffc@cesar.school",
      lattes: "http://lattes.cnpq.br/8491797408318076",
      linkedin: "https://www.linkedin.com/in/fernando-ferreira-carvalho-05890526/",
      foto: fotoFernando
    }, 
  ];

  const pesquisadores = [
    { 
      nome: "Fernando F. de Carvalho", 
      cargo: t('equipe.cargos.invAssociado'), 
      area: t('equipe.areas.engSoftware'), 
      lattes: "http://lattes.cnpq.br/8491797408318076", 
      linkedin: "https://www.linkedin.com/in/fernando-ferreira-carvalho-05890526/", 
      foto: fotoFernando 
    },
    { 
      nome: "Benedito Alberto Macedo", 
      cargo: t('equipe.cargos.invAssociado'), 
      area: t('equipe.areas.gestorDev'), 
      lattes: "http://lattes.cnpq.br/5699536418012791", 
      linkedin: "https://www.linkedin.com/in/beneditomacedo/", 
      foto: fotoBeto  
    },
    { 
      nome: "Marco A. de Oliveira Domingues", 
      cargo: t('equipe.cargos.devSoftware'), 
      area: t('equipe.areas.visaoComp'), 
      lattes: "http://lattes.cnpq.br/7139685024425123", 
      foto: fotoMarco  
    },
  ];

  const alunos = [
    { 
      nome: "Eduardo M. Fontelles", 
      cargo: t('equipe.cargos.discGrad'), 
      area: t('equipe.areas.robotica'), 
      lattes: "#", 
      linkedin: "#", 
      foto: null 
    },
    { 
      nome: "Flávio Romero S. de S. Muniz", 
      cargo: t('equipe.cargos.discGrad'), 
      area: t('equipe.areas.sistEmbarcados'), 
      lattes: "http://lattes.cnpq.br/9189816041158285", 
      linkedin: "https://www.linkedin.com/in/flavio-muniz/", 
      foto: fotoFlavio 
    },
    { 
      nome: "Lisa Matubara", 
      cargo: t('equipe.cargos.discGrad'), 
      area: t('equipe.areas.devBackend'), 
      lattes: "http://lattes.cnpq.br/0545406300374038", 
      linkedin: "https://www.linkedin.com/in/lisa-matubara/", 
      foto: fotoLisa 
    },
    { 
      nome: "Rafael Rodiani F. Melo", 
      cargo: t('equipe.cargos.discPos'), 
      area: t('equipe.areas.sistEmbarcados'), 
      lattes: "http://lattes.cnpq.br/0148847174850005", 
      linkedin: "#", 
      foto: fotoRafael 
    },
    { 
      nome: "Victor Guilherme A. Costa", 
      cargo: t('equipe.cargos.discGrad'), 
      area: t('equipe.areas.sistEmbarcados'), 
      lattes: "http://lattes.cnpq.br/0491365749315456", 
      linkedin: "#", 
      foto: fotoVictor 
    },
  ];

  return (
    <div className="space-y-16 py-12">
      
      {/* Cabeçalho da Página */}
      <header className="border-b border-slate-200 pb-8">
        <div className="w-16 h-1 bg-orange-500 mb-4"></div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {t('equipe.title')}
        </h1>
        <p className="text-lg text-slate-600 mt-4 max-w-3xl leading-relaxed text-justify">
          {t('equipe.desc')}
        </p>
      </header>

      {/* Seção Coordenação */}
      <section>
        <SectionTitle>{t('equipe.sections.coordenacao')}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coordenacao.map((p, i) => <CardDiretorio key={i} pessoa={p} destaque />)}
        </div>
      </section>

      {/* Seção Investigadores */}
      <section>
        <SectionTitle>{t('equipe.sections.pesquisadores')}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pesquisadores.map((p, i) => <CardDiretorio key={i} pessoa={p} />)}
        </div>
      </section>

      {/* Seção Discentes */}
      <section>
        <SectionTitle>{t('equipe.sections.alunos')}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alunos.map((p, i) => <CardDiretorio key={i} pessoa={p} />)}
        </div>
      </section>

    </div>
  );
}

// Subcomponente de Título de Seção (MANTIDO ORIGINAL)
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
      <span className="w-6 h-1 bg-slate-300"></span>
      {children}
    </h2>
  );
}

// Subcomponente: Placeholder Formal (Quadrado) (MANTIDO ORIGINAL)
function FormalPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300 border border-slate-200 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-1/2 h-1/2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </div>
  );
}

// Subcomponente de Card Unificado (Formato Diretório Acadêmico) (MANTIDO ORIGINAL)
function CardDiretorio({ pessoa, destaque = false }: { pessoa: any, destaque?: boolean }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-lg p-6 flex items-start gap-5 shadow-sm hover:border-slate-300 transition-colors ${destaque ? 'md:col-span-1' : ''}`}>
      
      {/* Imagem Formato 3x4 Acadêmico */}
      <div className={`flex-shrink-0 ${destaque ? 'w-24 h-32' : 'w-20 h-24'} rounded overflow-hidden`}>
        {pessoa.foto ? (
          <img src={pessoa.foto} alt={`Fotografia de ${pessoa.nome}`} className="w-full h-full object-cover border border-slate-200 rounded" />
        ) : (
          <FormalPlaceholder />
        )}
      </div>

      {/* Dados do Investigador */}
      <div className="flex flex-col h-full justify-start py-1">
        <h3 className={`font-bold text-slate-900 leading-tight mb-1 ${destaque ? 'text-lg' : 'text-base'}`}>
          {pessoa.nome}
        </h3>
        <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">
          {pessoa.cargo}
        </p>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {pessoa.area}
        </p>
        
        {/* Links Acadêmicos */}
        <div className="flex flex-wrap gap-4 mt-auto">
          {pessoa.email && (
            <IconLink href={`mailto:${pessoa.email}`} icon={Mail} label="Email" />
          )}
          {pessoa.lattes !== "#" && (
            <IconLink href={pessoa.lattes} icon={FileText} label="Lattes" />
          )}
          {pessoa.linkedin !== "#" && (
            <IconLink href={pessoa.linkedin} icon={LinkedinIcon} label="LinkedIn" />
          )}
        </div>
      </div>

    </div>
  );
}

// Subcomponente de Link Simples (MANTIDO ORIGINAL)
interface IconLinkProps { href: string; icon: React.ElementType; label: string; }

function IconLink({ href, icon: Icon, label }: IconLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-1.5 text-slate-400 hover:text-orange-600 transition-colors"
      title={label}
    >
      <Icon className="w-4 h-4" />
      <span className="text-xs font-semibold">{label}</span>
    </a>
  );
}

// Ícone Customizado para LinkedIn (MANTIDO ORIGINAL)
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