import { Cpu, Globe, Database, Microchip, CheckCircle2, Clock } from 'lucide-react';

// Dados Fictícios para você preencher depois
const linhasPesquisa = [
  {
    id: 1,
    titulo: "Sistemas Inteligentes e Autônomos",
    descricao: "Desenvolvimento de algoritmos de tomada de decisão, navegação autônoma e controle preditivo para robótica e veículos não tripulados.",
    icone: Cpu
  },
  {
    id: 2,
    titulo: "Visão Computacional Aplicada",
    descricao: "Processamento de imagens em tempo real para detecção de anomalias industriais, reconhecimento de padrões e biometria avançada.",
    icone: Globe
  },
  {
    id: 3,
    titulo: "Engenharia de Dados e IoT",
    descricao: "Arquiteturas distribuídas para processamento massivo de dados de sensores, otimização de banda e edge computing em ambientes críticos.",
    icone: Database
  }
];

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Visão para Inspeção Submarina (SVIS)",
    fomento: "CESAR",
    status: "Em andamento",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ano: "2024 - Atual"
  },
  {
    id: 2,
    titulo: "Controle Preditivo para Drones Agrícolas",
    fomento: "CESAR",
    status: "Concluído",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ano: "2022 - 2024"
  }
];

export default function Pesquisa() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Cabeçalho da Página */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-1 w-full bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950">
          Nossa <span className="text-orange-600">Pesquisa</span>
        </h1>
        <p className="text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
          Exploramos as fronteiras da computação e engenharia para resolver problemas reais da indústria e da sociedade.
        </p>
      </header>

      {/* Seção 1: Linhas de Pesquisa */}
      <section>
        <SectionTitle>Linhas de Pesquisa</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linhasPesquisa.map((linha) => {
            const Icon = linha.icone;
            return (
              <div key={linha.id} className="group bg-white border border-slate-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-orange-100 relative overflow-hidden">
                {/* Detalhe de fundo geométrico suave */}
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

      {/* Seção 2: Projetos Aprovados */}
      <section>
        <SectionTitle>Projetos em Destaque</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projetos.map((projeto) => {
            const isAtivo = projeto.status === "Em andamento";
            
            return (
              <div key={projeto.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col transition-all hover:border-orange-300 hover:shadow-md">
                
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {projeto.titulo}
                  </h3>
                  {/* Badge de Status */}
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
                    Agência: <span className="text-slate-900">{projeto.fomento}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-xs">{projeto.ano}</span>
                </div>
                
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

// Componente de Título de Seção (reaproveitado visualmente)
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
      <span className="text-orange-500">//</span>
      {children}
    </h2>
  );
}