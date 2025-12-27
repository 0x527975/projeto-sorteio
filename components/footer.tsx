import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-[rgba(42,42,45,0.5)]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#00b3f1] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Zentra</span>
                <span className="text-[#00b3f1]">TECH</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Transformando ideias em soluções digitais inovadoras desde 2014.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
                asChild
              >
                <a href="https://instagram.com/zentratech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
                asChild
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Blindagem Patrimonial
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Assessoria Jurídica
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Assessoria Contábil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Receba novidades e dicas de tecnologia.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="seu@email.com"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-[#00b3f1] hover:bg-[#0180fe] text-white">Enviar</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 ZentraTECH. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
