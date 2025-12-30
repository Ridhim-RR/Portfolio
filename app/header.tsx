export default function Header() {
    return (
        <header className="w-full mb-4">
            <nav className="mx-auto flex max-w-4xl items-center gap-8 px-4 py-6 md:px-8 lg:px-12 text-[var(--matrix-green)] cursor-pointer">
                <h1 className="text-2xl font-bold ">Home</h1>
                <h1 className="text-2xl font-bold">Projects</h1>
                <h1 className="text-2xl font-bold">Open Source</h1>
                <h1 className="text-2xl font-bold">Blog</h1>
            </nav>
        </header>
    );
}