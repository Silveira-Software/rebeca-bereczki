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

## Atualização — voz em primeira pessoa, Blog e Redes

Depois do primeiro deploy, veio um pedido de ajuste importante: o site é a
**apresentação dela mesma** para quem visita (clínicas e tutores), então:

1. **Voz em primeira pessoa.** Todo o texto do site foi reescrito para falar
   como "eu", não mais como "ela" — é a Rebeca se apresentando, não uma
   biografia escrita por terceiros. A tagline principal também mudou de
   "Onde o cuidado encontra a medicina" para **"Onde seu pet encontra amor,
   carinho e cuidado"** — mais direta, mais humana, sem jargão.
2. **CTAs mais fortes.** Botões genéricos como "Falar sobre uma oportunidade"
   viraram convites diretos: "Vamos conversar", "Vamos conversar sobre uma
   vaga", "Me segue no Instagram". Também adicionei um terceiro caminho de
   contato — WhatsApp — na seção de conversão.
3. **Experiência profissional real.** Usei os dados reais do LinkedIn dela
   pra substituir os placeholders de experiência: 6 posições confirmadas
   (4 Patas Agropecuária e Pet Shop, Pet Shop Próprio como Groomer,
   ANCLIVEPA como Veterinary Assistant e Freelancer, Hospital Cidade dos
   Bichos, Sanity), todas com datas e descrições reais. **CRMV e formação
   continuada seguem como placeholder** — não estavam no material fornecido.
4. **Blog.** Nova seção (`/blog`) para ela publicar notícias, cuidados com
   animais e novidades da região. Vem com 3 posts de exemplo (conteúdo
   genérico e seguro, sem indicação clínica específica) só pra a seção não
   nascer vazia — veja como trocar por posts reais logo abaixo.
5. **Redes (Instagram/TikTok/YouTube).** Nova seção "Minhas redes" na home,
   estilo grade de criadora de conteúdo, com placeholders para os posts/vídeos
   reais e botões de seguir em cada plataforma.

## Estrutura

```
rebeca-vet-nextjs/
├── app/
│   ├── layout.tsx        → fontes (Fraunces + Manrope), metadata, JSON-LD, providers
│   ├── page.tsx            → ordem das cenas na página
│   ├── blog/
│   │   ├── page.tsx          → lista de posts (/blog)
│   │   └── [slug]/page.tsx     → post individual (/blog/seu-slug)
│   ├── globals.css           → tokens de design, classes utilitárias (@layer components)
│   ├── sitemap.ts, robots.ts, manifest.ts → SEO/PWA via convenções do Next.js (sitemap já inclui os posts do blog)
├── src/
│   ├── data/
│   │   ├── profile.ts      → ⭐ TEXTOS, CURRÍCULO, CONTATOS, REDES E FOTOS FICAM AQUI
│   │   └── blog.ts           → ⭐ POSTS DO BLOG FICAM AQUI
│   ├── components/
│   │   ├── layout/            → SmoothScrollProvider, Nav, Footer
│   │   ├── love-line/           → LoveLine (linha reutilizável) e DrawingSequence (Cena 02)
│   │   ├── scenes/                → um componente por cena da história (inclui SocialScene e BlogPreviewScene)
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
  instagram: "[INSTAGRAM A CONFIRMAR]",  // troque pelo @ real
  tiktok: "[TIKTOK A CONFIRMAR]",
  youtube: "[YOUTUBE A CONFIRMAR]",
  email: "[E-MAIL A CONFIRMAR]",
  whatsapp: "[WHATSAPP A CONFIRMAR]",  // formato: "5511999999999" (só números, com DDI)
},
```

O campo `whatsapp` alimenta automaticamente o botão "Chamar no WhatsApp" na
seção de contato (`https://wa.me/<número>`) — não precisa editar o componente.

Currículo, formação e experiência: objetos `medicine`, `experience` e
`education` no mesmo arquivo. A experiência profissional já está preenchida
com os dados reais do LinkedIn — só falta o **CRMV** e os **cursos/certificações**,
marcados como `[A CONFIRMAR]`.

## Como editar o Blog

Todo post fica em **`src/data/blog.ts`**. Para adicionar um post novo, copie um
objeto do array `posts` e edite:

```ts
{
  slug: "titulo-do-novo-post",              // vira a URL: /blog/titulo-do-novo-post
  title: "Título do post",
  excerpt: "Resumo curto, aparece nos cards.",
  date: "2026-08-10",                        // formato AAAA-MM-DD
  category: "Cuidados",                      // ou "Prevenção", "Região", o que fizer sentido
  readTime: "3 min",
  coverPlaceholder: "CAPA — ASSUNTO DO POST",
  cover: null,                                // troque por "/images/blog/arquivo.jpg" quando tiver a foto
  content: [
    "Primeiro parágrafo.",
    "Segundo parágrafo.",
  ],
},
```

A página `/blog`, a prévia na home e o `sitemap.xml` se atualizam sozinhos —
não precisa mexer em mais nada. Os 3 posts que vêm no projeto são **conteúdo
de exemplo, genérico e seguro** (sem indicação clínica específica) só para a
seção não ficar vazia; troque pelos textos reais dela quando quiser.

