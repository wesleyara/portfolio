export const hardSkills = [
  {
    icon: "mdi:language-typescript",
    name: "TypeScript",
    description:
      "TypeScript é uma extensão do JavaScript que adiciona tipagem estática à linguagem.",
  },
  {
    icon: "mdi:react",
    name: "React",
    description:
      "React é uma biblioteca JavaScript popular para construção de interfaces de usuário.",
  },
  {
    icon: "mdi:vuejs",
    name: "Vue",
    description:
      "Vue.js é um framework JavaScript progressivo para construção de interfaces de usuário.",
  },
  {
    icon: "mdi:nodejs",
    name: "Node.js",
    description: "Node.js é um ambiente de execução JavaScript server-side.",
  },
  {
    icon: "tabler:brand-golang",
    name: "Golang",
    description:
      "Go é uma linguagem de programação compilada e concorrente desenvolvida pelo Google.",
  },
  {
    icon: "mdi:docker",
    name: "Docker",
    description:
      "Docker é uma plataforma de software que permite a criação, teste e implantação de aplicativos.",
  },
  {
    icon: "simple-icons:express",
    name: "Express",
    description:
      "Express.js é um framework minimalista e flexível para aplicações web em Node.js.",
  },
  {
    icon: "mdi:git",
    name: "Git",
    description:
      "Git é um sistema de controle de versão distribuído de código aberto.",
  },
  {
    icon: "mdi:github",
    name: "GitHub",
    description:
      "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
  },
  {
    icon: "teenyicons:linux-alt-solid",
    name: "Linux",
    description: "Linux é um núcleo de sistema operacional de código aberto.",
  },
];

export const mapProjects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Meu portfolio pessoal.",
    image: "/images/portfolio.png",
    type: "Site",
    stack: ["Vue", "TypeScript"],
    repository: "https://github.com/wesleyara/portfolio",
    preview: "https://wesleyaraujo.dev/",
  },
  {
    id: 2,
    title: "utils-react",
    description: "Pacote de utilitários para React.",
    image: "/images/utils-react.png",
    type: "Lib",
    stack: ["Node", "TypeScript"],
    repository: "https://github.com/wesleyara/utils-react",
    preview: "",
  },
  {
    id: 3,
    title: "Need Water",
    description: "Aplicativo de alarme para desktop.",
    image: "/images/need-water.png",
    type: "App",
    stack: ["Electron", "React"],
    repository: "https://github.com/wesleyara/need-water-desktop",
    preview:
      "https://github.com/wesleyara/need-water-desktop/releases/tag/v1.0.0",
  },
  {
    id: 4,
    title: "Calculadora de PM",
    description: "App para calcular preço médio alvo de ações.",
    image: "/images/calculadorapm.png",
    type: "Site",
    stack: ["React", "TypeScript"],
    repository: "https://github.com/wesleyara/image-resize",
    preview: "https://calculadora-de-pm-alvo-para-acoes.vercel.app/",
  },
  {
    id: 5,
    title: "Expense",
    description: "Aplicativo de controle de gastos.",
    image: "/images/expense.png",
    type: "Site",
    stack: ["React", "TypeScript"],
    repository: "https://github.com/wesleyara/expense",
    preview: "https://expense.wesleyaraujo.dev/",
  },
  {
    id: 6,
    title: "covid-forecast",
    description: "Modelagem matemática para previsão de casos de COVID-19.",
    image: "/images/covid-forecast.png",
    type: "Lib",
    stack: ["Node", "Typescript"],
    repository: "https://github.com/wesleyara/covid-forecast/",
    preview: "",
  },
];

export const learnMoreMap: any[] = [
  {
    label: "Saiba mais",
    color: "white",
    variant: "outline",
    size: "md",
    icon: "i-heroicons-information-circle",
    content:
      "Me chamo Wesley Gomes de Araújo, tenho 23 anos de idade. Sou pernambucano e um desenvolvedor de software apaixonado por tecnologia e inovação.",
  },
  {
    label: "Formação acadêmica",
    color: "white",
    variant: "outline",
    size: "md",
    icon: "i-heroicons-academic-cap",
    slot: "formation",
  },
  {
    label: "Experiência",
    color: "white",
    variant: "outline",
    size: "md",
    icon: "i-heroicons-arrow-trending-up",
    content:
      "Já trabalhei como professor de Matemática e atualmente eu atuo como Desenvolvedor de Software a mais de 2 anos. Dentre as minhas atribuições, destaco a criação de aplicações web, criação de APIs e gerenciamento de instâncias e alguns outros serviços dentro da AWS.",
  },
  {
    label: "Hobbies",
    color: "white",
    variant: "outline",
    size: "md",
    icon: "i-heroicons-map",
    content:
      "Meus principais hobbies são jogar video game, assistir séries e filmes, ler livros e ouvir música. Além disso, eu gosto muito de estudar e aprender coisas novas.",
  },
];

export const linkMap = [
  {
    label: "Sobre",
    href: "about",
    icon: "i-heroicons-information-circle",
  },
  {
    label: "Habilidades",
    href: "skills",
    icon: "carbon:3d-mpr-toggle",
  },
  {
    label: "Projetos",
    href: "projects",
    icon: "flowbite:chart-outline",
  },
  {
    label: "Contato",
    href: "contact",
    icon: "ri:contacts-book-3-line",
  },
];
