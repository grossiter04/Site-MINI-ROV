import { Cpu, Globe, Database, BookText, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const linhasInvestigacao = [
  {
    id: 1,
    titulo: "Localização",
    abordagem: "Investigação de arquiteturas de odometria e estimativa de estado robusta para veículos subaquáticos autónomos (AUVs e ROVs) operando sob condições severas e na ausência de sinal GNSS.",
    icone: Globe
  },
  {
    id: 2,
    titulo: "Mapeamento",
    abordagem: "Desenvolvimento de metodologias e algoritmos para reconstrução tridimensional, mapeamento denso e representação de superfícies em ambientes subaquáticos confinados ou de baixa visibilidade.",
    icone: Database
  },
  {
    id: 3,
    titulo: "Fusão de Sensores",
    abordagem: "Modelagem de sistemas de fusão multimodal e otimização baseada em grafos de fatores (Factor Graphs) para integrar medições inerciais (IMU), acústicas (DVL, Sonar) e ópticas.",
    icone: Cpu
  },
  {
    id: 4,
    titulo: "Identificação de Bio Invasores Marinhos (Coral-sol)",
    abordagem: "Aplicação de modelos avançados de visão computacional e redes neurais profundas (Deep Learning) voltados à deteção, segmentação e monitorização automatizada do coral-sol em ecossistemas marinhos.",
    icone: Eye
  }
];

export default function Pesquisa() {
  return (
    <div className="space-y-16 py-12">
      <header className="border-b border-slate-200 pb-8">
        <div className="w-16 h-1 bg-orange-500 mb-4"></div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Linhas de Investigação Científica</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-3xl text-justify">
          As nossas frentes de investigação concentram-se na proposição e validação de artefactos tecnológicos para a autonomia robótica em ambientes severos, seguindo rigorosamente o paradigma da Design Science Research (DSR).
        </p>
      </header>

      {/* Grid configurado em 2x2 para acomodar perfeitamente os 4 novos temas */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {linhasInvestigacao.map((linha) => {
          const Icon = linha.icone;
          return (
            <div key={linha.id} className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 bg-slate-50 text-orange-600 rounded flex items-center justify-center mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{linha.titulo}</h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 text-justify">{linha.abordagem}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-slate-900 text-white p-10 rounded-lg text-center">
        <BookText className="w-10 h-10 mx-auto mb-6 text-orange-500" />
        <h2 className="text-2xl font-bold mb-4">Evidência Científica</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          Todas as investigações são suportadas e validadas através de publicações em veículos de alto impacto e conferências internacionais submetidas a revisão por pares (peer-review).
        </p>
        <Link to="/publicacoes" className="inline-block px-8 py-3 bg-orange-600 font-bold rounded-lg hover:bg-orange-700 transition-colors">
          Consultar Repositório Bibliográfico
        </Link>
      </section>
    </div>
  );
}