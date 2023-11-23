import ContactEmail from '@/app/emails/contact';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: process.env.RESEND_API_EMAIL as string,
            to: 'mauricio.roberto.dev@gmail.com',
            subject: subject,
            react: ContactEmail({ name, email, subject, message }),
        });

        if (error) {
            console.log(error);
            return NextResponse.json({ send: 'fail' });
        }

        return NextResponse.json({ send: 'ok' });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ send: 'fail' });
    }
}
