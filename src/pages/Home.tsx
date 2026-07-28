import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Landmark } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import do i18n

import logoCNPq from '../assets/logo-parceiros/CNPq.png?url';
import logoUFPE from '../assets/logo-parceiros/UFPE.png?url';
import logoUPE from '../assets/logo-parceiros/UPE.png?url';
import logoIFPE from '../assets/logo-parceiros/IFPE.png?url';
import logoCEFET from '../assets/logo-parceiros/CEFET.png?url';
import logoNavit from '../assets/logo-parceiros/NAVIT_DIGITAL.png?url';
import logoGPADS from '../assets/logo-parceiros/GPADS.png?url';

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
  const { t } = useTranslation(); // Inicializando o hook de tradução

  return (
    <div className="space-y-24 pb-12">

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-slate-100/50 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-50/50 blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 text-orange-600" />
              {t('home.heroBadge')}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              {t('home.heroTitle1')} <br className="hidden md:block" />
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl text-justify">
              {t('home.heroDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/pesquisa"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                {t('home.btnPesquisa')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/publicacoes"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-300"
              >
                {t('home.btnPubs')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-1 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-3xl transform translate-x-3 translate-y-3 -z-10"></div>

            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-8 lg:p-10 rounded-3xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                <Landmark className="w-5 h-5 text-orange-500" />
                {t('home.parceirosTitle')}
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
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t('home.reunioesTitle')}</h2>
              <div className="w-16 h-1 bg-orange-500 mt-4"></div>
            </div>
            <p className="text-slate-600 text-base leading-relaxed text-justify">
              {t('home.reunioesDesc')}
            </p>
            <p className="text-sm text-slate-400 italic">
              {t('home.reunioesNota')}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            <a
              href="https://drive.google.com/drive/folders/1c4Wn4naHmKHiFPonoU2RWviKOv8wZDzY?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 shadow-md hover:shadow-lg transition-all duration-300 w-full lg:w-auto justify-center"
            >
              <span className="text-base">{t('home.btnReunioes')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
