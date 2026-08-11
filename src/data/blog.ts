export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  coverPlaceholder: string;
  cover: string | null;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "sinais-de-que-seu-pet-precisa-de-uma-consulta",
    title: "5 sinais de que seu pet precisa de uma consulta",
    excerpt: "Alguns sinais parecem pequenos, mas merecem atenção. Separei os que mais vejo no dia a dia da clínica.",
    date: "2026-06-10",
    category: "Cuidados",
    readTime: "4 min",
    coverPlaceholder: "CAPA — SINAIS DE ALERTA",
    cover: null,
    content: [
      "Um dos pedidos que mais recebo dos tutores é: como saber se é hora de marcar uma consulta? Não existe uma resposta única, mas alguns sinais merecem atenção especial.",
      "Mudança de apetite — comer muito menos (ou muito mais) do que o normal, por mais de um dia, é um sinal que eu levo a sério.",
      "Queda de energia — um pet mais quieto, evitando brincar ou subir no sofá, pode estar sentindo dor ou desconforto.",
      "Dificuldade para urinar ou evacuar — isso pode indicar desde um problema simples até uma urgência. Na dúvida, não espere.",
      "Feridas ou coceira que não melhoram — pele irritada por mais de alguns dias costuma precisar de avaliação.",
      "Mudança de comportamento — agressividade repentina, esconder-se mais que o normal, ou desorientação também entram na lista.",
      "Nenhum desses sinais, isolado, é motivo de pânico — mas também não são para ignorar. Se bater a dúvida, o mais seguro é marcar uma consulta e conversar comigo sobre o que você está observando.",
    ],
  },
  {
    slug: "vacinacao-o-que-todo-tutor-precisa-saber",
    title: "Vacinação: o que todo tutor precisa saber",
    excerpt: "A vacinação é uma das formas mais simples de prevenir doenças sérias. Aqui vai o que costumo explicar em consulta.",
    date: "2026-05-22",
    category: "Prevenção",
    readTime: "3 min",
    coverPlaceholder: "CAPA — VACINAÇÃO",
    cover: null,
    content: [
      "Vacina é prevenção — e prevenção é sempre mais simples (e mais barata, e menos sofrida) do que tratamento.",
      "Cada pet tem um calendário próprio, que depende da idade, do histórico de saúde e da rotina dele. Por isso eu não recomendo seguir um calendário genérico da internet: o ideal é montar esse plano junto com um veterinário de confiança.",
      "O que eu recomendo pra todo tutor: guarde a carteirinha de vacinação, anote as datas de reforço e não deixe passar o prazo — algumas proteções perdem efeito se o reforço atrasa demais.",
      "Se você não sabe se o calendário do seu pet está em dia, essa é literalmente a pergunta certa pra trazer na próxima consulta.",
    ],
  },
  {
    slug: "calor-em-osasco-como-proteger-seu-pet",
    title: "Calor em Osasco: como proteger seu pet nos dias mais quentes",
    excerpt: "Dias de calor forte pedem alguns cuidados extras — principalmente pra quem mora aqui na região.",
    date: "2026-04-15",
    category: "Região",
    readTime: "3 min",
    coverPlaceholder: "CAPA — CALOR E BEM-ESTAR",
    cover: null,
    content: [
      "Aqui na nossa região, os dias de calor mais forte pedem alguns cuidados extras com os pets — principalmente cães e gatos de pelagem mais densa.",
      "Água sempre disponível, em mais de um ponto da casa, evita desidratação.",
      "Evite passear nos horários de sol mais forte (geralmente entre 11h e 16h) — o asfalto pode queimar as patinhas mesmo quando o ar já parece ter esfriado um pouco.",
      "Sombra e ventilação são essenciais para quem fica em área externa — nunca deixe o pet trancado em ambientes sem circulação de ar.",
      "Ofegar demais, gengiva muito vermelha ou fraqueza repentina podem ser sinais de calor excessivo — nesses casos, procure atendimento.",
      "Pequenos cuidados evitam grandes problemas. Se tiver dúvida sobre o seu pet nesses dias mais quentes, me chama.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
