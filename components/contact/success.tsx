export function ContactSuccess({ name, subject }: { name: string; subject: string }) {
    return (
        <div className="p-4 mx-auto mt-12 border border-green-500 border-dashed rounded bg-green-500/5 max-w-prose text-muted-foreground">
            <h3 className="text-lg font-bold text-foreground">Recebi sua mensagem! 🚀 </h3>
            <br />
            <p>
                Oi <b className="text-foreground">{name}</b>,
            </p>
            <br />
            <p>
                Obrigado pelo seu contato! Sua mensagem sobre{' '}
                <b className="text-foreground">{subject}</b> chegou com sucesso à minha caixa de
                entrada. 😊 Estou ansioso para ler o que você tem a dizer.
            </p>
            <br />
            <p>Prometo responder o mais rápido possível!</p>
            <br />
            <p>
                Atenciosamente,
                <br /> <b className="text-foreground">Mauricio Roberto</b>
            </p>
        </div>
    );
}
