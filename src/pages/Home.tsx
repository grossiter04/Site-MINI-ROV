import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Radar, Cpu, ChevronRight, BookOpen, Landmark } from 'lucide-react';

import logoCNPq from '../assets/logo-parceiros/CNPq.png';
import logoUFPE from '../assets/logo-parceiros/UFPE.png';
import logoUPE from '../assets/logo-parceiros/UPE.png';
import logoIFPE from '../assets/logo-parceiros/IFPE.png';
import logoCEFET from '../assets/logo-parceiros/CEFET.png';
import logoNavit from '../assets/logo-parceiros/NAVIT_DIGITAL.png';
import logoGPADS from '../assets/logo-parceiros/GPADS.png';

const comunicacoesCientificas = [
  { id: 1, titulo: "CROS 2026", ano: "2026", local: "João Pessoa, PB" }
];

const seminarios = [
  { id: 1, titulo: "Seminário de Pesquisa: Percepção Visual Subaquática", evento: "CESAR BEAT", palestrante: "Fernando Carvalho" },
];

const animarCientificos = comunicacoesCientificas.length > 3;
const animarSeminarios = seminarios.length > 3;

const renderCientificos = animarCientificos 
  ? [...comunicacoesCientificas, ...comunicacoesCientificas, ...comunicacoesCientificas] 
  : comunicacoesCientificas;

const renderSeminarios = animarSeminarios 
  ? [...seminarios, ...seminarios, ...seminarios] 
  : seminarios;

const parceiros = [
  { nome: "CNPq", logo: logoCNPq, url : "http://dgp.cnpq.br/dgp/espelhogrupo/819844" },
  { nome: "UFPE", logo: logoUFPE },
  { nome: "UPE", logo: logoUPE },
  { nome: "IFPE", logo: logoIFPE },
  { nome: "CEFET/RJ", logo: logoCEFET },
  { nome: "NAVIT DIGITAL", logo: logoNavit },
  { nome: "GPADS", logo: logoGPADS, url : "http://dgp.cnpq.br/dgp/espelhogrupo/27629" },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-12">
      
      {/* 1. Hero Section com Grid para os Parceiros */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-slate-100/50 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-50/50 blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna da Esquerda: Textos (Ocupa 7 colunas) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 text-orange-600" />
              Grupo de Pesquisa Científica
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Laboratório de Robótica e <br className="hidden md:block" />
              Sistemas Autónomos Subaquáticos
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl text-justify">
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

          {/* Coluna da Direita: Painel de Parceiros (Ocupa 5 colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-1 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-3xl transform translate-x-3 translate-y-3 -z-10"></div>
            
            {/* Quadro Aumentado e Mais Imponente */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-8 lg:p-10 rounded-3xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                <Landmark className="w-5 h-5 text-orange-500" />
                Parcerias e Apoio Institucional
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {parceiros.map((parceiro, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-28"
                  >
                    <a href={parceiro.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                    <img 
                      src={parceiro.logo} 
                      alt={`Logo ${parceiro.nome}`} 
                      className="max-h-14 max-w-full object-contain group-hover:scale-110 transition-all duration-500"
                    />
                    </a>
                    <span className="hidden font-bold text-slate-400 text-sm text-center uppercase tracking-wide">
                      {parceiro.nome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Reuniões do Grupo de Pesquisa */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Reuniões Semanais</h2>
              <div className="w-16 h-1 bg-orange-500 mt-4"></div>
            </div>
            <p className="text-slate-600 text-base leading-relaxed text-justify">
              O nosso corpo de investigadores reúne-se semanalmente com o objetivo de discutir o progresso dos projetos em andamento, realizar sessões de <i>Journal Club</i> para debater artigos recentes da literatura e coordenar o desenvolvimento dos sistemas robóticos subaquáticos. Essas interações promovem a colaboração contínua e o alinhamento científico da equipa.
            </p>
            <p className="text-sm text-slate-400 italic">
              * Atas, apresentações e cronogramas internos de acompanhamento são centralizados de forma transparente no nosso repositório em nuvem.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            <a 
              href="https://drive.google.com/drive/folders/1T8B74wf_bj_cHJDDAIDiXBdRmjybGtaZ?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 shadow-md hover:shadow-lg transition-all duration-300 w-full lg:w-auto justify-center"
            >
              <span className="text-base">Acompanhar Reuniões</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. Comunicações Científicas */}
      <section className="pt-16 pb-12 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Comunicações em Congressos e Seminários
          </h2>
          <p className="text-sm text-slate-600">
            Apresentações de trabalhos submetidos a revisão por pares e atividades acadêmicas do grupo.
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