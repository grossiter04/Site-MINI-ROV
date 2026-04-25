import { BookOpen, ExternalLink, FileDown, Calendar, Users } from 'lucide-react';

const publicacoes = [
  {
    id: 1,
    titulo: "Mapping and Localization in Confined Underwater Environments: A Review and Research Agenda",
    autores: "Fontelles, E. M.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Costa, V. G. A.; Brandão, D. N.",
    veiculo: "IEEE",
    ano: 2026,
    tipo: "Artigo",
    linkPdf: "#", // Substitua pelo link real do PDF depois
    linkDoi: "#"
  },
  {
    id: 2,
    titulo: "Transformer Models for Underwater 3D Reconstruction: Advances, Challenges and Trends",
    autores: "Costa, V. G. A.; Matubara, L.; Melo, R. R. F.; Fontelles, E. M.; Carvalho, F. F.; Muniz, F. R. S. S.; Brandão, D. N.",
    veiculo: "IEEE",
    ano: 2026,
    tipo: "Artigo",
    linkPdf: "#",
    linkDoi: "#"
  },
  {
    id: 3,
    titulo: "Systematic Review on Sensor Fusion Techniques for Mobile Robots Using LiDAR and Complementary Sensors",
    autores: "Fontelles, E. M.; Costa, V. G. A.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Brandão, D. N.",
    veiculo: "IEEE",
    ano: 2026,
    tipo: "Artigo",
    linkPdf: "#",
    linkDoi: "#"
  },
  {
    id: 4,
    titulo: "Underwater Localization in Low-Texture Environments: Review, State of the Art and Perspectives",
    autores: "Equipe de Pesquisa CESAR / CEFET-RJ", // Como o PDF 4 não listou os autores na primeira página, deixei geral. Você pode ajustar!
    veiculo: "IEEE",
    ano: 2026,
    tipo: "Artigo",
    linkPdf: "#",
    linkDoi: "#"
  }
];

export default function Publicacoes() {
  return (
    <div className="space-y-12 py-12">
      <header className="border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-1 w-full bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950">
          Nossas <span className="text-orange-600">Publicações</span>
        </h1>
        <p className="text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
          Produção científica do nosso grupo, com foco em percepção, SLAM e fusão de sensores para robótica subaquática e ambientes confinados.
        </p>
      </header>

      <section className="space-y-6">
        {publicacoes.map((pub) => (
          <article 
            key={pub.id} 
            className="group bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-6 transition-all duration-300 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex-grow space-y-4">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5" />
                  {pub.ano}
                </span>
                <span className={`px-2.5 py-1 rounded-md ${
                  pub.tipo.includes('Revisão') ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {pub.tipo}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {pub.titulo}
              </h2>

              <div className="space-y-2 text-sm text-slate-600">
                <p className="flex items-start sm:items-center gap-2">
                  <Users className="w-4 h-4 text-slate-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span><strong>Autores:</strong> {pub.autores}</span>
                </p>
                <p className="flex items-start sm:items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span><strong>Veículo:</strong> <em className="text-slate-800">{pub.veiculo}</em></span>
                </p>
              </div>
            </div>

            <div className="flex md:flex-col gap-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6 justify-center min-w-[140px]">
              {pub.linkPdf && (
                <a 
                  href={pub.linkPdf}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
                >
                  <FileDown className="w-4 h-4" />
                  PDF
                </a>
              )}
              {pub.linkDoi && (
                <a 
                  href={pub.linkDoi}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 hover:text-orange-600 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  DOI
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}