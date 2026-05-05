import { Cpu, Globe, Database, BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const linhasInvestigacao = [
  {
    id: 1,
    titulo: "SLAM em Ambientes Subaquáticos Confinados",
    abordagem: "Investigamos arquiteturas de localização e mapeamento (SLAM) híbridas, avaliando o desacoplamento entre odometria visual-inercial e acústica para garantir a resiliência em cenários de baixa visibilidade.",
    icone: Globe
  },
  {
    id: 2,
    titulo: "Fusão Multimodal e LiDAR Azul-Verde",
    abordagem: "Propomos a fusão de dados de LiDAR azul-verde (532 nm) com DVL e IMU através de grafos de fatores (factor graphs) para uma reconstrução métrica robusta e contínua.",
    icone: Cpu
  },
  {
    id: 3,
    titulo: "Percepção Profunda com Arquiteturas Transformer",
    abordagem: "Avaliamos modelos baseados em Transformers para a captura de contexto global, associados a modelos físicos da formação da imagem subaquática, para a estimativa de profundidade monocular.",
    icone: Database
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {linhasInvestigacao.map((linha) => {
          const Icon = linha.icone;
          return (
            <div key={linha.id} className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-slate-50 text-orange-600 rounded flex items-center justify-center mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{linha.titulo}</h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 text-justify"> {linha.abordagem}</p>
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