## Como editar a seção "Minhas redes"

Em `src/data/profile.ts`, objeto `creator.items`: cada item é um post/vídeo
placeholder com `platform` (`"instagram"`, `"tiktok"` ou `"youtube"`),
`placeholder` (texto do card enquanto não há mídia real) e `caption`. Quando
tiver os prints/vídeos reais, o ideal é migrar esses cards para imagens reais
do mesmo jeito que as fotos da galeria (via `PhotoSlot`) — me chama que eu
adapto o componente `SocialScene` para isso quando tiver os arquivos.

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

## Atualização — Agendamento com WhatsApp e Painel privado

Depois do blog e das redes, veio mais um pedido: deixar o botão "Marcar minha
consulta" realmente funcional, e dar pra Rebeca um painel só dela pra
controlar a própria agenda. Sem banco de dados, sem custo de API do WhatsApp
Business — tudo rodando em cima do que ela já usa (Google Agenda) e de um
link do WhatsApp.

**Como funciona pro visitante:** ao clicar em "Marcar minha consulta", abre
um modal (`src/components/booking/BookingModal.tsx`) que busca os horários
livres em `/api/agenda` — essa API lê a Google Agenda dela em formato iCal e
calcula os horários vagos dentro do horário comercial (seg–sáb, 09h–18h,
consultas de 30 min). A pessoa escolhe dia e horário, digita o nome
(opcional), e ao confirmar abre o WhatsApp já com uma mensagem pronta
("Olá, Dra. Rebeca! Gostaria de confirmar minha consulta para..."), pronta
pra só apertar enviar.

**Como funciona pra Rebeca:** em `/painel` (protegido por senha) ela vê a
própria Google Agenda incorporada — é só liberar ou bloquear horários direto
lá que o site reflete automaticamente — e um link para o Analytics gratuito
da Vercel, onde dá pra ver quantas pessoas visitaram o site.

### Variáveis de ambiente necessárias

Nenhuma dessas existe ainda na Vercel — o agendamento e o painel não
funcionam até serem configuradas lá (Project Settings → Environment
Variables):

| Variável | O que é | Como conseguir |
| --- | --- | --- |
| `GOOGLE_CALENDAR_ICS_URL` | Endereço iCal da Google Agenda dela | No Google Agenda: Configurações da agenda → "Integrar agenda" → copiar o "Endereço secreto no formato iCal" (ou o público, se ela deixar a agenda pública) |
| `PAINEL_PASSWORD` | Senha que ela digita pra entrar em `/painel` | Qualquer senha que ela escolher |
| `PAINEL_SESSION_TOKEN` | Token interno da sessão (não é a senha, é usado por trás dos panos) | Uma string longa e aleatória qualquer, ex.: gerar em https://1password.com/password-generator ou rodar `openssl rand -hex 32` no terminal |

### Outros dois pontos pra confirmar antes de tudo funcionar

1. **`profile.links.whatsapp`** em `src/data/profile.ts` — hoje é
   `"[WHATSAPP A CONFIRMAR]"`. Precisa virar o número dela no formato
   `"5511999999999"` (só números, com DDI 55) pra o botão de WhatsApp e o
   modal de agendamento funcionarem.
2. **`GOOGLE_CALENDAR_EMBED_ID`** em `app/painel/page.tsx` (linha 7) — hoje é
   `"[GOOGLE CALENDAR ID A CONFIRMAR]"`. É o ID da agenda dela (Configurações
   da agenda → "ID da agenda", geralmente o próprio e-mail do Google ou um
   código longo terminado em `@group.calendar.google.com`). Sem isso, o
   painel mostra uma mensagem pedindo pra configurar em vez da agenda.

## Deploy

Qualquer host com suporte a Next.js funciona (Vercel é o mais direto — zero
configuração). Alternativas: Netlify, Cloudflare Pages (via adapter) ou
`next build && next start` em um servidor Node próprio.

## O que falta confirmar

Marcados como `[A CONFIRMAR]` em `profile.ts`: CRMV, e-mail, WhatsApp,
Instagram, TikTok, YouTube, cursos e certificações, fotografias (hero,
galeria, pessoais, capas do blog, posts das redes), depoimentos reais (seção
já preparada, vazia por enquanto) e o domínio definitivo. A experiência
profissional **já está com dados reais** (vindos do LinkedIn dela).

Além disso, o agendamento e o painel privado (`/painel`) só funcionam depois
de configurar as três variáveis de ambiente e os dois campos descritos na
seção "Agendamento com WhatsApp e Painel privado" acima.

## Já publicou e quer atualizar com essas mudanças?

Se você já tem o projeto rodando localmente e conectado ao GitHub/Vercel
(como no primeiro deploy), é só sobrescrever os arquivos com esta versão e
seguir o fluxo de sempre:

```bash
cd ~/Projects/rebeca-bereczki   # ou onde você copiou o projeto
npm run build                    # confirma que builda antes de subir
git add .
git commit -m "Voz em primeira pessoa, blog e redes sociais"
git push
```

A Vercel redeploya automaticamente a cada push, se o projeto já estiver
conectado ao repositório do GitHub.
