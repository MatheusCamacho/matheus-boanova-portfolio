export type Project = {
  name: string;
  slug: string;
  description: string;
  technologies: string[];
  year: string;
  variant: "dark" | "light" | "terminal";
  image?: string;
  imageAlt?: string;
  href?: string;
};

export const selectedProjects: Project[] = [
  {
    name: "POKÉGRID",
    slug: "pokegrid",
    description:
      "Aplicação desktop para explorar dados de Pokémon, montar e salvar times, comparar espécies e analisar fraquezas, cobertura de tipos e golpes.",
    technologies: ["Electron", "Node.js", "PokéAPI"],
    year: "2026",
    variant: "light",
    image: "/projects/pokegrid.svg",
    imageAlt: "Capa gráfica do POKÉGRID Field Research System",
    href: "https://github.com/MatheusCamacho/pokegrid",
  },
  {
    name: "SaldoClaro",
    slug: "saldo-claro",
    description:
      "Aplicação full stack para controle financeiro pessoal, com autenticação, lançamentos, categorias, metas e visualização de dados.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    year: "2026",
    variant: "dark",
    image: "/projects/saldo-claro.webp",
    imageAlt: "Dashboard de visão geral do SaldoClaro",
    href: "https://github.com/MatheusCamacho/saldo-claro",
  },
  {
    name: "JobTrack",
    slug: "jobtrack",
    description:
      "Aplicação para organizar candidaturas de emprego, acompanhar etapas de processos seletivos e visualizar informações de forma prática.",
    technologies: ["Vue 3", "Vite", "JavaScript"],
    year: "2026",
    variant: "light",
    image: "/projects/jobtrack.webp",
    imageAlt: "Dashboard de visão geral do JobTrack",
    href: "https://github.com/MatheusCamacho/jobtrack-vue",
  },
  {
    name: "Bolão da Copa",
    slug: "bolao-da-copa",
    description:
      "Sistema desenvolvido em Python para gerenciar participantes, palpites, pontuação e classificação de um bolão de futebol.",
    technologies: ["Python", "PostgreSQL", "Testes"],
    year: "2026",
    variant: "terminal",
    image: "/projects/bolao-copa.webp",
    imageAlt: "Interface de terminal do sistema Bolão da Copa",
    href: "https://github.com/MatheusCamacho/bolao-copa-python",
  },
];

export const moreProjects = [
  {
    name: "Loja de Jogos API",
    description:
      "API REST desenvolvida com Node.js e Express, com autenticação, controle de acesso, logs e outras funcionalidades de backend.",
    technologies: "Node.js / Express",
    year: "2026",
    href: "https://github.com/MatheusCamacho/loja-jogos-api",
  },
  {
    name: "Biblioteca POO",
    description:
      "Projeto em TypeScript focado em programação orientada a objetos, organização de responsabilidades e modelagem de entidades.",
    technologies: "TypeScript / POO",
    year: "2026",
    href: "https://github.com/MatheusCamacho/biblioteca-poo-typescript",
  },
];
