import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Radar, Cpu, ChevronRight, Mic, Ticket } from 'lucide-react';

// Deixei apenas o seu evento real para você testar como fica centralizado!
const eventos = [
  { id: 1, titulo: "CROS", ano: "2026", local: "João Pessoa, PB" },
];

const palestras = [
  { id: 1, titulo: "Palestra no CESAR BEAT", evento: "CESAR BEAT", palestrante: "Fernando Carvalho" },
];

// Lógica Inteligente: Só anima se tiver mais de 3 itens
const animarEventos = eventos.length > 3;
const animarPalestras = palestras.length > 3;

// Se for animar, multiplica por 4 para garantir que enche a tela. Se não, mostra só os originais.
const eventosRender = animarEventos ? [...eventos, ...eventos, ...eventos, ...eventos] : eventos;
const palestrasRender = animarPalestras ? [...palestras, ...palestras, ...palestras, ...palestras] : palestras;

export default function Home() {
  return (
    <div className="space-y-24 pb-12">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-100/50 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-50/50 blur-3xl -z-10"></div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            Robótica e Autonomia em Ambientes Extremos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tighter leading-tight mb-8">
            Navegação avançada em <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              Robótica Subaquática
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            Desenvolvemos soluções de ponta em SLAM, fusão de sensores e percepção visual baseada em IA para veículos autônomos e operados remotamente (AUVs/ROVs) em cenários de baixa visibilidade e ambientes confinados.
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
              to="/publicacoes" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              Artigos Publicados
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Seção de Pilares */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Waves className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">SLAM Subaquático</h3>
            <p className="text-slate-600 mb-6">
              Odometria robusta e mapeamento em ambientes confinados, superando a escassez de texturas visuais e alta turbidez.
            </p>
            <Link to="/pesquisa" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Ver pesquisas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Radar className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Fusão Multissensorial</h3>
            <p className="text-slate-600 mb-6">
              Integração de LiDAR azul-verde, DVL, IMU e sonares através de grafos de otimização para garantir resiliência navegacional.
            </p>
            <Link to="/pesquisa" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Explorar área <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Percepção com IA</h3>
            <p className="text-slate-600 mb-6">
              Uso de arquiteturas baseadas em Transformers para reconstrução 3D e estimativa de profundidade em cenários extremos.
            </p>
            <Link to="/pesquisa" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Conhecer projetos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Seção de Eventos e Palestras */}
      <section className="pt-12 pb-20 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Onde estamos presentes
          </h2>
          <p className="text-slate-600">
            Acompanhe nossas participações nos principais eventos científicos e de mercado.
          </p>
        </div>

        {/* Rolo 1: Eventos */}
        <div className={`relative flex overflow-hidden mb-8 group ${!animarEventos ? 'justify-center w-full' : ''}`}>
          <div className={`${animarEventos ? 'animate-scroll-right pause-on-hover' : 'flex-wrap justify-center'} flex gap-6 px-3`}>
            {eventosRender.map((item, index) => (
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

        {/* Rolo 2: Palestras */}
        <div className={`relative flex overflow-hidden group ${!animarPalestras ? 'justify-center w-full' : ''}`}>
          <div className={`${animarPalestras ? 'animate-scroll-left pause-on-hover' : 'flex-wrap justify-center'} flex gap-6 px-3`}>
            {palestrasRender.map((item, index) => (
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