'use server';

import { contactSchema } from '@/schemas';
import { ContactMessage } from '@/types';
import axios from 'axios';

export async function sendContact(contact: ContactMessage) {
    try {
        const WEBHOOK = process.env.WEBHOOK_CONTACT!;
        const result = contactSchema.parse(contact);
        const { name, email, subject, message } = result;
        const messageData = {
            embeds: [
                {
                    title: 'Mensagem de contato',
                    fields: [
                        {
                            name: 'Name',
                            value: name,
                        },
                        {
                            name: 'E-mail',
                            value: email,
                        },
                        {
                            name: 'Assunto',
                            value: subject,
                        },
                        {
                            name: 'Mensagem',
                            value: message,
                        },
                    ],
                },
            ],
        };

        await axios.post(WEBHOOK, messageData);

        return 'ok';
    } catch (error) {
        console.error(error);
        return 'fail';
    }
}
