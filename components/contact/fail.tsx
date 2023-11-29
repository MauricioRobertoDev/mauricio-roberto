export function ContactFail() {
    return (
        <div className="p-4 mx-auto mt-12 border border-red-500 border-dashed rounded bg-red-500/5 max-w-prose text-muted-foreground">
            <h3 className="text-lg font-bold text-foreground">Eita deu ruim! 😅 </h3>
            <br />
            <p>
                Ops! Parece que tivemos um problema ao enviar sua mensagem. Não se preocupe, estou
                ciente e trabalhando para resolver isso.
            </p>
            <br />
            <p>
                Por favor, considere entrar em contato através de outras opções disponíveis listadas
                acima do formulário.
            </p>
            <br />
            <p>Agradeço pela compreensão e paciência.</p>
            <br />
            <p>
                Atenciosamente,
                <br /> <b className="text-foreground">Mauricio Roberto</b>
            </p>
        </div>
    );
}
