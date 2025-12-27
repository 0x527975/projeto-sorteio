import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800"
      style={{ backgroundColor: "rgba(9, 9, 11, 0.8)", borderColor: "#2a2a2d", height: "72px" }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#00b3f1" }}
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-white">Zentra</span>
            <span style={{ color: "#00b3f1" }}>TECH</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-gray-400 hover:text-white transition-colors nav-link-progress">
            Home
          </Link>
          <Link href="#servicos" className="text-gray-400 hover:text-white transition-colors nav-link-progress">
            Serviços
          </Link>
          <Link href="#contato" className="text-gray-400 hover:text-white transition-colors nav-link-progress">
            Contato
          </Link>
        </nav>

        <Button
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30"
          style={{
            backgroundImage: "linear-gradient(to right, #0180fe, #00b3f1)",
            boxShadow: "0 10px 30px rgba(0, 179, 241, 0.3)",
          }}
        >
          Fale Conosco
        </Button>
      </div>
    </header>
  )
}
