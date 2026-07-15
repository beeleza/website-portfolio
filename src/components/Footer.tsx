export default function Footer() {
  return (
    <footer className="py-8 bg-purple-950 border-t border-purple-700/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-purple-400">
        <span>Desenvolvido por Higor Beleza</span>
        <span>&copy; {new Date().getFullYear()} Beeleza. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
