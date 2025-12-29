import {
  Users,
  MessageSquare,
  Share2,
  Send,
  Bot,
  BarChart3,
  Wallet,
  Globe,
  GitBranch,
  MessageCircle,
  Code,
  Search,
} from "lucide-react"

const features = [
  { icon: Users, title: "Múltiplos atendentes e equipes" },
  { icon: MessageSquare, title: "Gestão das conversas" },
  { icon: Share2, title: "Múltiplos canais" },
  { icon: Send, title: "Disparo em massa" },
  { icon: Bot, title: "Chatbot" },
  { icon: BarChart3, title: "Indicadores" },
  { icon: Wallet, title: "Pagamentos" },
  { icon: Globe, title: "Web" },
  { icon: GitBranch, title: "CRM" },
  { icon: MessageCircle, title: "Botão de WhatsApp na Web" },
  { icon: Code, title: "API de integração" },
  { icon: Search, title: "Rastreabilidade do lead" },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/70 to-blue-600" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance leading-tight">
            Potencialize a sua gestão com soluções
            <br />
            exclusivas do ZENTRATECH
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-blue-900/60 rounded-full flex items-center justify-center mb-4 border border-blue-700/50 backdrop-blur-sm group-hover:bg-blue-800/70 group-hover:scale-105 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-blue-200 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-white text-xs md:text-sm font-medium leading-tight px-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
