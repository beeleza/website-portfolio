import { FiGithub, FiExternalLink } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

const projects = [
  {
    title: 'Sistema de Gestão de Pedidos',
    description: 'API RESTful para gerenciamento de pedidos com autenticação JWT, Swagger e integração com banco PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'Microserviço de Pagamentos',
    description: 'Microsserviço para processamento de pagamentos com Spring Boot, Docker e comunicação assíncrona via RabbitMQ.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'API de Controle Financeiro',
    description: 'Backend para controle financeiro pessoal com CRUD completo, relatórios e deploy containerizado com Docker Compose.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-purple-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Projetos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} className={`transition-delay-${i * 100}`}>
              <div className="flex flex-col h-full rounded-xl bg-purple-900/40 border border-purple-700/30 hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 overflow-hidden">
                <a href={project.demo !== '#' ? project.demo : project.github}>
                  <img
                    className="w-full h-48 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-purple-300 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="inline-flex items-center text-purple-300 bg-purple-800/50 border border-purple-700/30 hover:bg-purple-700/50 hover:text-white focus:ring-4 focus:ring-purple-700/50 font-medium text-sm rounded-lg px-4 py-2.5 transition-all"
                    >
                      <FiGithub className="w-4 h-4 mr-1.5" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center text-purple-300 bg-purple-800/50 border border-purple-700/30 hover:bg-purple-700/50 hover:text-white focus:ring-4 focus:ring-purple-700/50 font-medium text-sm rounded-lg px-4 py-2.5 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4 mr-1.5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
