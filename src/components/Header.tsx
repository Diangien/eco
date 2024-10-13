export const Header = () => {

    return (
        <header className="bg-[#008C04] px-2  py-3 flex  items-center justify-between md:px-4 text-white">
            <h2 className="bg-white text-black font-bold px-3 rounded-3xl">Ecoação</h2>
            <nav className="flex gap-2 md:gap-4">
                <a>Início</a>
                <a>Sobre</a>
                <a>Projectos</a>
            </nav>
            <button className="bg-white text-black px-3 py-1">
                Participe
            </button>
        </header>
    )
}