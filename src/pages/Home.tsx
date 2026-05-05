import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Radar, Cpu, ChevronRight, Mic, BookOpen } from 'lucide-react';

const comunicacoesCientificas = [
  { id: 1, titulo: "CROS 2026", ano: "2026", local: "João Pessoa, PB" },
];

const seminarios = [
  { id: 1, titulo: "Palestra no CESAR BEAT", evento: "CESAR BEAT", palestrante: "Fernando Carvalho" },
];

const animarCientificos = comunicacoesCientificas.length > 3;
const animarSeminarios = seminarios.length > 3;

const renderCientificos = animarCientificos 
  ? [...comunicacoesCientificas, ...comunicacoesCientificas, ...comunicacoesCientificas] 
  : comunicacoesCientificas;

const renderSeminarios = animarSeminarios 
  ? [...seminarios, ...seminarios, ...seminarios] 
  : seminarios;

export default function Home() {
  return (
    <div className="space-y-24 pb-12">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-slate-100/50 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-50/50 blur-3xl -z-10"></div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4 text-orange-600" />
            Grupo de Pesquisa Científica
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            Laboratório de Robótica e <br className="hidden md:block" />
            Sistemas Autónomos Subaquáticos
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl text-justify">
            O grupo dedica-se à investigação científica em percepção robótica, estimativa de estado e mapeamento tridimensional em ambientes subaquáticos. O nosso foco reside na superação de desafios impostos por restrições operacionais severas, como ausência de sinais GNSS, alta turbidez, espalhamento óptico e forte multipath acústico em ambientes confinados, visando o incremento da autonomia robusta de AUVs e ROVs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/pesquisa" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Linhas de Investigação
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/publicacoes" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-300"
            >
              Repositório de Publicações
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Áreas de Investigação</h2>
          <div className="w-16 h-1 bg-orange-500 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col h-full">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Waves className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Simultaneous Localization and Mapping (SLAM)</h3>
            <p className="text-slate-600 text-sm text-justify mb-6 leading-relaxed flex-grow">
              Investigação de arquiteturas de localização e mapeamento para ambientes com escassez de feições visuais. A pesquisa foca no desacoplamento entre odometria e mapeamento em sistemas fortemente acoplados para mitigar a deriva (drift) em missões de longa duração.
            </p>
            <Link to="/pesquisa" className="text-orange-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
              Detalhes metodológicos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col h-full">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Radar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Fusão de Dados Multimodais</h3>
            <p className="text-slate-600 text-sm text-justify mb-6 leading-relaxed flex-grow">
              Modelagem e otimização em grafos de fatores (Factor Graphs) para integração de medições inerciais (IMU), acústicas (DVL, Sonar) e ópticas (LiDAR azul-verde). O objetivo é garantir observabilidade sob falhas sistémicas de sensores.
            </p>
            <Link to="/pesquisa" className="text-orange-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
              Detalhes metodológicos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col h-full">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Visão Computacional e Deep Learning</h3>
            <p className="text-slate-600 text-sm text-justify mb-6 leading-relaxed flex-grow">
              Aplicação de modelos de aprendizagem profunda, incluindo arquiteturas Transformers, associados a priors físicos de atenuação óptica para restauração de imagem e estimativa de profundidade monocular em meios com alta turbidez.
            </p>
            <Link to="/pesquisa" className="text-orange-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
              Detalhes metodológicos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-12 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Comunicações em Congressos e Seminários
          </h2>
          <p className="text-sm text-slate-600">
            Apresentações de trabalhos submetidos a revisão por pares e atividades académicas do grupo.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
            Anais de Conferências (Proceedings)
          </h3>
          <div className={`relative flex overflow-hidden group ${!animarCientificos ? 'justify-start w-full' : ''}`}>
            <div className={`${animarCientificos ? 'animate-scroll-right pause-on-hover' : 'flex-wrap'} flex gap-4 px-1`}>
              {renderCientificos.map((item, index) => (
                <div key={`cientifico-${index}`} className="flex-shrink-0 w-72 bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <p className="text-xs text-slate-500 font-mono mb-2">{item.ano} • {item.local}</p>
                  <h4 className="text-base font-bold text-slate-900 leading-tight">{item.titulo}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
            Seminários de Pesquisa e Palestras Convidadas
          </h3>
          <div className={`relative flex overflow-hidden group ${!animarSeminarios ? 'justify-start w-full' : ''}`}>
            <div className={`${animarSeminarios ? 'animate-scroll-left pause-on-hover' : 'flex-wrap'} flex gap-4 px-1`}>
              {renderSeminarios.map((item, index) => (
                <div key={`seminario-${index}`} className="flex-shrink-0 w-72 bg-white border border-slate-200 rounded-lg p-5">
                  <p className="text-xs text-slate-500 font-mono mb-2">{item.palestrante}</p>
                  <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">{item.titulo}</h4>
                  <p className="text-xs text-slate-400">{item.evento}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}