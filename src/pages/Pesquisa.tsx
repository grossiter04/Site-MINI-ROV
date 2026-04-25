import { Cpu, Globe, Database, Microchip, CheckCircle2, Clock, BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const linhasPesquisa = [
  {
    id: 1,
    titulo: "Localização e Mapeamento (SLAM) em Ambientes Confinados",
    descricao: "Pesquisa focada em superar a falta de sinais GPS e a baixa textura visual em ambientes subaquáticos severos usando odometria inercial, acústica e visual.",
    icone: Globe
  },
  {
    id: 2,
    titulo: "Fusão de Sensores e LiDAR Subaquático",
    descricao: "Integração de sensores complementares (Câmeras, IMU, DVL, Sonar e LiDAR azul-verde) utilizando otimização de grafos de fatores para navegação robusta.",
    icone: Cpu
  },
  {
    id: 3,
    titulo: "Reconstrução 3D e Percepção com Transformers",
    descricao: "Aplicação de arquiteturas avançadas de Deep Learning (Transformers e modelos híbridos CNN) para estimativa de profundidade e superação de turbidez.",
    icone: Database
  }
];

const projetos = [
  {
    id: 1,
    titulo: "Navegação Autônoma em Cenários de Baixa Visibilidade",
    fomento: "Projeto Interno / Parcerias",
    status: "Em andamento",
    descricao: "Desenvolvimento de algoritmos que desacoplam a localização do mapeamento, garantindo que o ROV/AUV mantenha a estabilidade inercial mesmo quando a visão falha completamente devido à turbidez.",
    ano: "Atual"
  },
  {
    id: 2,
    titulo: "Modelagem Óptica e Restauração de Imagem Subaquática",
    fomento: "Pesquisa Acadêmica",
    status: "Em andamento",
    descricao: "Uso de redes neurais e priors físicos para corrigir absorção espectral e dispersão de luz, melhorando a precisão da extração de feições visuais (pontos e linhas).",
    ano: "Atual"
  }
];

export default function Pesquisa() {
  return (
    <div className="space-y-16 py-12">
      
      <header className="border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950">
          Nossa <span className="text-orange-600">Pesquisa</span>
        </h1>
        <p className="text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
          Exploramos as fronteiras da robótica móvel, desenvolvendo soluções de percepção e navegação para ambientes subaquáticos extremos e confinados.
        </p>
      </header>

      {/* Linhas de Pesquisa Baseadas nos Artigos */}
      <section>
        <SectionTitle>Linhas de Pesquisa</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linhasPesquisa.map((linha) => {
            const Icon = linha.icone;
            return (
              <div key={linha.id} className="group bg-white border border-slate-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-orange-100 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{linha.titulo}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {linha.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section>
        <SectionTitle>Frentes de Atuação</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projetos.map((projeto) => {
            const isAtivo = projeto.status === "Em andamento";
            
            return (
              <div key={projeto.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col transition-all hover:border-orange-300 hover:shadow-md">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {projeto.titulo}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    isAtivo ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isAtivo ? <Clock className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                    {projeto.status}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {projeto.descricao}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Microchip className="w-4 h-4 text-orange-500" />
                    <span>{projeto.fomento}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Chamada para as Publicações */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center mt-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-sm text-orange-600">
          <BookText className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Apoiados por Pesquisa de Ponta</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Nossas linhas de pesquisa e frentes de atuação são constantemente validadas através de publicações nos principais veículos e conferências internacionais (IEEE).
        </p>
        <Link 
          to="/publicacoes" 
          className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md"
        >
          Ver Artigos Publicados
        </Link>
      </section>

    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
      <span className="text-orange-500">//</span>
      {children}
    </h2>
  );
}