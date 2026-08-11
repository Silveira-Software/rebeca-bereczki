"use client";

import { useRouter } from "next/navigation";

// Substitua pelo ID da agenda do Google dela (Configurações da agenda
// > "ID da agenda", algo como seuemail@gmail.com ou um código longo).
const GOOGLE_CALENDAR_EMBED_ID = "[GOOGLE CALENDAR ID A CONFIRMAR]";

const calendarSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
  GOOGLE_CALENDAR_EMBED_ID
)}&ctz=America%2FSao_Paulo`;

export default function PainelPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/painel-logout", { method: "POST" });
    router.push("/painel/login");
    router.refresh();
  }

  const calendarConfigured = !GOOGLE_CALENDAR_EMBED_ID.includes("A CONFIRMAR");

  return (
    <div className="min-h-[100svh] bg-white-warm px-5 py-16 sm:px-8 lg:px-[4.5rem]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Painel privado</p>
            <h1 className="mt-3 text-2xl">Minha agenda e meus acessos</h1>
          </div>
          <button onClick={handleLogout} className="btn btn-outline">
            Sair
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <h2 className="text-md text-wine">Agenda (Google Agenda)</h2>
            <p className="mt-2 text-sm text-muted">
              Libere ou bloqueie horários direto no Google Agenda — o site lê daqui automaticamente pra
              mostrar o que está livre no modal de agendamento.
            </p>

            {calendarConfigured ? (
              <div className="mt-6 overflow-hidden rounded-lg border border-wine/10">
                <iframe
                  src={calendarSrc}
                  className="h-[600px] w-full"
                  style={{ border: 0 }}
                  title="Minha agenda"
                />
              </div>
            ) : (
              <div className="mt-6 rounded-lg border border-dashed border-wine/30 bg-cream p-8 text-sm text-muted">
                Configure <code className="text-accent-deep">GOOGLE_CALENDAR_EMBED_ID</code> em{" "}
                <code className="text-accent-deep">app/painel/page.tsx</code> com o ID da sua agenda do
                Google pra ver ela aqui.
              </div>
            )}
          </section>

          <section>
            <h2 className="text-md text-wine">Acessos ao site</h2>
            <p className="mt-2 text-sm text-muted">
              Estatísticas de visitas ficam no painel de Analytics da Vercel (gratuito, sem precisar de
              banco de dados). Ative em Project Settings → Analytics no painel da Vercel.
            </p>
            <a
              href="https://vercel.com/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-6"
            >
              Ver Analytics na Vercel
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
