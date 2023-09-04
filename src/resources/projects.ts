export interface IProject {
  imageUrl: string;
  description: string;
  title: string;
}

const projects: IProject[] = [
  {
    imageUrl: "/projetos/meuloc.png",
    description: "E-commerce feito com React, Typescript, Next JS.",
    title: "LOC",
  },
  {
    imageUrl: "/projetos/dashfish.png",
    description:
      "Foram utilizadas tecnologias como React, Typescript e Chakra UI, enquanto a API foi desenvolvida com Node.js e NestJS, conectando-se a um banco de dados Postgres. Ele incorpora um sistema que permite o login, logout e a criação de contas de usuário e administrador, juntamente com recursos de listagem.",
    title: "Dashfish",
  },
  {
    imageUrl: "/projetos/sisalgomes.png",
    description:
      "Projeto construído em React e Typescript, também utilizado o framework Chakra UI para auxiliar no desenvolvimento da interface.",
    title: "Sisal Gomes",
  },
  {
    imageUrl: "/projetos/lumiar.png",
    description: "Projeto simples feito o mais básico HTML, CSS e JS.",
    title: "Lumiar Internet",
  },
];

export { projects };
