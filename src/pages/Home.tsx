import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Users, Lightbulb, ChevronRight, Mic, Ticket } from 'lucide-react';

const eventos = [
  { id: 1, titulo: "Generico", ano: "2025", local: "São Paulo, SP" },
  { id: 2, titulo: "Generico", ano: "2025", local: "Recife, PE" },
];

const palestras = [
  { id: 1, titulo: "Generico", evento: "Generico", palestrante: "Generico" },
  { id: 2, titulo: "Generico", evento: "Generico", palestrante: "Generico" },

];

// Duplicando as listas para criar o efeito de loop infinito perfeito no CSS
const eventosDuplicados = [...eventos, ...eventos, ...eventos];
const palestrasDuplicadas = [...palestras, ...palestras, ...palestras];

export default function Home() {
  return (
    <div className="space-y-24 pb-12">
      
      {/* 1. Hero Section (Área de Impacto Principal) */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-100/50 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-50/50 blur-3xl -z-10"></div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            Inovação e Tecnologia
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tighter leading-tight mb-8">
            Pesquisa avançada em <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              Sistemas Autônomos
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            Desenvolvemos soluções na fronteira do conhecimento em computação, robótica e inteligência de dados para transformar a indústria e a sociedade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/pesquisa" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Conhecer Projetos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pessoas" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              Nossa Equipe
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Seção de Pilares / Destaques */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Microscope className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Pesquisa de Ponta</h3>
            <p className="text-slate-600 mb-6">
              Investigação científica rigorosa focada em resolver desafios complexos do mundo real através da tecnologia.
            </p>
            <Link to="/publicacoes" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Ver publicações <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Equipe Multidisciplinar</h3>
            <p className="text-slate-600 mb-6">
              Pesquisadores, alunos de pós-graduação e engenheiros trabalhando juntos em um ambiente colaborativo.
            </p>
            <Link to="/pessoas" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Conhecer membros <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Inovação Aplicada</h3>
            <p className="text-slate-600 mb-6">
              Transformamos teorias acadêmicas em protótipos funcionais e produtos viáveis para a indústria.
            </p>
            <Link to="/pesquisa" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Explorar projetos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Seção de Eventos e Palestras (Marquee Infinito) */}
      <section className="pt-12 pb-20 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Onde estamos presentes
          </h2>
          <p className="text-slate-600">
            Acompanhe nossas participações nos principais eventos científicos e de mercado.
          </p>
        </div>

        {/* Rolo 1: Eventos (Esquerda para Direita) */}
        <div className="relative flex overflow-hidden mb-8 group">
          <div className="animate-scroll-right pause-on-hover flex gap-6 px-3">
            {eventosDuplicados.map((item, index) => (
              <div key={`evento-${index}`} className="flex-shrink-0 w-80 bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    Evento
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">{item.titulo}</h3>
                <p className="text-sm text-slate-500 font-medium">{item.local} • {item.ano}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rolo 2: Palestras (Direita para Esquerda) */}
        <div className="relative flex overflow-hidden group">
          <div className="animate-scroll-left pause-on-hover flex gap-6 px-3">
            {palestrasDuplicadas.map((item, index) => (
              <div key={`palestra-${index}`} className="flex-shrink-0 w-80 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-orange-500 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center">
                    <Mic className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-2 py-1 rounded-md">
                    Palestra
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight mb-2">{item.titulo}</h3>
                <p className="text-sm text-slate-400 font-medium">{item.evento} • {item.palestrante}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}