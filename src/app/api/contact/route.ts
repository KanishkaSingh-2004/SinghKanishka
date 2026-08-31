import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields are missing: name, email, or message" },
        { status: 400 }
      );
    }

    // Mock secure telemetry logging
    console.log(`\n========================================`);
    console.log(`[INBOUND SECURE PACKET DISPATCH]`);
    console.log(`Sender Name  : ${name}`);
    console.log(`Sender Email : ${email}`);
    console.log(`Subject      : ${subject || "N/A"}`);
    console.log(`Message      : ${message}`);
    console.log(`STATUS       : TRANSMITTED (HTTP 200)`);
    console.log(`========================================\n`);

    return NextResponse.json({
      success: true,
      message: "Security handshake complete. Packet dispatched.",
    });
  } catch (error: any) {
    console.error("[CONTACT ERROR]:", error);
    return NextResponse.json(
      { error: "Internal server decryption error." },
      { status: 500 }
    );
  }
}
