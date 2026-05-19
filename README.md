# Documentação Técnica: Portal Institucional CREATE@C.E.S.A.R

Esta documentação serve como guia de engenharia e arquitetura de software para o portal do grupo de pesquisa em Robótica e Sistemas Autónomos Subaquáticos. Ela detalha as decisões de design, padrões de código e procedimentos operacionais necessários para a evolução contínua da plataforma.

---

## 1. Stack Tecnológica & Dependências

O projeto foi concebido seguindo os padrões modernos de desenvolvimento web focados em performance, tipagem estática rigorosa e estilização utilitária:

* **Core:** React 19.2 (Functional Components e Hooks).
* **Build Tool & Dev Server:** Vite 8.0 (Configurado para ESM Nativo).
* **Linguagem:** TypeScript 6.0 (Compilação estática rigorosa e verificação de tipos em tempo de build).
* **Estilização:** Tailwind CSS v4.2 (Engine baseada em variáveis CSS nativas e utilitários de alta performance).
* **Roteamento:** React Router Dom v7.14 (Gerenciamento de rotas em Single Page Application).
* **Internacionalização (i18n):** `i18next` e `react-i18next` com detetor automático de idioma do browser.
* **Iconografia:** `lucide-react` (Ícones vetoriais leves baseados em SVG).

---

## 2. Arquitetura de Pastas e Ficheiros

A estrutura de diretórios foi modularizada para isolar responsabilidades de dados, componentes globais reutilizáveis e visualizações de páginas:

```text
src/
├── assets/             # Recursos estáticos (Logos institucionais e fotos da equipa)
│   └── foto-cross/     # Diretório de registos visuais consumido via agrupamento dinâmico
├── components/         # Componentes transversais da aplicação
│   ├── Navbar.tsx      # Barra de navegação sticky com lógica de alternância de idioma
│   ├── Footer.tsx      # Rodapé institucional com links de acesso rápido e contactos
│   └── ScrollToTop.tsx # Componente utilitário de reset da barra de rolagem inter-rotas
├── locales/            # Módulos isolados de dicionários de internacionalização
│   ├── pt.ts           # Definições de strings em Língua Portuguesa
│   └── en.ts           # Definições de strings em Língua Inglesa
├── pages/              # Componentes de visualização (Views principais mapeadas por rotas)
│   ├── Home.tsx        # Hero Section, Parceiros institucionais e feed de reuniões do Drive
│   ├── Pesquisa.tsx    # Exibição estruturada em Grid 2x2 das 4 linhas de investigação
│   ├── Eventos.tsx     # Carrossel infinito de fotos e listagem de submissões (Abstracts)
│   ├── Pessoas.tsx     # Diretório académico estruturado da coordenação, investigadores e alunos
│   ├── Publicacoes.tsx # Repositório bibliográfico com abstracts expandidos e referências DOI
│   └── Contato.tsx     # Formulário de ingresso e contacto integrado assincronamente via fetch
├── App.tsx             # Ponto de entrada da UI, envelopando o Router, Navbar, Footer e rotas
├── i18n.ts             # Inicialização e configuração do motor do i18next
└── main.tsx            # Bootstrap da aplicação injetando o StrictMode e montando o DOM virtual
```

---

## 3. Regras Críticas do Compilador (`tsconfig.json`)

O projeto está configurado com regras estritas de compilação. Se o código violar uma destas duas regras, a build de produção na Vercel irá falhar (`Exit Code 2`):

* **`verbatimModuleSyntax: true`**
    O TypeScript obriga à separação explícita de imports que são apenas tipos. Se importar um tipo/interface junto com um objeto/componente na mesma linha, a build falha.
    * *Incorreto:* `import { useState, FormEvent } from 'react';`
    * *Correto:* 
      `import { useState } from 'react';`
      `import type { FormEvent } from 'react';`
* **`noUnusedLocals: true`**
    Variáveis ou imports declarados e não utilizados barram a compilação. Limpe obrigatoriamente os imports de ícones (`lucide-react`) ou imagens obsoletas no topo do ficheiro.

---

## 4. Pipeline de Internacionalização (i18n)

O sistema de tradução é reativo e assíncrono, gerido pelo `i18next`. O estado global de idioma é injetado via ContextProvider implicitamente.

### Fluxo de Injeção de Dados:
```text
[src/locales/pt.ts & en.ts] (Dicionários JSON)
           │
           ▼
     [src/i18n.ts] (Inicialização do Core + LanguageDetector)
           │
           ▼
     [src/main.tsx] (Injetado via import global)
           │
           ▼
[Componentes / Páginas] (Consumo via hook useTranslation)
```

### Regra de Implementação:
Para tabelas, arrays de dados ou grids, os schemas e arrays **devem ser declarados no escopo interno (dentro do componente)**, logo após a chamada do hook `const { t } = useTranslation();`. Se declarados fora do escopo da função, eles perdem o ciclo de reatividade do React e não alternam o idioma.

---

## 5. Fluxos Assíncronos e Formulários

A página de `Contato.tsx` utiliza uma abordagem assíncrona baseada em AJAX/Fetch em vez do redirecionamento síncrono por formulário HTML padrão.

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Bloqueia o refresh da página
  setStatus('SUBMITTING'); // Ativa o estado de loading

  const form = e.currentTarget;
  const formData = new FormData(form); 

  try {
    const response = await fetch('[https://formspree.io/f/SEU_ID](https://formspree.io/f/SEU_ID)', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }, 
    });

    if (response.ok) {
      setStatus('SUCCESS'); 
      form.reset();         
    } else {
      setStatus('ERROR');
    }
  } catch {
    setStatus('ERROR'); 
  }
};
```

---

## 6. Gestão de Janela e Efeitos de UI

### Reset de Viewport (`ScrollToTop.tsx`)
Como o `react-router-dom` renderiza componentes dinamicamente dentro do mesmo nó do DOM, o navegador preserva a posição de scroll ao trocar de página. O componente `ScrollToTop` interceta a mudança global de rota e força a janela para as coordenadas zero (topo):

```typescript
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Zera o scroll vertical e horizontal instantaneamente
  }, [pathname]); // Disparado a cada alteração na URL

  return null;
}
```

### Carrosséis Infinitos com CSS (`Eventos.tsx` e `Home.tsx`)
Para evitar bibliotecas pesadas de terceiros, o efeito de loop contínuo é feito multiplicando os elementos no DOM e transladando-os via CSS inline e Tailwind. A classe `pause-on-hover` congela o fluxo sob interações do utilizador.

---

## 7. Scripts do Ciclo de Vida do Projeto

Geridos a partir do `package.json`, estes são os comandos operacionais padrão:

* `npm run dev`: Inicializa o servidor de desenvolvimento local do Vite com Hot Module Replacement (HMR).
* `npm run build`: Executa sequencialmente o compilador do TypeScript em modo de verificação de projeto de referência e dispara a otimização de empacotamento do Vite.
* `npm run lint`: Executa a verificação estática de formatação e regras de boas práticas com o ESLint.