# Site — Dra. Rebeca Fernandes Bereczki (Next.js + TypeScript)

Versão em **Next.js 14 (App Router) + TypeScript + React + Tailwind + GSAP/ScrollTrigger + Lenis**,
como pedido originalmente. Esta é a evolução da primeira versão (HTML/CSS/JS puro) —
mesma direção criativa (medicina com afeto, paleta rosa sofisticada, a linha que
conecta as cenas), agora na stack real, pronta para crescer com um time de dev.

## ⚠️ Leia antes de rodar

Este projeto foi escrito inteiramente à mão, neste ambiente, **sem `npm install`**:
o sandbox onde eu trabalho não tem acesso ao registro do npm (bloqueado por
política de rede), então não consegui instalar dependências nem rodar
`next build`/`tsc` para validar o projeto de ponta a ponta. Fiz uma revisão manual
extensa — resolução de todos os imports, balanceamento de chaves/parênteses em
todo arquivo, checagem de padrões conhecidos de erro (regras de hooks do React,
`<head>` manual no App Router, subpaths corretos do GSAP) — mas a validação final
só acontece quando você rodar `npm install` na sua máquina.

**Se `npm run build` (ou `npm run dev`) apontar algum erro, me envie a mensagem
completa do terminal e eu corrijo imediatamente.** É o cenário mais provável de
imperfeição neste projeto, dado que não pude compilar aqui.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run typecheck  # roda apenas o tsc, mais rápido para achar erros de tipo
```

## O que mudou desde a v1 (HTML/CSS/JS)

Você pediu três frentes de melhoria — as três foram aplicadas:

1. **Stack real**: Next.js + TypeScript + React + Tailwind, com GSAP/ScrollTrigger
   para o motion cinematográfico e Lenis para o smooth scroll — exatamente a stack
   pedida no briefing original. Arquitetura em componentes por cena
   (`HeroScene`, `StorySection`, `JourneyScene`, `CareScene`, `GalleryScene`,
   `MedicineScene`, `ExperienceScene`, `EducationScene`, `PersonalityScene`,
   `TestimonialsScene`, `ContactScene`, `FinalScene`), `LoveLine`/`DrawingSequence`
   como componentes reutilizáveis, `SmoothScrollProvider` envolvendo o app, e
   `src/data/profile.ts` como camada de dados **totalmente separada da camada
   visual** — exatamente como pedido no briefing.
2. **Copy e narrativa**: os textos foram reescritos com mais textura e menos tom
   de institucional genérico — mais imagem sensorial ("no jeito como um cão baixa
   as orelhas", "a mão que treme segurando a coleira"), frases mais variadas em
   ritmo, e reforço mais forte da assinatura recorrente **técnica + afeto** em
   cada seção.
3. **Direção visual/motion**: composição do Hero mais assimétrica (grid 12 colunas,
   moldura duplicada atrás da foto, parallax sutil na foto pela primeira dobra),
   `CareScene` com destaque dinâmico na palavra que cruza o centro da tela,
   `DrawingSequence` com pin real no scroll (a cena "gruda" na tela enquanto o
   traço se desenha — coração abstrato → perfil animal → estetoscópio →
   trajetória), galeria com deslocamento horizontal via scroll no desktop e
   scroll nativo com snap no mobile, tipografia fluida (`clamp()`) em toda a
   escala.

Porque a stack real está em jogo, este projeto é o que deve seguir em frente —
a v1 estática continua funcionando como prévia sem dependências, mas o
desenvolvimento futuro (CMS, novas seções, formulário de contato real) deve
acontecer aqui.

## Estrutura

```
rebeca-vet-nextjs/
├── app/
│   ├── layout.tsx        → fontes (Fraunces + Manrope), metadata, JSON-LD, providers
│   ├── page.tsx            → ordem das cenas na página
│   ├── globals.css           → tokens de design, classes utilitárias (@layer components)
│   ├── sitemap.ts, robots.ts, manifest.ts → SEO/PWA via convenções do Next.js
├── src/
│   ├── data/profile.ts      → ⭐ TEXTOS, CURRÍCULO, CONTATOS E FOTOS FICAM AQUI
│   ├── components/
│   │   ├── layout/            → SmoothScrollProvider, Nav, Footer
│   │   ├── love-line/           → LoveLine (linha reutilizável) e DrawingSequence (Cena 02)
│   │   ├── scenes/                → um componente por cena da história
│   │   └── ui/                      → PhotoSlot, Reveal (animação de entrada genérica)
│   ├── hooks/useMotionProfile.ts      → prefers-reduced-motion + direção mobile
│   └── lib/gsap.ts                      → registro do ScrollTrigger
├── public/images/            → favicon, ícones, imagem de capa (Open Graph)
```

## Como editar conteúdo, currículo e contatos

Tudo fica em **`src/data/profile.ts`** — é o único arquivo que você deve editar
para trocar textos, currículo ou contatos. Diferente da v1 estática, aqui **não
há duplicação**: o Next.js renderiza o HTML final a partir desses dados em tempo
de build, então editar `profile.ts` já atualiza o site inteiro (e o HTML
gerado continua 100% indexável pelo Google).

```ts
links: {
  linkedin: "https://br.linkedin.com/in/rebeca-fernandes-bereczki-7ba1a2278",
  instagram: "[INSTAGRAM A CONFIRMAR]",  // troque pelo link real
  email: "[E-MAIL A CONFIRMAR]",
  whatsapp: "[WHATSAPP A CONFIRMAR]",
},
```

Currículo, formação e experiência: objetos `medicine`, `experience` e
`education` no mesmo arquivo.

## Como adicionar as fotografias

Cada foto tem um campo dedicado em `profile.photos`, hoje como `null`:

```ts
photos: {
  hero: null,                          // ex.: "/images/rebeca-hero.jpg"
  story: null,
  gallery: [null, null, null, null, null],
  personality: [null, null, null],
},
```

1. Coloque o arquivo otimizado (`.jpg`/`.webp`) em `public/images/`.
2. Em `profile.ts`, troque o `null` correspondente pelo caminho, ex.:
   `hero: "/images/rebeca-hero.jpg"`.
3. Pronto — o componente `PhotoSlot` troca automaticamente o placeholder
   tracejado pela foto real, já com `next/image` (otimização automática,
   lazy loading, `sizes` responsivo). Nenhuma edição de componente é necessária.

Fotos previstas: `hero` (vertical 3:4, a primeira dobra), `story` (4:5, seção
"Quem é Rebeca"), `gallery[0..4]` (galeria cinematográfica com os animais,
3:4 cada) e `personality[0..2]` (seção "Por trás do jaleco": 16:9 + duas 1:1).

Substitua também `public/images/og-cover.jpg` (1200×630) quando tiver uma
versão com foto real — hoje é um placeholder gerado automaticamente só para o
link já ter uma prévia decente ao ser compartilhado.

## Motion e acessibilidade

- `useMotionProfile()` decide a intensidade do motion: `"none"` (prefers-reduced-motion
  ativo — todo motion é pulado, o conteúdo aparece direto), `"light"` (mobile/ponteiro
  grosso — menos partículas, sem pin pesado na galeria) ou `"full"` (desktop).
- Nenhuma animação bloqueia o scroll; tudo usa `scrub`/`ScrollTrigger` ou reveals
  curtos, nunca "espera terminar para continuar".
- Skip link, `:focus-visible` em todo elemento interativo, HTML semântico com
  um único `<h1>` (no Hero) e hierarquia correta de `<h2>`/`<h3>`.

## SEO

- Metadata API do Next.js (`app/layout.tsx`): title template, description,
  canonical, Open Graph, Twitter Card.
- JSON-LD `Person` (não `LocalBusiness`/`VeterinaryCare` — Rebeca ainda não tem
  estabelecimento próprio, então esse schema não seria verdade).
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` — convenções nativas do
  Next.js, sem arquivos estáticos manuais.
- **Antes de publicar**, troque `SEU-DOMINIO-AQUI.com.br` (aparece em
  `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts`) pelo domínio real.

## Deploy

Qualquer host com suporte a Next.js funciona (Vercel é o mais direto — zero
configuração). Alternativas: Netlify, Cloudflare Pages (via adapter) ou
`next build && next start` em um servidor Node próprio.

## O que falta confirmar

Os mesmos itens da v1 — todos marcados como `[A CONFIRMAR]` em `profile.ts`:
CRMV, e-mail, WhatsApp, Instagram, datas exatas de experiência, cursos e
certificações, fotografias, depoimentos reais (seção já preparada, vazia por
enquanto) e o domínio definitivo.
