import { FaJava } from 'react-icons/fa'
import { SiSpringboot, SiSwagger, SiDocker, SiPostgresql } from 'react-icons/si'
import { TbServerCog } from 'react-icons/tb'
import ScrollReveal from './ScrollReveal'

const skills = [
  { icon: FaJava, name: 'Java', description: 'Linguagem robusta para aplicações escaláveis e de alto desempenho' },
  { icon: SiSpringboot, name: 'Spring Boot', description: 'Framework para criação de APIs RESTful e microsserviços' },
  { icon: SiSwagger, name: 'APIs REST', description: 'Design e desenvolvimento de APIs RESTful documentadas' },
  { icon: TbServerCog, name: 'Microsserviços', description: 'Arquitetura distribuída para sistemas escaláveis' },
  { icon: SiDocker, name: 'Docker', description: 'Containerização e deploy consistente entre ambientes' },
  { icon: SiPostgresql, name: 'PostgreSQL', description: 'Banco relacional avançado e confiável' },
]

const sobreMim = `Estou cursando Superior em Análise e Desenvolvimento de Sistemas e possuo especialização em Java pela EBAC. Minha trajetória na tecnologia começou com a curiosidade de entender como as coisas funcionam por trás dos sistemas que usamos no dia a dia.

Ao longo do meu desenvolvimento, foquei em construir bases sólidas em desenvolvimento backend, arquitetura de software e boas práticas de engenharia. Acredito que código bem estruturado é a chave para sistemas confiáveis e escaláveis.

Meu objetivo é atuar como desenvolvedor backend, contribuindo para projetos que desafiam tecnicamente e impactam positivamente as pessoas.`

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-purple-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Sobre mim
          </h2>
          <div className="space-y-4">
            {sobreMim.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-purple-300 text-lg leading-relaxed text-center">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-10">
          Hard Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <ScrollReveal key={skill.name} className={`transition-delay-${i * 100}`}>
                <div className="group flex items-start gap-5 p-6 rounded-xl bg-purple-900/40 border border-purple-700/30 hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-default">
                  <Icon className="w-10 h-10 text-purple-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                    <p className="text-purple-300 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-purple-500 shrink-0 mt-2 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
