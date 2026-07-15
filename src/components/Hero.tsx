export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-950/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Desenvolvedor Java Backend{' '} <br />
            <span className="text-purple-400">& Analista de Sistemas</span>
          </h1>
          <p className="text-purple-200 text-base md:text-lg mb-8">
            Desenvolvimento de aplicações backend com Java, Spring Boot, REST APIs, Hibernate, bancos relacionais, integrações de sistemas e boas práticas de engenharia de software.
          </p>
          <a
            href="#projetos"
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Ver Projetos
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
          alt="Notebook com código"
          className="flex-1 w-full max-w-sm md:max-w-lg mx-auto rounded-xl shadow-2xl border border-purple-700/30"
        />
      </div>
    </section>
  )
}
