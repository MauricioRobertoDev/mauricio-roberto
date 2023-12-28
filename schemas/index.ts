import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(3, 'Ops, não conheço nenhum nome com menos de 3 letras.'),
    email: z.string().email('Deve ser um email válido'),
    subject: z.string().min(3, 'Diga qual é o assunto por gentileza'),
    message: z.string().min(10, 'Preciso ter mais detalhes sobre o assunto'),
});

export { contactSchema };
