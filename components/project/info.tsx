export function ProjectInfo({ role, year }: { role: string; year: string }) {
    return (
        <div className="col-span-4 pl-8 border-l h-min">
            <h2 className="sr-only">Detalhes</h2>
            <h3 className="mb-0 text-base">Role</h3>
            <p>{role}</p>
            <h3 className="mb-0 text-base">Ano</h3>
            <p>{year}</p>
        </div>
    );
}
