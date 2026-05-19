import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Mail, Globe, Send, BookOpen, CalendarDays, Users, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contato() {
  // Estados para gerir o fluxo de submissão do formulário
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Substitua o ID final pelo ID real do seu formulário no Formspree
      const response = await fetch('https://formspree.io/f/xkoegale', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset(); // Limpa os campos após o envio com sucesso
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="space-y-16 py-12">
      
      {/* Cabeçalho */}
      <header className="border-b border-slate-200 pb-8">
        <div className="w-16 h-1 bg-orange-500 mb-4"></div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Comunicação e Ingresso</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-3xl text-justify">
          Canais institucionais para cooperação científica, intercâmbio académico e informações sobre o ingresso voluntário nas atividades do grupo.
        </p>
      </header>

      {/* Seção: Modelo Stanford (Laboratório Aberto) e Agendas */}
      <section className="bg-slate-50 border border-slate-200 rounded-lg p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200 text-slate-800 text-sm font-bold rounded uppercase tracking-wider">
              <Users className="w-4 h-4 text-orange-600" /> Laboratório de Portas Abertas
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Agendas de Pesquisa e Participação</h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              Inspirado no modelo de excelência dos principais laboratórios internacionais, o nosso grupo adota uma política de participação aberta. <strong>Não é necessário aguardar a publicação de editais formais para integrar a equipa.</strong> O ingresso voluntário é encorajado, e o primeiro passo é a participação activa como ouvinte ou colaborador nas nossas reuniões e discussões científicas.
            </p>

            {/* Cronograma de Encontros */}
            <div className="pt-4 space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                <CalendarDays className="w-5 h-5 text-orange-600" />
                Cronograma de Encontros (Abertos à Comunidade)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:border-orange-300 transition-colors">
                  <p className="font-bold text-slate-900 text-base mb-1">Reunião Geral</p>
                  <p className="text-slate-600 text-sm mb-4">Apresentação de resultados, atualizações de projetos e onboarding de novos investigadores.</p>
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100">
                    Quarta-Feira • 14h30
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2 italic">
                * As reuniões ocorrem nas instalações da CESAR com possibilidade de acompanhamento híbrido/remoto. Utilize o formulário abaixo para solicitar o link de acesso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Informações Oficiais e Formulário */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 pt-4">
        
        {/* Coluna Esquerda: Informações Institucionais e CNPq */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">Canais e Registos Oficiais</h2>

          <div className="bg-white border-2 border-orange-200 p-6 rounded-lg flex gap-5 shadow-sm hover:border-orange-400 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Diretório DGP / CNPq</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Consulte o espelho oficial do nosso grupo de pesquisa no Conselho Nacional de Desenvolvimento Científico e Tecnológico.
              </p>
              <a 
                href="http://dgp.cnpq.br/dgp/espelhogrupo/819844" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-orange-600 text-sm font-bold hover:text-orange-700 hover:underline"
              >
                Aceder ao Espelho do Grupo <Globe className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-lg flex gap-5 shadow-sm">
            <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wider">Endereço Postal</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rua Bione, 220<br />
                Recife - PE, Brasil<br />
                CEP: 50030-390 (Caixa Postal: 55620-000)
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-lg flex gap-5 shadow-sm">
            <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wider">Correio Eletrónico</h3>
              <a href="mailto:ffc@cesar.school" className="text-slate-600 text-sm hover:text-orange-600 transition-colors">
                ffc@cesar.school
              </a>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Formulário Institucional Dinâmico */}
        <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Submissão de Consultas e Ingresso</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="nome" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Investigador / Aluno</label>
                <input type="text" id="nome" name="nome" required className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:border-slate-400 bg-slate-50" placeholder="Nome completo" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Correio Eletrónico</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:border-slate-400 bg-slate-50" placeholder="exemplo@instituicao.edu" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="assunto" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Natureza do Contacto</label>
              <select id="assunto" name="assunto" className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:border-slate-400 bg-slate-50 text-slate-700">
                <option value="Interesse em Participação Voluntária (Reuniões)">Interesse em Participação Voluntária (Reuniões)</option>
                <option value="Proposta de Cooperação Científica">Proposta de Cooperação Científica</option>
                <option value="Interesse em Programas de Pós-Graduação">Interesse em Programas de Pós-Graduação</option>
                <option value="Solicitação de Dados / Repositórios">Solicitação de Dados / Repositórios</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="mensagem" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mensagem</label>
              <textarea id="mensagem" name="mensagem" required rows={4} className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:border-slate-400 bg-slate-50 resize-none" placeholder="Apresente-se e descreva o propósito do seu contacto..."></textarea>
            </div>

            {/* Banners Informativos de Feedback */}
            {status === 'SUCCESS' && (
              <div className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-sm font-medium animate-fadeIn">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Mensagem enviada com sucesso! Entraremos em contacto brevemente.</span>
              </div>
            )}

            {status === 'ERROR' && (
              <div className="flex items-center gap-2 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded text-sm font-medium animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span>Ocorreu um erro ao enviar. Por favor, tente novamente ou envie um email direto.</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'SUBMITTING'}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-orange-600 transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {status === 'SUBMITTING' ? 'A enviar...' : 'Submeter Solicitação'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}