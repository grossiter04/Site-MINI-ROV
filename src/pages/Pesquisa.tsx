import { Cpu, Globe, Database, BookText, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importamos o hook

export default function Pesquisa() {
  const { t } = useTranslation(); // Inicializando a tradução

  // Array dinâmico com chaves traduzíveis para os quatro temas solicitados
  const linhasInvestigacao = [
    {
      id: 1,
      titulo: t('pesquisa.linhas.localizacao.titulo'),
      abordagem: t('pesquisa.linhas.localizacao.abordagem'),
      icone: Globe
    },
    {
      id: 2,
      titulo: t('pesquisa.linhas.mapeamento.titulo'),
      abordagem: t('pesquisa.linhas.mapeamento.abordagem'),
      icone: Database
    },
    {
      id: 3,
      titulo: t('pesquisa.linhas.fusao.titulo'),
      abordagem: t('pesquisa.linhas.fusao.abordagem'),
      icone: Cpu
    },
    {
      id: 4,
      titulo: t('pesquisa.linhas.bio.titulo'),
      abordagem: t('pesquisa.linhas.bio.abordagem'),
      icone: Eye
    }
  ];

  return (
    <div className="space-y-16 py-12">
      <header className="border-b border-slate-200 pb-8">
        <div className="w-16 h-1 bg-orange-500 mb-4"></div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {t('pesquisa.title')}
        </h1>
        <p className="text-lg text-slate-600 mt-4 max-w-3xl text-justify">
          {t('pesquisa.desc')}
        </p>
      </header>

      {/* Grid estruturado em 2x2 */}
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
        <h2 className="text-2xl font-bold mb-4">
          {t('pesquisa.evidenciaTitle')}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          {t('pesquisa.evidenciaDesc')}
        </p>
        <Link to="/publicacoes" className="inline-block px-8 py-3 bg-orange-600 font-bold rounded-lg hover:bg-orange-700 transition-colors">
          {t('pesquisa.btnRepositorio')}
        </Link>
      </section>
    </div>
  );
}