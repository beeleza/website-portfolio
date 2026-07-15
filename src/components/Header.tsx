export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm border-b border-purple-800/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-purple-300">Beeleza</span>

        <nav className="flex items-center gap-6 text-sm text-purple-200">
          <a href="#sobre" className="hidden md:inline hover:text-white transition-colors">Sobre</a>
          <a href="#projetos" className="hidden md:inline hover:text-white transition-colors">Projetos</a>
          <a href="#contato" className="hidden md:inline hover:text-white transition-colors">Contato</a>
          <a
            href="#contato"
            className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Fale comigo
          </a>
        </nav>
      </div>
    </header>
  )
}
