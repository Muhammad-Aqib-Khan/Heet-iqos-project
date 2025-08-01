// File: /app/api/submit-order/route.ts (or /pages/api/submit-order.ts if you're using pages directory)

import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOMjR68fV8TGpFw-lWbczPF_5JGAjcTNTFT0hSWk_Z5y8rlsmdXMv7z1B2C6nQW-o/exec';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { Name, Phone, Email } = body;

    if (!Name || !Phone || !Email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, Phone, Email })
    });

    const result = await response.json();

    if (result?.result === 'success') {
      return NextResponse.json({ status: 'ok' });
    } else {
      return NextResponse.json({ error: 'Google Sheet error', detail: result }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}