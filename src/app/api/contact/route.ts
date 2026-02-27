import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message, engagementType } = await request.json()

  await resend.emails.send({
    from: 'Stack and Scale <onboarding@resend.dev>',
    to: 'dchancogne@gmail.com',
    subject: `New inquiry from ${name}`,
    html: `
      <h2>New Inquiry — Stack and Scale</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${engagementType ? `<p><strong>Interested In:</strong> ${engagementType}</p>` : ''}
      ${message ? `<p><strong>Message:</strong><br>${message}</p>` : ''}
      <hr>
      <p>Reply directly to this email to respond.</p>
    `,
    replyTo: email,
  })

  return NextResponse.json({ success: true })
}
