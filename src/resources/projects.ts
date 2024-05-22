export interface IProject {
  imageUrl: string;
  description: string;
  title: string;
  url: string;
  repositoryUrl?: string;
  playstore?: string;
  appstore?: string;
}

const projects: IProject[] = [
  {
    imageUrl: "/projetos/connectvetapp.png",
    description:
      "O ConnectVet é um aplicativo móvel desenvolvido em React Native e Typescript, com integração de Mobx, Firebase e consumo de API. Proposto por uma clínica veterinária, ele simplifica a comunicação com os usuários e auxilia no tratamento de animais de estimação, enviando lembretes de horários para administração de medicamentos.",
    title: "ConnectVet",
    url: "https://play.google.com/store/apps/details?id=com.connectvet&hl=pt_BR&gl=US",
    playstore:
      "https://play.google.com/store/apps/details?id=com.connectvet&hl=pt_BR&gl=US",
    appstore: "https://apps.apple.com/br/app/connect-vet/id1640300858",
  },
  {
    imageUrl: "/projetos/basium.png",
    description:
      "Desenvolvido com React, Next.js, Typescript e Chakra UI, este projeto é um exemplo de simplicidade eficaz. É uma loja virtual atraente que permite aos usuários adicionar itens ao carrinho e concluir as compras, enviando uma mensagem predefinida diretamente para o vendedor por meio do número de contato. Foi implementado exclusivamente com tecnologias front-end para otimizar os custos de desenvolvimento, sem abrir mão da facilidade de adicionar produtos.",
    title: "Basium",
    url: "https://basium-client.vercel.app/",
  },
  {
    imageUrl: "/projetos/meuloc.png",
    description:
      "Desenvolvido com React, Next.js, Typescript e Mobx, este projeto inclui integração de API de pagamentos e API dos Correios. Além disso, conta com recursos de análise de tráfego fornecidos pelo Google Analytics e Facebook Analytics para monitoramento.",
    title: "LOC",
    url: "https://meuloc.com/",
    repositoryUrl: "",
  },
  {
    imageUrl: "/projetos/apuamaapp.png",
    description:
      "Criado com React Native, Typescript, Mobx e também consumo de API, o aplicativo permite acompanhar o status de seus produtos judiciais de forma eficiente.",
    title: "Apuama",
    url: "https://play.google.com/store/apps/details?id=com.connectvet&hl=pt_BR&gl=US",
    playstore:
      "https://play.google.com/store/apps/details?id=com.apuama&hl=pt_BR&gl=US",
    appstore: "https://apps.apple.com/br/app/apuama/id1525253698",
  },
  {
    imageUrl: "/projetos/dashfish.png",
    description:
      "Foram utilizadas tecnologias como React, Typescript e Chakra UI, enquanto a API foi desenvolvida com Node.js e NestJS, conectando-se a um banco de dados Postgres. Ele incorpora um sistema que permite o login, logout e a criação de contas de usuário e administrador, juntamente com recursos de listagem.",
    title: "Dashfish",
    url: "https://dashfish.vercel.app/login",
    repositoryUrl: "https://github.com/atomicwz/DASHFish",
  },
  {
    imageUrl: "/projetos/loc.franchise.png",
    description:
      "Este site é uma landing page criada com as tecnologias React, Chakra UI e Next.js. Ele serve como uma página promocional e possui uma única funcionalidade técnica: um formulário para coleta de e-mail.",
    title: "LOC - Landing Page",
    url: "https://franquia.meuloc.com/",
    repositoryUrl: "",
  },
  {
    imageUrl: "/projetos/sisalgomes.png",
    description:
      "Projeto construído em React e Typescript, também utilizado o framework Chakra UI para auxiliar no desenvolvimento da interface.",
    title: "Sisal Gomes",
    url: "https://sisalgomes.vercel.app/",
    repositoryUrl: "https://github.com/atomicwz/sisalgomes",
  },
  {
    imageUrl: "/projetos/necessial.png",
    description:
      "PWA E-commerce construído em React e Typescript, consumo de api e com sistema de pagamento integrado.",
    title: "Necessial - Laíra Marketplace",
    url: "https://www.necessial.com.br/",
    repositoryUrl: "",
  },
  {
    imageUrl: "/projetos/lumiar.png",
    description:
      "Um site simples construído com HTML, CSS e JavaScript puro, que possui como única funcionalidade o envio de formulários por e-mail.",
    title: "Lumiar Internet",
    url: "https://lumiarinternet.com/",
    repositoryUrl: "",
  },
];

export { projects };
