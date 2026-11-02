export type Locale = "pt" | "en";
export type Localized = Record<Locale, string>;

export const GITHUB_USER = "wesleyara";
export const EMAIL = "wesleyara.contato@gmail.com";

export const socialLinks = {
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: "https://www.linkedin.com/in/wesley-ara/",
};

export const navLinks = [
  { id: "sobre", key: "nav.about" },
  { id: "projetos", key: "nav.projects" },
  { id: "open-source", key: "nav.openSource" },
  { id: "stack", key: "nav.stack" },
  { id: "contato", key: "nav.contact" },
];

export interface Experience {
  when: Localized;
  role: Localized;
  org: Localized;
  summary: Localized;
  current?: boolean;
}

export const experience: Experience[] = [
  {
    current: true,
    when: { pt: "dez 2025 – hoje", en: "Dec 2025 – now" },
    role: { pt: "Arquiteto de Software", en: "Software Architect" },
    org: { pt: "ONR", en: "ONR" },
    summary: {
      pt: "Padrões técnicos, review e refactor, apoio ao time de desenvolvimento.",
      en: "Technical standards, code review and refactoring, support for the dev team.",
    },
  },
  {
    when: { pt: "jan – dez 2025", en: "Jan – Dec 2025" },
    role: {
      pt: "Desenvolvedor Frontend Sênior",
      en: "Senior Frontend Developer",
    },
    org: { pt: "ONR", en: "ONR" },
    summary: {
      pt: "Componentes e bibliotecas internas usados em toda a empresa.",
      en: "Components and internal libraries used across the company.",
    },
  },
  {
    when: { pt: "set 2024 – jan 2025", en: "Sep 2024 – Jan 2025" },
    role: { pt: "Desenvolvedor Frontend Pleno", en: "Frontend Developer" },
    org: { pt: "ONR", en: "ONR" },
    summary: {
      pt: "Vue 3, Pinia e Vitest; menos requests repetidas ao backend.",
      en: "Vue 3, Pinia and Vitest; fewer redundant backend requests.",
    },
  },
  {
    when: { pt: "mar 2023 – set 2024", en: "Mar 2023 – Sep 2024" },
    role: { pt: "Desenvolvedor Full Stack Pleno", en: "Full Stack Developer" },
    org: { pt: "Apex NFT Brasil", en: "Apex NFT Brasil" },
    summary: {
      pt: "Cache no front e no back: 32% menos consultas ao banco e carregamento 40% mais rápido.",
      en: "Front and back end caching: 32% fewer database queries and 40% faster loading.",
    },
  },
  {
    when: { pt: "jan 2022 – mar 2023", en: "Jan 2022 – Mar 2023" },
    role: {
      pt: "Desenvolvedor Frontend Júnior",
      en: "Junior Frontend Developer",
    },
    org: { pt: "Apex NFT Brasil", en: "Apex NFT Brasil" },
    summary: {
      pt: "Padronização dos repositórios e código legado 30% menor.",
      en: "Standardized repositories and cut legacy code by 30%.",
    },
  },
  {
    when: { pt: "2020", en: "2020" },
    role: { pt: "Professor de Matemática", en: "Math Teacher" },
    org: { pt: "Prefeitura de Natuba, PB", en: "Natuba City Schools, PB" },
    summary: {
      pt: "Turmas do 6º ao 8º ano durante a pandemia.",
      en: "Grades 6 to 8 during the pandemic.",
    },
  },
];

