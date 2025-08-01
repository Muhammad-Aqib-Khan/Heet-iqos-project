import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOMjR68fV8TGpFw-lWbczPF_5JGAjcTNTFT0hSWk_Z5y8rlsmdXMv7z1B2C6nQW-o/exec';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { phone, email } = body;

    if (!phone || !email) {
      return NextResponse.json({ error: 'Missing phone or email' }, { status: 400 });
    }

    // Send only phone and email
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, email }),
    });

    const contentType = response.headers.get('content-type') || "";
    const result = contentType.includes("application/json")
      ? await response.json()
      : { result: await response.text() };

    if (result.result?.includes("success")) {
      return NextResponse.json({ status: 'ok' });
    } else {
      return NextResponse.json({ error: 'Google Sheet error', detail: result }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}
