// src/app/api/submit-contact/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

function getNowIST() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);
  return {
    year:   istDate.getUTCFullYear(),
    month:  istDate.getUTCMonth() + 1,
    day:    istDate.getUTCDate(),
    hour:   istDate.getUTCHours(),
    minute: istDate.getUTCMinutes(),
  };
}

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, email, phone, linkedin, notes, preferredDate, preferredTime, recaptchaToken } = body;

  if (!fullName || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // ── Verify reCAPTCHA ──────────────────────────────────────────────────────
  if (!recaptchaToken) {
    return NextResponse.json({ error: "reCAPTCHA token missing." }, { status: 400 });
  }

  const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const recaptchaData = await recaptchaRes.json();

  console.log("reCAPTCHA result:", recaptchaData);

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
  }

  // ── Build event times ─────────────────────────────────────────────────────
  const hasDateAndTime =
    typeof preferredDate === "string" && preferredDate.trim() !== "" &&
    typeof preferredTime === "string" && preferredTime.trim() !== "";

  let startISO: string;
  let endISO: string;

  if (hasDateAndTime) {
    startISO = `${preferredDate.trim()}T${preferredTime.trim()}:00+05:30`;
    const start = new Date(startISO);
    endISO = new Date(start.getTime() + 60 * 60 * 1000).toISOString();
  } else {
    // 30 min from now in IST
    const now = getNowIST();
    const startDate = new Date(
      `${now.year}-${String(now.month).padStart(2,"0")}-${String(now.day).padStart(2,"0")}T${String(now.hour).padStart(2,"0")}:${String(now.minute).padStart(2,"0")}:00+05:30`
    );
    const startPlus30 = new Date(startDate.getTime() + 30 * 60 * 1000);
    const endPlus90   = new Date(startDate.getTime() + 90 * 60 * 1000);

    const fmt = (d: Date) => {
      const istD = new Date(d.getTime() + 5.5 * 60 * 60 * 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      return `${istD.getUTCFullYear()}-${pad(istD.getUTCMonth()+1)}-${pad(istD.getUTCDate())}T${pad(istD.getUTCHours())}:${pad(istD.getUTCMinutes())}:00+05:30`;
    };

    startISO = fmt(startPlus30);
    endISO   = fmt(endPlus90);
  }

  console.log("=== CALENDAR DEBUG ===");
  console.log("hasDateAndTime:", hasDateAndTime);
  console.log("startISO:", startISO);
  console.log("endISO:  ", endISO);
  console.log("reCAPTCHA score:", recaptchaData.score);
  console.log("======================");

  // ── Google Calendar ───────────────────────────────────────────────────────
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary: `Call Request: ${fullName}`,
      description: [
        `Name:     ${fullName}`,
        `Email:    ${email}`,
        phone    ? `Phone:    ${phone}`    : null,
        linkedin ? `LinkedIn: ${linkedin}` : null,
        ``,
        `Notes:`,
        notes || "(none)",
        ``,
        hasDateAndTime
          ? `Requested slot: ${preferredDate} at ${preferredTime}`
          : `No slot selected — auto-scheduled 30min from submission`,
        ``,
        `Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
      ].filter((l) => l !== null).join("\n"),

      start: { dateTime: startISO, timeZone: "Asia/Kolkata" },
      end:   { dateTime: endISO,   timeZone: "Asia/Kolkata" },
      colorId: "2",

      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 60 },
          { method: "popup", minutes: 30 },
        ],
      },
    };

    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    if (!calendarId) {
      return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
    }

   const response = await calendar.events.insert({
  calendarId,
  requestBody: event,
});

    console.log("✅ Event created:", response.data.htmlLink);
    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("❌ Calendar API error:", err?.message || err);
    return NextResponse.json({ error: "Failed to save. Please try again." }, { status: 500 });
  }
}