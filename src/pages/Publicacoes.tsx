import { BookOpen, ExternalLink, FileDown, Calendar, Users } from 'lucide-react';

// Dados Fictícios de Publicações
const publicacoes = [
  {
    id: 1,
    titulo: "Lorem Ipsum Dolor Sit Amet: Uma Abordagem Preditiva Baseada em Redes Neurais",
    autores: "Dr. G. Ipsum, MSc. A. Sit, Cicrano Silva",
    veiculo: "IEEE Transactions on Fictitious Research",
    ano: 2026,
    tipo: "Revista",
    linkPdf: "#",
    linkDoi: "#"
  },
  {
    id: 2,
    titulo: "Consectetur Adipiscing Elit em Ambientes de Alta Complexidade e Baixa Visibilidade",
    autores: "Beltrano Souza, Dr. G. Ipsum",
    veiculo: "International Conference on Latin Systems (ICLS)",
    ano: 2025,
    tipo: "Conferência",
    linkPdf: "#",
    linkDoi: null // Simulando um artigo que não tem DOI disponível
  },
  {
    id: 3,
    titulo: "Otimização de Tempor Incididunt Através de Algoritmos Genéticos Híbridos",
    autores: "MSc. A. Sit, Aluna Exemplo",
    veiculo: "Journal of Modern Placeholder Science",
    ano: 2024,
    tipo: "Revista",
    linkPdf: "#",
    linkDoi: "#"
  }
];

export default function Publicacoes() {
  return (
    <div className="space-y-12 py-12">
      
      {/* Cabeçalho da Página */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-1 w-full bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950">
          Nossas <span className="text-orange-600">Publicações</span>
        </h1>
        <p className="text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
          Produção científica do nosso grupo, incluindo artigos publicados em periódicos de alto impacto e conferências internacionais.
        </p>
      </header>

      {/* Lista de Publicações */}
      <section className="space-y-6">
        {publicacoes.map((pub) => (
          <article 
            key={pub.id} 
            className="group bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-6 transition-all duration-300 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50 relative overflow-hidden"
          >
            {/* Barra lateral decorativa laranja que aparece no hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex-grow space-y-4">
              
              {/* Meta-informações (Ano e Tipo) */}
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5" />
                  {pub.ano}
                </span>
                <span className={`px-2.5 py-1 rounded-md ${
                  pub.tipo === 'Revista' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {pub.tipo}
                </span>
              </div>

              {/* Título do Artigo */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {pub.titulo}
              </h2>

              {/* Autores e Veículo */}
              <div className="space-y-2 text-sm text-slate-600">
                <p className="flex items-start sm:items-center gap-2">
                  <Users className="w-4 h-4 text-slate-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span><strong>Autores:</strong> {pub.autores}</span>
                </p>
                <p className="flex items-start sm:items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span><strong>Publicado em:</strong> <em className="text-slate-800">{pub.veiculo}</em></span>
                </p>
              </div>

            </div>

            {/* Botões de Ação (PDF / DOI) */}
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