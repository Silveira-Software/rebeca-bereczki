/**
 * =========================================================
 * CAMADA DE DADOS — Dra. Rebeca Fernandes Bereczki
 * =========================================================
 * Único arquivo que precisa ser editado para atualizar textos,
 * currículo, formação, contatos e caminhos de fotografia.
 *
 * Tudo marcado como "[A CONFIRMAR]" é um placeholder proposital.
 * Nenhuma informação real foi inventada — substitua pelos dados
 * reais assim que estiverem disponíveis.
 * =========================================================
 */

export interface JourneyStep {
  index: string;
  title: string;
  text: string;
}

export interface CareWord {
  word: string;
  text: string;
}

export interface GalleryItem {
  id: string;
  placeholder: string;
  caption: string;
}

export interface MedicineCard {
  heading: string;
  items: string[];
}

export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  text: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const profile = {
  name: "Rebeca Fernandes Bereczki",
  firstName: "Rebeca",
  title: "Médica Veterinária",
  location: "Osasco, São Paulo",
  crmv: "[CRMV A CONFIRMAR]",

  concept: {
    line1: "Medicina com técnica.",
    line2: "Cuidado com amor.",
    signature: "MEDICINA COM AFETO",
  },

  // Assinatura recorrente: alternada por seção, reforça que técnica e
  // afeto convivem — nunca um no lugar do outro.
  signaturePairs: ["TÉCNICA + AFETO", "CONHECIMENTO + EMPATIA", "MEDICINA + CUIDADO"],

  hero: {
    kicker: "Onde o cuidado encontra a medicina",
    titleParts: ["Rebeca", "Fernandes", "Bereczki"],
    sub: "Medicina com técnica. Cuidado com amor.",
  },

  story: {
    eyebrow: "Quem é Rebeca",
    quote: "Antes de existir a Dra. Rebeca, já existia alguém que parava para cuidar.",
    paragraphs: [
      "Muito antes do diploma, havia o hábito de reparar: no jeito como um cão baixa as orelhas, no silêncio de um gato com dor, na mão que treme segurando a coleira. Reparar era, sem que ela soubesse o nome disso, o começo do cuidado.",
      "Essa atenção não veio da faculdade. Veio antes — de parar, de se aproximar devagar, de tratar cada animal como se fosse o único da sala. Porque, para quem cuida de verdade, sempre é.",
    ],
    transition: "Com o tempo, esse cuidado virou profissão.",
  },

  drawing: {
    eyebrow: "A linha que conecta tudo",
    heading: "Um único traço, do afeto à profissão.",
    labels: ["um afeto.", "um vínculo.", "uma escuta.", "uma trajetória."],
  },

  journey: {
    eyebrow: "A trajetória",
    intro: "Ela não começou a cuidar depois do diploma.",
    steps: [
      {
        index: "01",
        title: "Presença, antes da técnica",
        text: "Cinco anos ao lado da rotina veterinária — como auxiliar — ensinaram o que nenhuma disciplina ensina sozinha: presença. Ficar por perto. Notar o que muda num paciente de um dia para o outro. Seguir firme quando a situação não é fácil.",
      },
      {
        index: "02",
        title: "A formação chegou para dar nome ao que já existia",
        text: "A faculdade trouxe protocolo, exame, diagnóstico — uma linguagem para o que antes era instinto treinado. A técnica chegou. A responsabilidade cresceu junto.",
      },
      {
        index: "03",
        title: "E o cuidado continuou o mesmo",
        text: "Consulta, exame, plantão, a conversa difícil com quem ama o paciente tanto quanto ela — a rotina mudou de forma. A intenção, não.",
      },
    ] as JourneyStep[],
    closing: "Técnica veio junto. Responsabilidade cresceu. E o cuidado continuou o mesmo.",
  },

  care: {
    eyebrow: "Como ela cuida",
    intro: "Um jeito de atender que não separa ciência de sensibilidade.",
    words: [
      { word: "Observar", text: "Cada paciente avisa do seu jeito. Perceber isso é o primeiro exame." },
      { word: "Ouvir", text: "Quem trouxe o paciente também está sendo atendido. Ouvir faz parte do diagnóstico." },
      { word: "Acolher", text: "Antes do exame, existe o medo de quem chega. Acolher vem primeiro — sempre." },
      { word: "Examinar", text: "Sem pressa, sem atalho. É assim que a confiança se constrói, exame após exame." },
      { word: "Cuidar", text: "A técnica indica o caminho certo. A empatia decide como percorrê-lo." },
      { word: "Acompanhar", text: "O cuidado de verdade não termina na porta da sala. Continua depois." },
    ] as CareWord[],
  },

  gallery: {
    eyebrow: "Ao lado deles",
    heading: "Eles não sabem o nome do procedimento.",
    intro: "Mas sabem quando estão seguros. Uma seção preparada para receber os registros de Rebeca com seus pacientes.",
    items: [
      { id: "g1", placeholder: "FOTO REBECA COM ANIMAL 01", caption: "Eles não sabem o nome do procedimento." },
      { id: "g2", placeholder: "FOTO REBECA COM ANIMAL 02", caption: "Mas sabem quando estão seguros." },
      { id: "g3", placeholder: "FOTO REBECA COM ANIMAL 03", caption: "Confiança também faz parte do tratamento." },
      { id: "g4", placeholder: "FOTO REBECA COM ANIMAL 04", caption: "Cuidar começa antes de tocar." },
      { id: "g5", placeholder: "FOTO REBECA COM ANIMAL 05", caption: "Cada paciente merece ser visto como único." },
    ] as GalleryItem[],
  },

  medicine: {
    eyebrow: "Medicina Veterinária",
    title: "Ela ama animais. E leva medicina a sério — muito a sério.",
    cards: [
      { heading: "Formação", items: ["Medicina Veterinária — UNINOVE", "Período aproximado: 2019–2023 (a confirmar)"] },
      { heading: "Registro profissional", items: ["CRMV: [CRMV A CONFIRMAR]"] },
      {
        heading: "Áreas de atuação",
        items: ["Clínica de pequenos animais", "Rotina de consultas e atendimento a tutores", "[área de atuação adicional a confirmar]"],
      },
      {
        heading: "Experiência",
        items: ["Vivência prévia como auxiliar veterinária (≈5 anos)", "Atuação como médica veterinária", "[experiência adicional a confirmar]"],
      },
      { heading: "Instituições e redes", items: ["Referência: ANCLIVEPA", "[instituição adicional a confirmar]"] },
      { heading: "Formação continuada", items: ["[cursos e certificações a confirmar]"] },
    ] as MedicineCard[],
  },

  experience: {
    eyebrow: "Experiência",
    intro: "Cada estação da trajetória, em poucas palavras.",
    entries: [
      {
        org: "Médica Veterinária",
        role: "Atuação clínica",
        period: "[período a confirmar]",
        text: "Rotina de consultas, exames e cuidado direto com pacientes e tutores. Detalhes específicos desta experiência serão adicionados assim que confirmados.",
      },
      {
        org: "ANCLIVEPA",
        role: "Associação de referência",
        period: "[período a confirmar]",
        text: "Vínculo de referência identificado junto à Associação Nacional de Clínicos Veterinários de Pequenos Animais. Detalhes complementares a confirmar.",
      },
      {
        org: "Auxiliar Veterinária",
        role: "Formação prática, antes do diploma",
        period: "≈ 5 anos de vivência",
        text: "Anos acompanhando de perto a rotina veterinária — consultas, urgências, contato com tutores — construíram a base de presença e sensibilidade clínica que sustentaria sua atuação como médica.",
      },
    ] as ExperienceEntry[],
  },

  education: {
    eyebrow: "Formação",
    institution: "UNINOVE",
    degree: "Medicina Veterinária",
    years: "2019 – 2023 (aprox., a confirmar)",
    heading: "A faculdade não deu início ao cuidado.",
    note: "Deu a ele método, ciência e responsabilidade clínica.",
  },

  personality: {
    eyebrow: "Por trás do jaleco",
    heading: "A medicina explica muita coisa.",
    headingEm: "O carinho explica o jeito como ela escolheu praticá-la.",
    traits: ["Ama animais", "Delicadeza", "Confiança", "Proximidade", "Cuidado", "Alegria"],
    closing:
      "Rosa, leveza e afeto não são contradição de uma boa médica — são parte de quem ela é enquanto cuida.",
  },

  testimonials: {
    eyebrow: "Quem já trabalhou com ela",
    heading: "Espaço reservado para depoimentos reais",
    text: "Depoimentos de colegas, gestores e tutores entram aqui assim que estiverem disponíveis. Nenhum depoimento é publicado sem confirmação — mas o espaço já está pronto para recebê-los.",
    items: [] as Testimonial[],
  },

  contact: {
    clinics: {
      eyebrow: "Para clínicas e hospitais",
      heading: "Conheça minha trajetória profissional.",
      text: "Rigor clínico e presença de verdade — para times que levam os dois a sério.",
      ctaLabel: "Falar sobre uma oportunidade",
    },
    tutors: {
      eyebrow: "Para tutores e conexões",
      heading: "Conheça meu trabalho e acompanhe minha rotina.",
      text: "Bastidores do consultório, cuidado de perto, um pouco do dia a dia.",
      ctaLabel: "Acompanhar no Instagram",
    },
  },

  links: {
    linkedin: "https://br.linkedin.com/in/rebeca-fernandes-bereczki-7ba1a2278",
    instagram: "[INSTAGRAM A CONFIRMAR]",
    email: "[E-MAIL A CONFIRMAR]",
    whatsapp: "[WHATSAPP A CONFIRMAR]",
  },

  finalQuote: "Cuidar é a forma que encontrei de estar no mundo.",

  // Caminhos de fotografia. Preencha com o arquivo real em /public/images
  // e troque `null` pelo caminho (ex.: "/images/rebeca-hero.jpg").
  photos: {
    hero: null as string | null,
    story: null as string | null,
    gallery: [null, null, null, null, null] as (string | null)[],
    personality: [null, null, null] as (string | null)[],
  },
};

export type Profile = typeof profile;
