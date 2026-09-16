export type CaseStudy = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  year: string;
  role: string;
  repository: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageCaption?: string;
  theme: "finance" | "jobs" | "terminal";
  technologies: string[];
  overview: string[];
  highlights: string[];
  decisions: { title: string; text: string }[];
  learnings: string[];
  nextSlug: string;
  nextName: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saldo-claro",
    name: "SaldoClaro",
    kicker: "Finanças pessoais sem planilha complicada.",
    summary:
      "Aplicação full stack para acompanhar entradas, despesas, orçamentos, metas e recorrências em um único lugar.",
    year: "2026",
    role: "Projeto pessoal · Full stack",
    repository: "https://github.com/MatheusCamacho/saldo-claro",
    image: "/projects/saldo-claro.webp",
    imageAlt: "Dashboard de visão geral do SaldoClaro",
    secondaryImage: "/projects/saldo-claro-login.webp",
    secondaryImageAlt: "Tela de login do SaldoClaro",
    secondaryImageCaption: "Entrada do produto — autenticação e apresentação da proposta do SaldoClaro.",
    theme: "finance",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "Docker",
      "OpenAPI",
    ],
    overview: [
      "O SaldoClaro nasceu da ideia de tornar o controle financeiro pessoal mais direto: entender quanto entrou, quanto saiu e onde o orçamento precisa de atenção sem depender de uma planilha extensa.",
      "A aplicação concentra as principais rotinas em um único produto, com interface web servida pelo próprio backend e uma API REST protegida por autenticação JWT.",
    ],
    highlights: [
      "Cadastro, login e autenticação stateless com JWT",
      "Lançamentos com filtros e exportação em CSV",
      "Orçamentos mensais por categoria",
      "Metas com aportes, retiradas e conclusão automática",
      "Receitas e despesas recorrentes",
      "Dashboard com fluxo de caixa e distribuição por categoria",
      "Tema claro/escuro e layout responsivo",
      "Documentação da API com OpenAPI / Swagger",
    ],
    decisions: [
      {
        title: "Regras no backend",
        text: "Validações importantes — como compatibilidade entre categoria e tipo de lançamento, limites de orçamento e regras de metas — ficam na camada de negócio e não dependem da interface.",
      },
      {
        title: "Organização por domínio",
        text: "O código foi separado por áreas como transaction, budget, goal, recurring, category e auth, mantendo controller, serviço, DTOs e regras relacionadas próximos entre si.",
      },
      {
        title: "Ambiente reproduzível",
        text: "Flyway versiona as mudanças de banco, enquanto Docker Compose permite subir aplicação e PostgreSQL juntos. O projeto também possui testes automatizados e pipeline de CI.",
      },
    ],
    learnings: [
      "Projetar regras de negócio antes de pensar somente na interface.",
      "Trabalhar autenticação, persistência, migrations e API como partes de um único sistema.",
      "Organizar um backend maior sem concentrar tudo em poucos arquivos ou classes.",
    ],
    nextSlug: "jobtrack",
    nextName: "JobTrack",
  },
  {
    slug: "jobtrack",
    name: "JobTrack",
    kicker: "Menos abas abertas. Mais clareza na busca.",
    summary:
      "SPA em Vue para organizar candidaturas, acompanhar etapas de processos seletivos e visualizar o andamento da busca por oportunidades.",
    year: "2026",
    role: "Projeto pessoal · Frontend",
    repository: "https://github.com/MatheusCamacho/jobtrack-vue",
    image: "/projects/jobtrack.webp",
    imageAlt: "Dashboard de visão geral do JobTrack",
    theme: "jobs",
    technologies: [
      "Vue 3",
      "Vue Router",
      "JavaScript",
      "Vite",
      "CSS",
      "localStorage",
      "node:test",
    ],
    overview: [
      "O JobTrack foi criado para transformar uma busca de emprego espalhada entre abas, anotações e mensagens em um fluxo único e fácil de acompanhar.",
      "Ele funciona inteiramente no navegador: não exige backend ou banco externo, e mantém os dados localmente para que a aplicação continue simples de executar e demonstrar.",
    ],
    highlights: [
      "Dashboard com indicadores da busca por vagas",
      "Cadastro e edição de oportunidades",
      "Quadro por etapas com drag and drop",
      "Filtros por texto e modelo de trabalho",
      "Acompanhamento de entrevistas futuras",
      "Distribuição por status e origem",
      "Persistência automática com localStorage",
      "Exportação dos dados em JSON e tema claro/escuro",
    ],
    decisions: [
      {
        title: "Estado no navegador",
        text: "A persistência usa Web Storage API. Isso elimina configuração de servidor e mantém o projeto fácil de abrir, testar e demonstrar sem sacrificar o fluxo principal do produto.",
      },
      {
        title: "Componentização",
        text: "A estrutura separa views, componentes reutilizáveis, composables, rotas e funções puras. Isso evita que regras de cálculo e estado fiquem presas aos componentes visuais.",
      },
      {
        title: "Interface próxima de produto",
        text: "O projeto não foi tratado como uma coleção de telas isoladas: filtros, indicadores, quadro, entrevistas e dados de demonstração foram pensados como partes do mesmo fluxo de uso.",
      },
    ],
    learnings: [
      "Gerenciar estado compartilhado e persistência em uma SPA.",
      "Separar regra de cálculo de componente visual para facilitar testes.",
      "Construir responsividade e temas sem depender de uma biblioteca de componentes pronta.",
    ],
    nextSlug: "bolao-da-copa",
    nextName: "Bolão da Copa",
  },
  {
    slug: "bolao-da-copa",
    name: "Bolão da Copa",
    kicker: "Um sistema completo sem precisar de interface gráfica.",
    summary:
      "Aplicação de terminal em Python para cadastrar apostas, persistir dados em PostgreSQL e simular a divisão do prêmio de um bolão da Copa do Mundo.",
    year: "2026",
    role: "Projeto pessoal · Python / dados",
    repository: "https://github.com/MatheusCamacho/bolao-copa-python",
    image: "/projects/bolao-copa.webp",
    imageAlt: "Interface de terminal do sistema Bolão da Copa",
    theme: "terminal",
    technologies: [
      "Python 3.11+",
      "PostgreSQL",
      "psycopg2",
      "Rich",
      "Decimal",
      "unittest",
      "Docker Compose",
    ],
    overview: [
      "O objetivo aqui não era criar uma interface web, e sim organizar regras de negócio, persistência e interação de terminal em um projeto Python pequeno, mas estruturado.",
      "O sistema permite cadastrar, alterar e excluir apostas, gerar resumos por seleção e simular a seleção campeã com divisão proporcional do prêmio entre os vencedores.",
    ],
    highlights: [
      "Cadastro de apostas com valor mínimo",
      "Listagem, alteração e exclusão com validações",
      "Resumo de quantidade e valor apostado por seleção",
      "Simulação da seleção campeã",
      "Distribuição proporcional do prêmio",
      "Valores monetários tratados com Decimal",
      "Persistência em PostgreSQL",
      "Testes das regras de negócio independentes do banco",
    ],
    decisions: [
      {
        title: "Camadas separadas",
        text: "Interface, regras de negócio e acesso ao banco ficam em módulos diferentes. A aplicação mantém UI, service e repository desacoplados mesmo sendo um projeto executado no terminal.",
      },
      {
        title: "Dinheiro sem float",
        text: "Os cálculos de aposta e premiação usam Decimal para evitar erros de ponto flutuante e tratar corretamente arredondamentos em centavos.",
      },
      {
        title: "Testes sem PostgreSQL",
        text: "As regras principais podem ser testadas sem depender do banco de dados, deixando os testes mais rápidos e focados no comportamento do domínio.",
      },
    ],
    learnings: [
      "Aplicar separação de responsabilidades mesmo em um projeto pequeno de terminal.",
      "Modelar regras financeiras com precisão e arredondamento previsível.",
      "Diferenciar regra de negócio, persistência e apresentação para facilitar manutenção e testes.",
    ],
    nextSlug: "saldo-claro",
    nextName: "SaldoClaro",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
