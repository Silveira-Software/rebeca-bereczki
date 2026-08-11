import { NextResponse } from "next/server";

/**
 * =========================================================
 * API: /api/agenda
 * =========================================================
 * Lê a agenda pública (formato iCal) do Google Agenda da Rebeca
 * e devolve os horários livres dos próximos dias, dentro do
 * horário comercial configurado abaixo.
 *
 * Configuração necessária (variável de ambiente na Vercel):
 *   GOOGLE_CALENDAR_ICS_URL = endereço iCal público/secreto
 *   do Google Agenda dela (Configurações da agenda > Integrar
 *   agenda > "Endereço secreto no formato iCal", ou o endereço
 *   público se ela deixar a agenda pública).
 *
 * Não precisa de banco de dados: a fonte da verdade é a
 * própria agenda do Google. Qualquer evento existente bloqueia
 * o horário; o resto do horário comercial aparece como livre.
 * =========================================================
 */

const ICS_URL = process.env.GOOGLE_CALENDAR_ICS_URL || "";

// Fuso fixo (Brasil não usa mais horário de verão desde 2019).
const TIMEZONE_OFFSET = "-03:00";

// Horário comercial e duração de cada consulta — ajuste aqui se precisar.
const BUSINESS_START_HOUR = 9;
const BUSINESS_END_HOUR = 18;
const SLOT_MINUTES = 30;
const DAYS_AHEAD = 14;
const CLOSED_WEEKDAYS = [0]; // 0 = domingo

interface BusyRange {
  start: Date;
  end: Date;
}

function parseIcsDate(raw: string): Date {
  const clean = raw.trim();
  const y = clean.slice(0, 4);
  const mo = clean.slice(4, 6);
  const d = clean.slice(6, 8);

  if (clean.endsWith("Z")) {
    const h = clean.slice(9, 11) || "00";
    const mi = clean.slice(11, 13) || "00";
    const s = clean.slice(13, 15) || "00";
    return new Date(`${y}-${mo}-${d}T${h}:${mi}:${s}Z`);
  }

  if (clean.includes("T")) {
    const h = clean.slice(9, 11) || "00";
    const mi = clean.slice(11, 13) || "00";
    const s = clean.slice(13, 15) || "00";
    return new Date(`${y}-${mo}-${d}T${h}:${mi}:${s}${TIMEZONE_OFFSET}`);
  }

  return new Date(`${y}-${mo}-${d}T00:00:00${TIMEZONE_OFFSET}`);
}

function parseIcs(text: string): BusyRange[] {
  const blocks = text.split("BEGIN:VEVENT").slice(1);
  const ranges: BusyRange[] = [];

  for (const block of blocks) {
    const startMatch = block.match(/DTSTART[^:]*:([^\r\n]+)/);
    const endMatch = block.match(/DTEND[^:]*:([^\r\n]+)/);
    if (!startMatch || !endMatch) continue;

    const start = parseIcsDate(startMatch[1]);
    const end = parseIcsDate(endMatch[1]);
    if (!Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime())) {
      ranges.push({ start, end });
    }
  }

  return ranges;
}

function overlapsBusy(slotStart: Date, slotEnd: Date, busy: BusyRange[]): boolean {
  return busy.some((b) => slotStart < b.end && slotEnd > b.start);
}

export async function GET() {
  if (!ICS_URL) {
    return NextResponse.json(
      { error: "Agenda ainda não configurada. Defina GOOGLE_CALENDAR_ICS_URL." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(ICS_URL, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error("Falha ao buscar a agenda");
    const text = await res.text();
    const busy = parseIcs(text);

    const days: { date: string; label: string; slots: string[] }[] = [];
    const now = new Date();

    for (let i = 0; i < DAYS_AHEAD; i++) {
      const day = new Date(now);
      day.setDate(day.getDate() + i);
      if (CLOSED_WEEKDAYS.includes(day.getDay())) continue;

      const slots: string[] = [];
      const totalSlots = ((BUSINESS_END_HOUR - BUSINESS_START_HOUR) * 60) / SLOT_MINUTES;

      for (let n = 0; n < totalSlots; n++) {
        const minutesFromStart = n * SLOT_MINUTES;
        const hour = BUSINESS_START_HOUR + Math.floor(minutesFromStart / 60);
        const minute = minutesFromStart % 60;

        const slotStart = new Date(day);
        slotStart.setHours(hour, minute, 0, 0);
        const slotEnd = new Date(slotStart.getTime() + SLOT_MINUTES * 60000);

        if (slotStart < now) continue;
        if (!overlapsBusy(slotStart, slotEnd, busy)) {
          slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
        }
      }

      if (slots.length > 0) {
        days.push({
          date: day.toISOString().slice(0, 10),
          label: day.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit" }),
          slots,
        });
      }
    }

    return NextResponse.json({ days });
  } catch {
    return NextResponse.json({ error: "Não consegui carregar a agenda agora. Tenta de novo em instantes." }, { status: 500 });
  }
}
