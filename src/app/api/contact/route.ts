import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.fullName || !body?.email || !body?.service || !body?.description) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // ponytail: stores inquiries in server logs until email/CRM is configured
    console.info("[contact-inquiry]", {
      fullName: body.fullName,
      email: body.email,
      company: body.company ?? null,
      service: body.service,
      package: body.package || null,
      budget: body.budget ?? null,
      description: body.description,
      reference: body.reference || null,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
