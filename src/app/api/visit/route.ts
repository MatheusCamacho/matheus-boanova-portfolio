import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "mbc_visit_alert";
const COOKIE_TTL_SECONDS = 60 * 60 * 24;
const BOT_PATTERN =
  /bot|crawler|spider|slurp|preview|facebookexternalhit|whatsapp|discordbot|telegrambot|linkedinbot|googleother|headless/i;

function currentPage(request: NextRequest) {
  const referer = request.headers.get("referer");

  if (!referer) return "/";

  try {
    const url = new URL(referer);
    return url.pathname || "/";
  } catch {
    return "/";
  }
}

function formatVisitTime() {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin || origin !== request.nextUrl.origin) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  if (request.cookies.get(COOKIE_NAME)?.value === "1") {
    return NextResponse.json({ ok: true, status: "already-notified" });
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (BOT_PATTERN.test(userAgent)) {
    return NextResponse.json({ ok: true, status: "ignored-bot" });
  }

  const enabled = process.env.VISIT_ALERT_ENABLED === "true";
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.VISIT_ALERT_TO;
  const from = process.env.VISIT_ALERT_FROM;

  if (!enabled || !apiKey || !to || !from) {
    return NextResponse.json({ ok: true, status: "disabled" });
  }

  const page = currentPage(request);
  const visitedAt = formatVisitTime();

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "Nova visita no seu portfólio",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 16px">Seu portfólio recebeu uma nova visita.</h2>
          <p style="margin:0 0 8px"><strong>Página:</strong> ${page}</p>
          <p style="margin:0"><strong>Horário:</strong> ${visitedAt}</p>
          <p style="margin:24px 0 0;color:#666;font-size:13px">Nenhum IP, localização ou dado pessoal do visitante foi armazenado por este aviso.</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    const details = await resendResponse.text();
    console.error("Visit alert email failed:", details);
    return NextResponse.json({ ok: false, status: "email-failed" }, { status: 502 });
  }

  const response = NextResponse.json({ ok: true, status: "sent" });
  response.cookies.set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: COOKIE_TTL_SECONDS,
    path: "/",
  });

  return response;
}
