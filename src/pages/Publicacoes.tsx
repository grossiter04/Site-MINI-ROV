const publicacoes = [
  {
    id: 1,
    titulo: "Mapping and Localization in Confined Underwater Environments: A Review and Research Agenda",
    autores: "Fontelles, E. M.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Costa, V. G. A.; Brandão, D. N.",
    veiculo: "Anais de Conferência (IEEE)",
    ano: 2026,
    linkPdf: "#",
    linkDoi: "#"
  },
  {
    id: 2,
    titulo: "Transformer Models for Underwater 3D Reconstruction: Advances, Challenges and Trends",
    autores: "Costa, V. G. A.; Matubara, L.; Melo, R. R. F.; Fontelles, E. M.; Carvalho, F. F.; Muniz, F. R. S. S.; Brandão, D. N.",
    veiculo: "Anais de Conferência (IEEE)",
    ano: 2026,
    linkPdf: "#",
    linkDoi: "#"
  },
  {
    id: 3,
    titulo: "Systematic Review on Sensor Fusion Techniques for Mobile Robots Using LiDAR and Complementary Sensors",
    autores: "Fontelles, E. M.; Costa, V. G. A.; Muniz, F. R. S. S.; Melo, R. R. F.; Matubara, L.; Carvalho, F. F.; Brandão, D. N.",
    veiculo: "Anais de Conferência (IEEE)",
    ano: 2026,
    linkPdf: "#",
    linkDoi: "#"
  },
  {
    id: 4,
    titulo: "Underwater Localization in Low-Texture Environments: Review, State of the Art and Perspectives",
    autores: "Equipa de Investigação CESAR / CEFET-RJ",
    veiculo: "Anais de Conferência (IEEE)",
    ano: 2026,
    linkPdf: "#",
    linkDoi: "#"
  }
];

export default function Publicacoes() {
  return (
    <div className="space-y-12 py-12">
      <header className="border-b border-slate-200 pb-8">
        <div className="w-16 h-1 bg-orange-500 mb-4"></div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Produção Científica e Bibliográfica</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-3xl text-justify">
          Listagem cronológica de publicações produzidas pelo grupo, submetidas e aprovadas em fóruns científicos com revisão por pares.
        </p>
      </header>

      <section className="space-y-6">
        {publicacoes.map((pub) => (
          <article key={pub.id} className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-1 uppercase tracking-widest">{pub.veiculo}</span>
              <span className="text-xs font-mono text-slate-400">{pub.ano}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{pub.titulo}</h2>
            <p className="text-sm text-slate-600 mb-6 font-medium"><strong>Autores:</strong> {pub.autores}</p>
            <div className="flex gap-6">
              <a href={pub.linkPdf} className="text-sm font-bold text-slate-900 border-b-2 border-orange-500 hover:text-orange-600 transition-colors">Aceder ao Documento (PDF)</a>
              <a href={pub.linkDoi} className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors italic">Referência DOI</a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}