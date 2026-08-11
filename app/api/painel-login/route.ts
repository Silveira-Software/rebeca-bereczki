import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { password } = await request.json().catch(() => ({ password: "" }));

  const expectedPassword = process.env.PAINEL_PASSWORD;
  const sessionToken = process.env.PAINEL_SESSION_TOKEN;

  if (!expectedPassword || !sessionToken) {
    return NextResponse.json({ error: "Painel ainda não configurado." }, { status: 503 });
  }

  if (password !== expectedPassword) {
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("painel_session", sessionToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
  });
  return response;
}
