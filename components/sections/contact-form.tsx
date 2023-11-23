'use client';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Textarea } from '../ui/textarea';
import { ContactFail } from './contact/fail';
import { ContactSending } from './contact/sending';
import { ContactSuccess } from './contact/success';

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

    function onSubmit(values: z.infer<typeof formSchema>) {
        setEmailState('sending');
        axios
            .post<{ send: 'ok' | 'fail' }>('/api/email/send', values)
            .then((response) => {
                if (response.data.send == 'ok') setEmailState('success');
                if (response.data.send == 'fail') setEmailState('fail');
            })
            .catch((err) => setEmailState('fail'));
    }

    return (
        <>
            {/* form */}
            {emailState === null && (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full py-12 mx-auto space-y-6 prose text-left max-w-prose dark:text-white"
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
