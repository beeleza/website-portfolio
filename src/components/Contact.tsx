import { FiMail, FiGithub } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'

const contacts = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'higorbeleza.dev@gmail.com',
    href: 'mailto:higorbeleza.dev@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/higor-beleza-dev',
    href: 'https://linkedin.com/in/higor-beleza-dev',
  },
  {
    icon: SiDiscord,
    label: 'Discord',
    value: '@_lolzcec_',
    href: 'https://discord.com/users/_lolzcec_',
  },
  {
    icon: FiGithub,
    label: 'Github',
    value: 'beeleza',
    href: 'https://github.com/beeleza',
  }
]

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-purple-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Contato
        </h2>
        <p className="text-purple-300 text-center mb-12">
          Tem um projeto em mente ou quer trocar uma ideia?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-purple-900/40 border border-purple-700/30 hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-base font-medium text-purple-200">{contact.label}</span>
                <span className="text-purple-400 text-sm text-center break-all">{contact.value}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