export interface FeaturedProject {
  name: string;
  kind: Localized;
  description: Localized;
  stack: string[];
  repository: string;
  link?: { label: string; href: string };
  image?: { src: string; alt: Localized };
  snippet?: { file: string; html: string };
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Wttp",
    kind: { pt: "Desktop · CLI", en: "Desktop · CLI" },
    description: {
      pt: "Cliente HTTP open source para desenvolver, testar e documentar APIs. Coleções em YAML no seu disco, diffs limpos no Git, runner de CLI para CI e import de Postman, Insomnia e OpenAPI.",
      en: "Open source HTTP client for building, testing and documenting APIs. Collections are YAML files on your disk, with clean Git diffs, a CLI runner for CI and Postman, Insomnia and OpenAPI import.",
    },
    stack: ["Electron", "Vue", "TypeScript", "Vitest"],
    repository: "https://github.com/wesleyara/Wttp",
    link: { label: "docs", href: "https://wttp.vercel.app" },
    image: {
      src: "/images/projects/wttp.webp",
      alt: {
        pt: "Wttp com uma request POST enviada, resposta JSON e 2 testes passando",
        en: "Wttp with a POST request sent, a JSON response and 2 passing tests",
      },
    },
  },
  {
    name: "DbLocal",
    kind: { pt: "Web local", en: "Local web" },
    description: {
      pt: "Navegador de bancos PostgreSQL, MySQL e SQLite no espírito do Prisma Studio. Relações navegáveis, editor SQL com autocomplete, diagrama ER e edição segura em transação.",
      en: "A database browser for PostgreSQL, MySQL and SQLite in the spirit of Prisma Studio. Navigable relations, SQL editor with autocomplete, ER diagram and safe transactional edits.",
    },
    stack: ["Vue", "Node", "Monaco", "SQL"],
    repository: "https://github.com/wesleyara/DbLocal",
    image: {
      src: "/images/projects/dblocal.webp",
      alt: {
        pt: "Grade de dados do DbLocal com chips de chave estrangeira e contagem de relações",
        en: "DbLocal data grid with foreign key chips and relation counts",
      },
    },
  },
  {
    name: "DockerLocal",
    kind: { pt: "Web local", en: "Local web" },
    description: {
      pt: "Um Docker Desktop próprio, web, rodando em localhost. Containers, imagens, volumes e stacks, com logs em tempo real e builds acompanhados como tarefas.",
      en: "A home-made, web-based Docker Desktop running on localhost. Containers, images, volumes and stacks, with real-time logs and builds tracked as tasks.",
    },
    stack: ["NestJS", "Vue", "dockerode", "pnpm"],
    repository: "https://github.com/wesleyara/DockerLocal",
    image: {
      src: "/images/projects/dockerlocal.webp",
      alt: {
        pt: "DockerLocal listando containers agrupados por projeto",
        en: "DockerLocal listing containers grouped by project",
      },
    },
  },
  {
    name: "ClickLocal",
    kind: { pt: "Web local", en: "Local web" },
    description: {
      pt: "Board de tasks estilo Trello/ClickUp sem nuvem e sem conta. Drag-and-drop, subtasks, markdown, cronômetro e um servidor MCP para agentes de IA gerenciarem o backlog.",
      en: "A Trello/ClickUp-style task board with no cloud and no account. Drag and drop, subtasks, markdown, time tracking and an MCP server so AI agents can manage the backlog.",
    },
    stack: ["Nuxt", "Prisma", "SQLite", "MCP"],
    repository: "https://github.com/wesleyara/ClickLocal",
    image: {
      src: "/images/projects/clicklocal.webp",
      alt: {
        pt: "Board do ClickLocal com colunas Backlog, Em andamento, Review e Feito",
        en: "ClickLocal board with Backlog, In progress, Review and Done columns",
      },
    },
  },
  {
    name: "TrackGrowth",
    kind: { pt: "PWA", en: "PWA" },
    description: {
      pt: "App de crescimento pessoal: hábitos e TO-DOs com frequência flexível, confirmação diária, dashboards e gamificação. Funciona offline como PWA.",
      en: "A personal growth app: habits and to-dos with flexible frequency, daily check-ins, dashboards and gamification. Works offline as a PWA.",
    },
    stack: ["Vue", "Pinia", "Chart.js", "Tailwind"],
    repository: "https://github.com/wesleyara/PersonalGrowth.Frontend",
    link: {
      label: "demo",
      href: "https://personal-growth-frontend.vercel.app",
    },
    image: {
      src: "/images/projects/trackgrowth.webp",
      alt: {
        pt: "Dashboard do TrackGrowth com nível, hábitos do dia e streaks",
        en: "TrackGrowth dashboard with level, today's habits and streaks",
      },
    },
  },
  {
    name: "essentials-utils",
    kind: { pt: "Lib npm", en: "npm lib" },
    description: {
      pt: "Coleção de funções utilitárias para o ecossistema JavaScript e TypeScript, tipada e com documentação própria.",
      en: "A collection of utility functions for the JavaScript and TypeScript ecosystem, fully typed and with its own docs.",
    },
    stack: ["TypeScript", "npm"],
    repository: "https://github.com/wesleyara/essentials-utils",
    link: { label: "docs", href: "https://essentials-utils.wesleyaraujo.dev/" },
    snippet: {
      file: "terminal",
      html: `<span class="p">$</span> <span class="c">npm i essentials-utils</span>
  <span class="k">+</span> essentials-utils

<span class="k">import</span> { debounce, capitalize } <span class="k">from</span> <span class="c">"essentials-utils"</span>

capitalize(<span class="c">"pernambuco"</span>)  <span class="p">// "Pernambuco"</span>`,
    },
  },
];

