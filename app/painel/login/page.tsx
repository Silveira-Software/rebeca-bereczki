"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PainelLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/painel-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Não consegui entrar.");
        setLoading(false);
        return;
      }
      router.push("/painel");
      router.refresh();
    } catch {
      setError("Erro de conexão. Tenta de novo.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-white-warm px-5">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-lg border border-wine/10 bg-cream p-10">
        <p className="eyebrow">Painel privado</p>
        <h1 className="mt-3 text-lg text-wine">Acesso restrito</h1>
        <p className="mt-2 text-sm text-muted">Só a Dra. Rebeca tem a senha deste painel.</p>

        <label htmlFor="painel-password" className="mt-8 block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
          Senha
        </label>
        <input
          id="painel-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-md border border-old-rose/40 bg-white px-4 py-3 text-sm"
          autoFocus
        />

        {error && <p className="mt-3 text-sm text-accent-deep">{error}</p>}

        <button type="submit" disabled={loading} className="btn btn-primary mt-6 w-full justify-center disabled:opacity-60">
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
