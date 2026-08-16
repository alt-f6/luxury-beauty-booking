import { NextResponse } from "next/server";
import { contact } from "@/data/contact";

interface BookRequestBody {
  name?: string;
  phone?: string;
  service?: string;
  length?: string;
  comment?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const body = (await request.json()) as BookRequestBody;
  const { name, phone, service, length, comment } = body;

  if (!name || !phone || !service || !length) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn(
      "[api/book] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set — simulating success response.",
    );
    return NextResponse.json({ success: true, simulated: true });
  }

  const bakuTime = new Intl.DateTimeFormat("az-AZ", {
    timeZone: "Asia/Baku",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const text = [
    `\u{1F514} <b>YENİ QEYDİYYAT | ${escapeHtml(contact.telegramTag)}</b>`,
    "━━━━━━━━━━━━━━━━━━━━━",
    `\u{1F464} <b>Müştəri:</b> ${escapeHtml(name)}`,
    `\u{1F4DE} <b>Telefon:</b> ${escapeHtml(phone)}`,
    `\u{1F487} <b>Xidmət:</b> ${escapeHtml(service)}`,
    `\u{1F4CF} <b>Uzunluq:</b> ${escapeHtml(length)}`,
    `\u{1F4AC} <b>Qeyd:</b> ${escapeHtml(comment || "Qeyd yoxdur")}`,
    "━━━━━━━━━━━━━━━━━━━━━",
    `\u{1F4C5} <b>Tarix:</b> ${escapeHtml(bakuTime)}`,
  ].join("\n");

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      },
    );

    if (!telegramResponse.ok) {
      const errorBody = await telegramResponse.text();
      console.warn(
        "[api/book] Telegram API rejected the request — simulating success response.",
        errorBody,
      );
      return NextResponse.json({ success: true, simulated: true });
    }
  } catch (error) {
    console.warn(
      "[api/book] Telegram API request failed — simulating success response.",
      error,
    );
    return NextResponse.json({ success: true, simulated: true });
  }

  return NextResponse.json({ success: true, simulated: false });
}
