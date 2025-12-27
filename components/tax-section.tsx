import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function TaxSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/40 via-slate-950 to-black" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-900/20 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Se você ganhou prêmios acima de R$ 40.000,00 no último ano, a declaração no Imposto de Renda é
              obrigatória.
            </h2>
            <Button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-6 text-sm font-semibold transition-all duration-300 uppercase tracking-wide">
              SOLICITE SEU INFORME DE RENDIMENTOS 2024 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-transparent z-10" />
              <Image
                src="/smartphone-showing-receita-federal-tax-app-on-desk.jpg"
                alt="Receita Federal App"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
