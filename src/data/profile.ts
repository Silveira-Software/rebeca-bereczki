/**
 * =========================================================
 * CAMADA DE DADOS — Dra. Rebeca Fernandes Bereczki
 * =========================================================
 * Único arquivo que precisa ser editado para atualizar textos,
 * currículo, formação, contatos e caminhos de fotografia.
 *
 * VOZ DO SITE: primeira pessoa. O site é a apresentação dela mesma —
 * quem visita precisa sentir que está lendo palavras dela, não uma
 * biografia escrita por terceiros. Mantenha esse tom ao editar.
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

export interface CreatorItem {
  id: string;
  platform: "instagram" | "tiktok" | "youtube";
  placeholder: string;
  caption: string;
}

export interface ServiceItem {
  title: string;
  text: string;
}

export const profile = {
  name: "Rebeca Fernandes Bereczki",
  firstName: "Rebeca",
  title: "Médica Veterinária",
  location: "Osasco, São Paulo",
  crmv: "[CRMV A CONFIRMAR]",

  concept: {
    line1: "Medicina veterinária com técnica.",
    line2: "Cuidado com amor.",
    signature: "MEDICINA VETERINÁRIA COM AFETO",
  },

  // Assinatura recorrente: alternada por seção, reforça que técnica e
  // afeto convivem — nunca um no lugar do outro.
  signaturePairs: ["TÉCNICA + AFETO", "CONHECIMENTO + EMPATIA", "MEDICINA + CUIDADO"],

  hero: {
    kicker: "Onde seu pet encontra amor, carinho e cuidado.",
    titleParts: ["Rebeca", "Fernandes", "Bereczki"],
    sub: "Medicina veterinária com técnica. Cuidado com amor.",
    ctaPrimary: "Vamos conversar",
    ctaSecondary: "Me segue no Instagram",
  },

  story: {
    eyebrow: "Quem sou eu",
    quote: "Antes de eu virar a Dra. Rebeca, eu já era alguém que parava pra cuidar.",
    paragraphs: [
      "Muito antes do diploma, eu já tinha o hábito de reparar: no jeito como um cão baixa as orelhas, no silêncio de um gato com dor, na mão que treme segurando a coleira. Reparar era, sem eu saber o nome disso, o começo do cuidado.",
      "Essa atenção não veio da faculdade. Veio antes — de eu parar, me aproximar devagar, tratar cada animal como se fosse o único da sala. Porque, pra mim, sempre é.",
    ],
    transition: "Com o tempo, esse cuidado virou profissão.",
  },

  drawing: {
    eyebrow: "A linha que conecta tudo",
    heading: "Um único traço, do afeto à profissão.",
    labels: ["um afeto.", "um vínculo.", "uma escuta.", "uma trajetória."],
  },

  journey: {
    eyebrow: "Minha trajetória",
    intro: "Eu não comecei a cuidar depois do diploma.",
    steps: [
      {
        index: "01",
        title: "Presença, antes da técnica",
        text: "Cinco anos ao lado da rotina veterinária — como auxiliar — me ensinaram o que nenhuma disciplina ensina sozinha: presença. Ficar por perto. Notar o que muda num paciente de um dia para o outro. Seguir firme quando a situação não é fácil.",
      },
      {
        index: "02",
        title: "A formação chegou para dar nome ao que eu já sentia",
        text: "A faculdade trouxe protocolo, exame, diagnóstico — uma linguagem pro que antes era instinto treinado. A técnica chegou. A responsabilidade cresceu junto.",
      },
      {
        index: "03",
        title: "E o cuidado continuou o mesmo",
        text: "Consulta, exame, plantão, a conversa difícil com quem ama o paciente tanto quanto eu — a rotina mudou de forma. A intenção, não.",
      },
    ] as JourneyStep[],
    closing: "Técnica veio junto. Responsabilidade cresceu. E o cuidado continuou o mesmo.",
  },

  care: {
    eyebrow: "Como eu cuido",
    intro: "Um jeito de atender que não separa ciência de sensibilidade.",
    words: [
      { word: "Observar", text: "Cada paciente avisa do seu jeito. Perceber isso é o meu primeiro exame." },
      { word: "Ouvir", text: "Quem trouxe o paciente também está sendo atendido por mim. Ouvir faz parte do diagnóstico." },
      { word: "Acolher", text: "Antes do exame, existe o medo de quem chega. Eu acolho primeiro — sempre." },
      { word: "Examinar", text: "Sem pressa, sem atalho. É assim que eu construo confiança, exame após exame." },
      { word: "Cuidar", text: "A técnica indica o caminho certo. Minha empatia decide como chegar até ele." },
      { word: "Acompanhar", text: "Meu cuidado não termina na porta da sala. Eu continuo depois." },
    ] as CareWord[],
  },

  gallery: {
    eyebrow: "Ao lado deles",
    heading: "Eles não sabem o nome do procedimento.",
    intro: "Mas sabem quando estão seguros. Em breve, essa galeria vai ter registros reais de mim com meus pacientes.",
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
    title: "Eu amo animais. E levo a medicina veterinária a sério — muito a sério.",
    cards: [
      { heading: "Formação", items: ["Medicina Veterinária — UNINOVE", "Período aproximado: 2019–2023 (a confirmar)"] },
      { heading: "Registro profissional", items: ["CRMV: [CRMV A CONFIRMAR]"] },
      {
        heading: "Áreas de atuação",
        items: ["Clínica de pequenos animais", "Rotina de consultas e atendimento a tutores", "Estética e bem-estar animal (banho e tosa)"],
      },
      {
        heading: "Experiência",
        items: ["5 anos de vivência na área pet", "Atuação como médica veterinária e groomer", "Gestão do próprio negócio (pet shop)"],
      },
      { heading: "Instituições e redes", items: ["ANCLIVEPA — Associação Nacional de Clínicos Veterinários de Pequenos Animais", "4 Patas Agropecuária e Pet Shop"] },
      { heading: "Formação continuada", items: ["[cursos e certificações a confirmar]"] },
    ] as MedicineCard[],
  },

  experience: {
    eyebrow: "Experiência",
    intro: "Cada estação da minha trajetória, em poucas palavras — 5 anos de vivência na área pet.",
    entries: [
      {
        org: "4 Patas Agropecuária e Pet Shop",
        role: "Médica Veterinária",
        period: "out. 2025 – fev. 2026 · 5 meses · Meio período",
        text: "Atuação clínica em São Paulo, com foco em cuidados animais e contenção de animais.",
      },
      {
        org: "Pet Shop Próprio",
        role: "Groomer / Gestão do próprio negócio",
        period: "2024 – 2025",
        text: "Gestão do meu próprio negócio, atendimento a domicílio e em loja, banho e tosa, relacionamento com cliente.",
      },
      {
        org: "ANCLIVEPA",
        role: "Veterinary Assistant",
        period: "jul. 2023 – jul. 2024 · 1 ano e 1 mês",
        text: "Auxílio em consultas, apoio em procedimentos, organização de materiais, internação e monitoramento.",
      },
      {
        org: "ANCLIVEPA-SP",
        role: "Freelancer (Tempo integral)",
        period: "abr. 2023 – mai. 2023 · 2 meses",
        text: "Aplicação de medicações em animais internados e suporte técnico ao hospital. Auxílio a veterinários em salas de exames. Preparo de pacientes para cirurgias e recuperação. Preparo de amostras para laboratório. Preenchimento de prescrições e orientação a tutores sobre planos de recuperação e estilo de vida do pet.",
      },
      {
        org: "Hospital Cidade dos Bichos",
        role: "Assistente de Medicina Veterinária (Estágio)",
        period: "out. 2022 – dez. 2022 · 3 meses",
        text: "Aplicação de medicações em animais internados, suporte técnico ao hospital, auxílio em salas de exames, preparo de pacientes para cirurgia e recuperação, preparo de amostras para laboratório, preenchimento de prescrições e orientação a tutores.",
      },
      {
        org: "Sanity",
        role: "Controle de Qualidade (Meio período)",
        period: "mai. 2022 – ago. 2022 · 4 meses",
        text: "Monitoramento de qualidade dos alimentos, checklists de inspeção dos setores, avaliação e nota das lojas.",
      },
    ] as ExperienceEntry[],
  },

  education: {
    eyebrow: "Formação",
    institution: "UNINOVE",
    degree: "Medicina Veterinária",
    years: "2019 – 2023 (aprox., a confirmar)",
    heading: "A faculdade não deu início ao meu cuidado.",
    note: "Deu a ele método, ciência e responsabilidade clínica.",
  },

  personality: {
    eyebrow: "Por trás do jaleco",
    heading: "A medicina explica muita coisa.",
    headingEm: "O carinho explica o jeito como eu escolhi praticá-la.",
    traits: ["Amo animais", "Proativa em qualquer área", "Delicadeza", "Confiança", "Proximidade", "Cuidado", "Alegria"],
    closing: "Rosa, leveza e afeto não são contradição de uma boa médica — são parte de quem eu sou enquanto cuido.",
  },

  testimonials: {
    eyebrow: "Quem já trabalhou comigo",
    heading: "Espaço reservado para depoimentos reais",
    text: "Depoimentos de colegas, gestores e tutores entram aqui assim que estiverem disponíveis. Eu não publico nenhum depoimento sem confirmação — mas o espaço já está pronto para recebê-los.",
    items: [] as Testimonial[],
  },

  contact: {
    clinics: {
      eyebrow: "Para clínicas e hospitais",
      heading: "Quer me conhecer profissionalmente?",
      text: "Rigor clínico e presença de verdade — é isso que eu levo pra sua equipe.",
      ctaLabel: "Vamos conversar sobre uma vaga",
    },
    tutors: {
      eyebrow: "Para tutores e conexões",
      heading: "Quer acompanhar meu dia a dia com os pets?",
      text: "Bastidores do consultório, cuidado de perto, um pouco da minha rotina.",
      ctaLabel: "Me segue no Instagram",
    },
    whatsapp: {
      heading: "Prefere WhatsApp?",
      text: "Me chama direto — respondo eu mesma.",
      ctaLabel: "Chamar no WhatsApp",
    },
  },

  links: {
    linkedin: "https://br.linkedin.com/in/rebeca-fernandes-bereczki-7ba1a2278",
    instagram: "[INSTAGRAM A CONFIRMAR]",
    tiktok: "[TIKTOK A CONFIRMAR]",
    youtube: "[YOUTUBE A CONFIRMAR]",
    email: "[E-MAIL A CONFIRMAR]",
    whatsapp: "[WHATSAPP A CONFIRMAR]",
  },

  // Seção "content creator" — meus vídeos e fotos das redes, pra quem
  // quer conhecer minha rotina além do consultório.
  creator: {
    eyebrow: "Minhas redes",
    heading: "Também mostro meu dia a dia nas redes.",
    text: "Rotina de consultório, bastidores e cuidado com os pets — no formato que você já conhece.",
    items: [
      { id: "c1", platform: "instagram", placeholder: "POST INSTAGRAM 01", caption: "[LEGENDA A CONFIRMAR]" },
      { id: "c2", platform: "tiktok", placeholder: "VÍDEO TIKTOK 01", caption: "[LEGENDA A CONFIRMAR]" },
      { id: "c3", platform: "instagram", placeholder: "POST INSTAGRAM 02", caption: "[LEGENDA A CONFIRMAR]" },
      { id: "c4", platform: "youtube", placeholder: "VÍDEO YOUTUBE 01", caption: "[LEGENDA A CONFIRMAR]" },
    ] as CreatorItem[],
  },

  blog: {
    eyebrow: "Blog",
    heading: "Notícias e cuidados, direto da minha rotina.",
    text: "Espaço pra eu compartilhar informações sobre bem-estar animal e novidades da região.",
    ctaLabel: "Ver todos os posts",
  },

  // O que eu ofereço como médica veterinária — objetivo, sem jargão,
  // pra quem chega no site e quer entender rápido como eu posso ajudar.
  services: {
    eyebrow: "O que eu ofereço",
    heading: "Cuidado veterinário — do consultório ao banho e tosa.",
    text: "Um resumo simples do que você pode esperar quando me procura para cuidar do seu pet.",
    items: [
      {
        title: "Consultas veterinárias",
        text: "Avaliação clínica completa do seu pet, do histórico ao plano de cuidado — sempre com calma e sem pressa.",
      },
      {
        title: "Vacinação e prevenção",
        text: "Organização do calendário de vacinas e orientação sobre prevenção de doenças, no tempo certo pro seu pet.",
      },
      {
        title: "Banho e tosa (grooming)",
        text: "Cuidado estético com o mesmo carinho da parte clínica — bem-estar também é higiene e conforto.",
      },
      {
        title: "Orientação para tutores",
        text: "Dúvidas sobre alimentação, comportamento ou rotina do seu pet? Eu explico tudo numa linguagem simples, sem jargão.",
      },
    ] as ServiceItem[],
    ctaLabel: "Marcar minha consulta",
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
