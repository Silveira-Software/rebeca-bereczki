"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

interface DayAvailability {
  date: string;
  label: string;
  slots: string[];
}

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [days, setDays] = useState<DayAvailability[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!open) return;
    setDays(null);
    setError(null);
    setSelectedDate(null);
    setSelectedSlot(null);
    setName("");

    fetch("/api/agenda")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          return;
        }
        setDays(data.days);
      })
      .catch(() => setError("Não consegui carregar a agenda agora. Tenta de novo em instantes."));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const selectedDay = days?.find((d) => d.date === selectedDate) ?? null;

  function formatDateLabel(iso: string) {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    });
  }

  function handleConfirm() {
    if (!selectedDate || !selectedSlot) return;
    const dateLabel = formatDateLabel(selectedDate);
    const namePart = name.trim() ? ` Meu nome é ${name.trim()}.` : "";
    const message = `Olá, Dra. Rebeca! Gostaria de confirmar minha consulta para ${dateLabel} às ${selectedSlot}.${namePart}`;
    const phone = profile.links.whatsapp.replace(/\D/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-wine/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white-warm p-8 shadow-soft">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 text-2xl leading-none text-muted hover:text-wine"
        >
          ×
        </button>

        <p className="eyebrow">Marcar consulta</p>
        <h2 id="booking-title" className="mt-3 text-lg text-wine">
          Escolha o melhor dia e horário
        </h2>
        <p className="mt-2 text-sm text-muted">
          Os horários abaixo refletem minha agenda em tempo real. Ao confirmar, abre o WhatsApp já com os
          detalhes preenchidos — é só apertar enviar.
        </p>

        {error && <p className="mt-6 text-sm text-accent-deep">{error}</p>}

        {!error && !days && <p className="mt-6 text-sm text-muted">Carregando horários disponíveis…</p>}

        {!error && days && days.length === 0 && (
          <p className="mt-6 text-sm text-muted">
            Não encontrei horários livres nos próximos dias. Me chama direto pelo WhatsApp.
          </p>
        )}

        {!error && days && days.length > 0 && (
          <>
            <div className="mt-6 flex flex-wrap gap-2">
              {days.map((d) => (
                <button
                  key={d.date}
                  onClick={() => {
                    setSelectedDate(d.date);
                    setSelectedSlot(null);
                  }}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                    selectedDate === d.date ? "border-wine bg-wine text-white-warm" : "border-old-rose text-wine"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {selectedDay && (
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedDay.slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSlot(s)}
                    className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                      selectedSlot === s ? "border-wine bg-wine text-white-warm" : "border-old-rose/60 text-graphite"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {selectedSlot && (
              <div className="mt-6">
                <label htmlFor="booking-name" className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  Seu nome (opcional)
                </label>
                <input
                  id="booking-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-md border border-old-rose/40 bg-white px-4 py-3 text-sm"
                  placeholder="Como posso te chamar?"
                />
                <button onClick={handleConfirm} className="btn btn-primary mt-5 w-full justify-center">
                  Confirmar e chamar no WhatsApp
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