export interface MoreProject {
  name: string;
  description: Localized;
  tag: string;
  href: string;
}

export const moreProjects: MoreProject[] = [
  {
    name: "echo-ui",
    tag: "Vue",
    href: "https://github.com/wesleyara/echo-ui",
    description: {
      pt: "Biblioteca de componentes para Vue",
      en: "A Vue component library",
    },
  },
  {
    name: "arch-docs",
    tag: "Docs",
    href: "https://github.com/wesleyara/arch-docs",
    description: {
      pt: "Documentação de arquitetura publicada como site",
      en: "Architecture docs published as a site",
    },
  },
  {
    name: "clip-board-extension",
    tag: "JavaScript",
    href: "https://github.com/wesleyara/clip-board-extension",
    description: {
      pt: "Extensão de navegador para gerenciar a área de transferência",
      en: "Browser extension to manage your clipboard",
    },
  },
  {
    name: "prettlint-config",
    tag: "npm",
    href: "https://github.com/wesleyara/prettlint-config",
    description: {
      pt: "Configura ESLint, Prettier e EditorConfig em um comando",
      en: "Sets up ESLint, Prettier and EditorConfig in one command",
    },
  },
  {
    name: "huskylint",
    tag: "npm",
    href: "https://github.com/wesleyara/huskylint",
    description: {
      pt: "Executável que configura husky, lint-staged e commitlint",
      en: "CLI that sets up husky, lint-staged and commitlint",
    },
  },
  {
    name: "covid-forecast",
    tag: "TypeScript",
    href: "https://github.com/wesleyara/covid-forecast",
    description: {
      pt: "Modelagem matemática para prever casos de COVID-19",
      en: "Mathematical modeling to forecast COVID-19 cases",
    },
  },
  {
    name: "Expense",
    tag: "React",
    href: "https://github.com/wesleyara/expense",
    description: {
      pt: "Gerenciador de gastos para dividir seu dinheiro",
      en: "Expense manager to split your money",
    },
  },
  {
    name: "Calculadora de PM",
    tag: "React",
    href: "https://github.com/wesleyara/calculadora-de-pm-alvo-para-acoes",
    description: {
      pt: "Quantas ações comprar para atingir o preço médio alvo",
      en: "How many shares to buy to hit a target average price",
    },
  },
  {
    name: "Need Water",
    tag: "Electron",
    href: "https://github.com/wesleyara/need-water-desktop",
    description: {
      pt: "Alarme de hidratação para desktop",
      en: "Desktop hydration reminder",
    },
  },
];

export interface StackItem {
  name: string;
  extra?: string;
}

export const stackGroups: { key: string; items: StackItem[] }[] = [
  {
    key: "stack.frontend",
    items: [
      { name: "TypeScript" },
      { name: "Vue", extra: "Nuxt · Pinia" },
      { name: "React", extra: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Electron" },
    ],
  },
  {
    key: "stack.backend",
    items: [
      { name: "Node.js" },
      { name: "NestJS", extra: "Express" },
      { name: "Go" },
      { name: "Python" },
      { name: "PostgreSQL", extra: "Prisma · SQLite" },
      { name: "Redis", extra: "RabbitMQ" },
      { name: "Node-RED" },
    ],
  },
  {
    key: "stack.infra",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Linux" },
      { name: "Git", extra: "GitHub Actions" },
    ],
  },
];

export interface RepoSummary {
  name: string;
  url: string;
  language: string | null;
  pushedAt: string;
}

/** Shown while the GitHub API loads, or when it fails / hits the rate limit. */
export const githubFallback = {
  publicRepos: 109,
  commits: 933,
  commitsYear: 2026,
  repos: [
    {
      name: "markdown-editor-poc",
      language: "TypeScript",
      pushedAt: "2026-10-23",
    },
    { name: "DockerLocal", language: "TypeScript", pushedAt: "2026-10-22" },
    { name: "Wttp", language: "TypeScript", pushedAt: "2026-10-22" },
    { name: "ClickLocal", language: "TypeScript", pushedAt: "2026-10-22" },
    { name: "DbLocal", language: "TypeScript", pushedAt: "2026-10-19" },
    {
      name: "clip-board-extension",
      language: "JavaScript",
      pushedAt: "2026-10-14",
    },
  ].map(repo => ({
    ...repo,
    url: `https://github.com/${GITHUB_USER}/${repo.name}`,
  })) as RepoSummary[],
};
