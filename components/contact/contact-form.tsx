'use client';
import { sendContact } from '@/actions/contact';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ContactFail } from './fail';
import { ContactSending } from './sending';
import { ContactSuccess } from './success';

const formSchema = z.object({
    name: z.string().min(3, 'Ops, não conheço nenhum nome com menos de 3 letras.'),
    email: z.string().email('Deve ser um email válido'),
    subject: z.string().min(3, 'Diga qual é o assunto por gentileza'),
    message: z.string().min(10, 'Preciso ter mais detalhes sobre o assunto'),
});

export function ContactForm() {
    const [emailState, setEmailState] = useState<'sending' | 'success' | 'fail' | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setEmailState('sending');

        const res = await sendContact(values);

        if (res == 'ok') setEmailState('success');
        if (res == 'fail') setEmailState('fail');
    }

    return (
        <>
            {/* form */}
            {emailState === null && (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-6 prose text-left max-w-prose dark:text-white"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Input className="h-12" placeholder="Nome" {...field} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Input
                                        className="h-12"
                                        type="email"
                                        placeholder="Email"
                                        {...field}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <Input className="h-12" placeholder="Assunto" {...field} />

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <Textarea
                                        className="h-12"
                                        placeholder="Sua mensagem..."
                                        {...field}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full h-12 uppercase">
                            Enviar
                        </Button>
                    </form>
                </Form>
            )}
            {/* success */}
            {emailState === 'success' && (
                <ContactSuccess name={form.getValues().name} subject={form.getValues().subject} />
            )}
            {/* fail */}
            {emailState === 'fail' && <ContactFail />}
            {/* loading */}
            {emailState === 'sending' && <ContactSending />}
        </>
    );
}
