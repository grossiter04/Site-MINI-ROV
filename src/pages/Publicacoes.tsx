import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Importamos o hook

export default function Publicacoes() {
  const { t } = useTranslation(); // Inicializando a tradução

  const publicacoes = [
    {
      id: 1,
      titulo: "Mapping and Localization in Confined Underwater Environments: A Review and Research Agenda",
      autores: "Fontelles, E. M.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Costa, V. G. A.; Brandão, D. N.",
      veiculo: t('publicacoes.veiculo'),
      ano: 2026,
      linkPdf: "#",
      linkDoi: "#",
      abstract: "Confined underwater environments such as ballast tanks, flooded tunnels, ship hulls, and underwater caves impose severe constraints on mapping and localization, including bounded geometry, turbidity, poor illumination, and strong acoustic multipath in the absence of satellite-based navigation. This paper presents a narrative review of mapping and localization methods for confined underwater spaces. Using a structured search on IEEE Xplore, complemented by snowballing and an operational definition of confinement, we identify twelve studies spanning acoustic, passive-optical, and active-optical sensing. Across these works, acoustic sensing consistently serves as the backbone for large-scale coverage under low visibility conditions. We propose a concise benchmarking and reporting agenda and highlight open research directions."
    },
    {
      id: 2,
      titulo: "Transformer Models for Underwater 3D Reconstruction: Advances, Challenges and Trends",
      autores: "Costa, V. G. A.; Matubara, L.; Melo, R. R. F.; Fontelles, E. M.; Carvalho, F. F.; Muniz, F. R. S. S.; Brandão, D. N.",
      veiculo: t('publicacoes.veiculo'),
      ano: 2026,
      linkPdf: "#",
      linkDoi: "#",
      abstract: "Underwater visual perception remains a significant challenge due to light absorption, scattering, turbidity, low texture, and non-uniform illumination. Recent advances in Transformer-based architectures have shown strong potential to overcome these limitations by capturing global dependencies and modeling complex optical degradation patterns. This systematic review, conducted according to PRISMA 2020 guidelines, examines studies published between 2019 and 2025. The findings indicate consistent improvements in robustness and accuracy across diverse underwater conditions. Hybrid models tend to achieve lower RMSE and higher structural consistency when compared with CNN-only baselines."
    },
    {
      id: 3,
      titulo: "Systematic Review on Sensor Fusion Techniques for Mobile Robots Using LiDAR and Complementary Sensors",
      autores: "Fontelles, E. M.; Costa, V. G. A.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Brandão, D. N.",
      veiculo: t('publicacoes.veiculo'),
      ano: 2026,
      linkPdf: "#",
      linkDoi: "#",
      abstract: "Reliable localization in underwater and harbor environments remains a significant challenge due to the unavailability of GPS and severe optical degradation caused by turbidity, light attenuation, and backscatter. In such conditions, no single sensing modality is sufficient, making multimodal fusion essential for robust navigation. This systematic review examines recent LiDAR-based fusion strategies published between 2020 and late 2025. The reviewed approaches are compared according to fusion architecture. Special emphasis is given to the use of blue-green (532 nm) LiDAR and its integration with sonar and cameras."
    },
    {
      id: 4,
      titulo: "Underwater Localization in Low-Texture Environments: Review, State of the Art and Perspectives",
      autores: "Equipa de Investigação CESAR / CEFET-RJ",
      veiculo: t('publicacoes.veiculo'),
      ano: 2026,
      linkPdf: "#",
      linkDoi: "#",
      abstract: "Underwater localization in low-texture environments remains a major challenge in marine robotics due to turbidity, low visibility, and scarce visual features. This article presents a hybrid systematic-narrative review of 20 recent studies that address these limitations. The approaches fall into three main categories: (1) enhanced V-SLAM methods using geometric features and Deep Learning; (2) strongly or weakly coupled VIO/VI-SLAM systems; and (3) multisensor fusion strategies integrating optical, acoustic, and active sensors. The review reveals a clear trend toward architectures that decouple localization from mapping, enabling more resilient and long-term autonomous navigation."
    }
  ];

  return (
    <div className="space-y-12 py-12">
      <header className="border-b border-slate-200 pb-8">
        <div className="w-16 h-1 bg-orange-500 mb-4"></div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {t('publicacoes.title')}
        </h1>
        <p className="text-lg text-slate-600 mt-4 max-w-3xl text-justify">
          {t('publicacoes.desc')}
        </p>
      </header>

      <section className="space-y-8">
        {publicacoes.map((pub) => (
          <article key={pub.id} className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-1 uppercase tracking-widest">{pub.veiculo}</span>
              <span className="text-xs font-mono text-slate-400">{pub.ano}</span>
            </div>
            
            <h2 className="text-xl font-bold text-slate-900 mb-4">{pub.titulo}</h2>
            <p className="text-sm text-slate-600 mb-6 font-medium">
              <strong>{t('publicacoes.labels.autores')}:</strong> {pub.autores}
            </p>

            <div className="bg-slate-50 border-l-4 border-slate-300 p-6 mb-8">
              <div className="flex items-center gap-2 mb-3 text-slate-700 font-bold uppercase text-xs tracking-wider">
                <FileText className="w-4 h-4" />
                {t('publicacoes.labels.abstract')}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                {pub.abstract}
              </p>
            </div>

            <div className="flex gap-6">
              <a href={pub.linkPdf} className="text-sm font-bold text-slate-900 border-b-2 border-orange-500 hover:text-orange-600 transition-colors">
                {t('publicacoes.labels.btnPdf')}
              </a>
              <a href={pub.linkDoi} className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors italic">
                {t('publicacoes.labels.btnDoi')}
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}