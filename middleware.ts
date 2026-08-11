import { NextRequest, NextResponse } from "next/server";

/**
 * Protege tudo em /painel (menos /painel/login) atrás de uma
 * sessão simples baseada em cookie. Configure a variável de
 * ambiente PAINEL_SESSION_TOKEN na Vercel — qualquer string
 * longa e aleatória serve (não precisa ser memorizável, só a
 * senha em PAINEL_PASSWORD precisa).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/painel") || pathname.startsWith("/painel/login")) {
    return NextResponse.next();
  }

  const session = request.cookies.get("painel_session")?.value;
  const expected = process.env.PAINEL_SESSION_TOKEN;

  if (!expected || session !== expected) {
    const loginUrl = new URL("/painel/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/painel/:path*"],
};
