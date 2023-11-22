export function Separator() {
    return (
        <div className="container flex items-center justify-center gap-12 mx-auto opacity-5 dark:opacity-10">
            <div className="flex-1 h-0.5 bg-foreground rounded-full"></div>
            <div className="flex-grow-0 w-8 h-8 rotate-45 border-2 border-foreground"></div>
            <div className="flex-1 h-0.5 bg-foreground rounded-full"></div>
        </div>
    );
}
