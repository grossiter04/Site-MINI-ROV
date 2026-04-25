import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

export default function Contato() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Cabeçalho da Página */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-1 w-full bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950">
          Fale <span className="text-orange-600">Conosco</span>
        </h1>
        <p className="text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
          Tem interesse em nossas pesquisas, quer propor uma parceria ou ingressar no laboratório? Entre em contato pelos canais abaixo.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        
        {/* Coluna da Esquerda: Informações de Contato (Cards) */}
        <div className="space-y-6">
          
          {/* Card de Endereço */}
          <div className="group bg-white border border-slate-200 p-6 rounded-2xl flex gap-5 transition-all duration-300 hover:border-orange-300 hover:shadow-md">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Localização</h3>
              <p className="text-slate-600 leading-relaxed">
                Rua Bione, 220<br />
                Recife - PE<br />
                CEP: 50030-390 (Caixa Postal: 55620-000)
              </p>
            </div>
          </div>

          {/* Card de Telefone */}
          <div className="group bg-white border border-slate-200 p-6 rounded-2xl flex gap-5 transition-all duration-300 hover:border-orange-300 hover:shadow-md">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Telefone</h3>
              <p className="text-slate-600 leading-relaxed">
                (81) 99997-1110
              </p>
            </div>
          </div>

          {/* Card de Email */}
          <div className="group bg-white border border-slate-200 p-6 rounded-2xl flex gap-5 transition-all duration-300 hover:border-orange-300 hover:shadow-md">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">E-mail da Coordenação</h3>
              <a href="mailto:ffc@cesar.org.br" className="text-slate-600 hover:text-orange-600 transition-colors">
                ffc@cesar.org.br
              </a>
            </div>
          </div>

          {/* Card de Website */}
          <div className="group bg-white border border-slate-200 p-6 rounded-2xl flex gap-5 transition-all duration-300 hover:border-orange-300 hover:shadow-md">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Portal Institucional</h3>
              <a href="https://www.cesar.org.br/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-orange-600 transition-colors">
                www.cesar.org.br
              </a>
            </div>
          </div>

        </div>

        {/* Coluna da Direita: Formulário de Mensagem Direta */}
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl h-fit">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="nome" className="text-sm font-semibold text-slate-700">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="assunto" className="text-sm font-semibold text-slate-700">Assunto</label>
              <select 
                id="assunto" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white text-slate-600"
              >
                <option>Interesse em Pesquisa / Mestrado</option>
                <option>Parceria Industrial</option>
                <option>Imprensa</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="mensagem" className="text-sm font-semibold text-slate-700">Sua Mensagem</label>
              <textarea 
                id="mensagem" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white resize-none"
                placeholder="Como podemos colaborar?"
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}