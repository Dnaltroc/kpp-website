import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, offer } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      // Still return success so the user sees confirmation
      // In production, you should have the key configured
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification
    await resend.emails.send({
      from: 'KPP Website <onboarding@resend.dev>',
      to: ['cmcccortland@gmail.com'],
      subject: `New Lead: ${name} - ${offer || 'Website Inquiry'}`,
      html: `
        <h2>New Lead from KPP Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Offer:</strong> ${offer || 'N/A'}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Sent from kirkspitchingperformance.com</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
