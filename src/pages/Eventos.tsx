import { Calendar, MapPin, Image as ImageIcon, FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Importamos o hook de tradução

// Importação automatizada das imagens via Vite (aponta para src/assets/foto-cross)
const imagensImportadas = import.meta.glob('../assets/foto-cross/*.{png,jpg,jpeg}', { eager: true, import: 'default' });
const fotosCros2026 = Object.values(imagensImportadas) as string[];

// Duplica a lista para garantir o efeito de carrossel em loop infinito
const fotosCarrossel = [...fotosCros2026, ...fotosCros2026, ...fotosCros2026, ...fotosCros2026];

const trabalhosApresentados = [
  {
    id: 1,
    titulo: "Mapping and Localization in Confined Underwater Environments: A Review and Research Agenda",
    autores: "Fontelles, E. M.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Costa, V. G. A.; Brandão, D. N.",
    abstract: "Confined underwater environments such as ballast tanks, flooded tunnels, ship hulls, and underwater caves impose severe constraints on mapping and localization, including bounded geometry, turbidity, poor illumination, and strong acoustic multipath in the absence of satellite-based navigation. This paper presents a narrative review of mapping and localization methods for confined underwater spaces. Using a structured search on IEEE Xplore, complemented by snowballing and an operational definition of confinement, we identify twelve studies spanning acoustic, passive-optical, and active-optical sensing. Across these works, acoustic sensing consistently serves as the backbone for large-scale coverage under low visibility conditions. We propose a concise benchmarking and reporting agenda and highlight open research directions."
  },
  {
    id: 2,
    titulo: "Transformer Models for Underwater 3D Reconstruction: Advances, Challenges and Trends",
    autores: "Costa, V. G. A.; Matubara, L.; Melo, R. R. F.; Fontelles, E. M.; Carvalho, F. F.; Muniz, F. R. S. S.; Brandão, D. N.",
    abstract: "Underwater visual perception remains a significant challenge due to light absorption, scattering, turbidity, low texture, and non-uniform illumination. Recent advances in Transformer-based architectures have shown strong potential to overcome these limitations by capturing global dependencies and modeling complex optical degradation patterns. This systematic review, conducted according to PRISMA 2020 guidelines, examines studies published between 2019 and 2025. The findings indicate consistent improvements in robustness and accuracy across diverse underwater conditions. Hybrid models tend to achieve lower RMSE and higher structural consistency when compared with CNN-only baselines."
  },
  {
    id: 3,
    titulo: "Systematic Review on Sensor Fusion Techniques for Mobile Robots Using LiDAR and Complementary Sensors",
    autores: "Fontelles, E. M.; Costa, V. G. A.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Brandão, D. N.",
    abstract: "Reliable localization in underwater and harbor environments remains a significant challenge due to the unavailability of GPS and severe optical degradation caused by turbidity, light attenuation, and backscatter. In such conditions, no single sensing modality is sufficient, making multimodal fusion essential for robust navigation. This systematic review examines recent LiDAR-based fusion strategies published between 2020 and late 2025. The reviewed approaches are compared according to fusion architecture. Special emphasis is given to the use of blue-green (532 nm) LiDAR and its integration with sonar and cameras."
  },
  {
    id: 4,
    titulo: "Underwater Localization in Low-Texture Environments: Review, State of the Art and Perspectives",
    autores: "Equipa de Investigação CESAR / CEFET-RJ",
    abstract: "Underwater localization in low-texture environments remains a major challenge in marine robotics due to turbidity, low visibility, and scarce visual features. This article presents a hybrid systematic-narrative review of 20 recent studies that address these limitations. The approaches fall into three main categories: (1) enhanced V-SLAM methods using geometric features and Deep Learning; (2) strongly or weakly coupled VIO/VI-SLAM systems; and (3) multisensor fusion strategies integrating optical, acoustic, and active sensors. The review reveals a clear trend toward architectures that decouple localization from mapping, enabling more resilient and long-term autonomous navigation."
  }
];

export default function Eventos() {
  const { t } = useTranslation(); // Inicializando a tradução

  return (
    <div className="space-y-16 py-12">
      <header className="border-b border-slate-200 pb-8">
        <div className="w-16 h-1 bg-orange-500 mb-4"></div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {t('eventos.title')}
        </h1>
        <p className="text-lg text-slate-600 mt-4 max-w-3xl text-justify">
          {t('eventos.desc')}
        </p>
      </header>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-200 text-slate-700 text-sm font-bold rounded">
              {t('eventos.badgeDestaque')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              CROS 2026
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              {t('eventos.destaqueDesc')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-700 text-sm font-medium bg-white px-4 py-2 rounded border border-slate-200">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>2026</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-sm font-medium bg-white px-4 py-2 rounded border border-slate-200">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>João Pessoa, PB</span>
              </div>
              <a 
                href="https://www.sbrobotica.org/cros2026/program" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-sm font-bold bg-slate-900 hover:bg-orange-600 px-6 py-2 rounded transition-colors"
              >
                {t('eventos.btnProgramacao')} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Galeria em formato Carrossel Infinito */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-orange-500" />
            {t('eventos.registosTitle')}
          </h3>
          
          <div className="relative flex overflow-hidden group pb-4">
            <div className="animate-scroll-left pause-on-hover flex gap-6 px-3">
              {fotosCarrossel.map((caminhoDaFoto, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80 md:w-[28rem] aspect-[4/3] rounded overflow-hidden border border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all"
                >
                  <img 
                    src={caminhoDaFoto} 
                    alt={t('eventos.registosTitle')} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
          <span className="w-6 h-1 bg-orange-500"></span>
          {t('eventos.submissoesTitle')}
        </h2>

        <div className="space-y-6">
          {trabalhosApresentados.map((trabalho) => (
            <div key={trabalho.id} className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                {trabalho.titulo}
              </h3>
              <p className="text-sm text-slate-500 mb-6 italic">
                {trabalho.autores}
              </p>
              
              <div className="bg-slate-50 border-l-4 border-slate-300 p-6">
                <div className="flex items-center gap-2 mb-3 text-slate-700 font-bold uppercase text-xs tracking-wider">
                  <FileText className="w-4 h-4" />
                  Abstract
                </div>
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  {trabalho.abstract}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}