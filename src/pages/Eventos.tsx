import { Calendar, MapPin, FileText, ExternalLink } from 'lucide-react';

const imagensImportadas = import.meta.glob('../assets/foto-cross/*.{png,jpg,jpeg}', { eager: true, import: 'default' });
const fotosCros2026 = Object.values(imagensImportadas) as string[];

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
    autores: "Equipe CESAR / CEFET-RJ",
    abstract: "Underwater localization in low-texture environments remains a major challenge in marine robotics due to turbidity, low visibility, and scarce visual features. This article presents a hybrid systematic-narrative review of 20 recent studies that address these limitations. The approaches fall into three main categories: (1) enhanced V-SLAM methods using geometric features and Deep Learning; (2) strongly or weakly coupled VIO/VI-SLAM systems; and (3) multisensor fusion strategies integrating optical, acoustic, and active sensors. The review reveals a clear trend toward architectures that decouple localization from mapping, enabling more resilient and long-term autonomous navigation."
  }
];

export default function Eventos() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Cabeçalho */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-1 w-full bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950">
          Nossos <span className="text-orange-600">Eventos</span>
        </h1>
        <p className="text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
          Acompanhe os congressos, feiras e simpósios em que nosso grupo de pesquisa marca presença, compartilhando avanços em robótica e percepção.
        </p>
      </header>

      {/* Destaque: CROS 2026 */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-full">
              Em Destaque
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              CROS 2026
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O grupo de pesquisa da CESAR está presente no evento de robótica e sistemas autônomos, apresentando quatro artigos científicos focados em SLAM, fusão de sensores LiDAR e arquiteturas Transformer para ambientes subaquáticos.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-700 font-medium bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <Calendar className="w-5 h-5 text-orange-500" />
                <span>2026</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>João Pessoa, PB</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Brasil</span>
              </div>
              <a 
                href="https://www.sbrobotica.org/cros2026/program" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-xl shadow-md transition-colors"
              >
                Ver Programação <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Galeria de Fotos do Evento em Loop */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          {/* Carrossel Infinito Reciclando o CSS da Home */}
          <div className="relative flex overflow-hidden group pb-4">
            <div className="animate-scroll-left pause-on-hover flex gap-6 px-3">
              {fotosCarrossel.map((caminhoDaFoto, index) => (
                <div 
                  key={index} 
                  // w-[28rem] deixa a foto bem larga, cabendo umas 2.5 fotos na tela do PC
                  className="flex-shrink-0 w-80 md:w-[28rem] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-400 hover:shadow-xl transition-all"
                >
                  <img 
                    src={caminhoDaFoto} 
                    alt={`Registro do CROS 2026`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artigos Apresentados (Abstracts) */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
          <span className="text-orange-500">//</span>
          Artigos Apresentados no CROS 2026
        </h2>

        <div className="space-y-6">
          {trabalhosApresentados.map((trabalho) => (
            <div key={trabalho.id} className="bg-white border border-slate-200 p-6 lg:p-8 rounded-2xl hover:border-orange-300 transition-colors shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                {trabalho.titulo}
              </h3>
              <p className="text-sm text-orange-600 font-semibold mb-6">
                {trabalho.autores}
              </p>
              
              <div className="bg-slate-50 border-l-4 border-slate-300 p-4 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold">
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