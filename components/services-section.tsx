"use client"

import { Shield, Scale, FileText, TrendingUp, Code, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const bonusServices = [
  {
    icon: Award,
    title: "Legalização via LOTEP",
    shortDescription: "Nosso principal serviço: estruturação jurídica e regulatória de operações autorizadas pela LOTEP.",
    fullDescription:
      "Atuamos na estruturação jurídica e regulatória de operações autorizadas pela LOTEP, assegurando o correto enquadramento legal, cumprimento das normas regulatórias, requisitos de autorização, fiscalização e transparência, garantindo segurança jurídica e regularidade das operações. Nosso maior objetivo é legalizar sorteios - nosso serviço principal.",
    highlight: true,
    isMain: true,
  },
  {
    icon: Shield,
    title: "Blindagem Patrimonial",
    shortDescription: "Estratégia legal e preventiva para proteger bens pessoais e empresariais.",
    fullDescription:
      "A blindagem patrimonial é uma estratégia legal e preventiva para proteger bens pessoais e empresariais contra riscos jurídicos, dívidas e imprevistos. Por meio de uma estruturação jurídica adequada, garante mais segurança, organização e continuidade do patrimônio.",
  },
  {
    icon: Scale,
    title: "Assessoria Jurídica",
    shortDescription: "Assessoria especializada na regulamentação de sorteios e promoções.",
    fullDescription:
      "Oferecemos assessoria jurídica especializada na regulamentação de sorteios e promoções, garantindo que todas as ações estejam em conformidade com a legislação vigente, evitando riscos, penalidades e bloqueios. Atuamos do planejamento à regularização, trazendo segurança jurídica e tranquilidade para sua operação.",
  },
  {
    icon: FileText,
    title: "Assessoria Contábil",
    shortDescription: "Assessoria contábil estratégica para organização financeira e conformidade fiscal.",
    fullDescription:
      "Oferecemos assessoria contábil estratégica para garantir organização financeira, conformidade fiscal e segurança tributária. Atuamos no controle, planejamento e acompanhamento contábil, apoiando decisões e garantindo a regularidade da empresa.",
  },
  {
    icon: TrendingUp,
    title: "Estratégias de Alavancagem de Vendas",
    shortDescription: "Estratégias focadas em aumentar vendas, escalar resultados e otimizar conversões.",
    fullDescription:
      "Desenvolvemos estratégias focadas em aumentar vendas, escalar resultados e otimizar conversões, utilizando automações, funis e inteligência de dados para gerar crescimento consistente e previsível.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    shortDescription: "Sites, sistemas e plataformas digitais totalmente personalizados.",
    fullDescription:
      "Na Zentra Tech, desenvolvemos sites, sistemas e plataformas digitais totalmente personalizados, criados do zero para refletir a identidade, os objetivos e as necessidades de cada cliente. Nossos projetos unem design exclusivo, tecnologia moderna, segurança e alta performance, entregando soluções sob medida que fortalecem a presença digital e impulsionam resultados.",
  },
]

function ServiceCard({ service, index }: { service: typeof bonusServices[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <motion.div
        className={`bg-gradient-to-br from-gray-950/50 to-slate-900/50 border backdrop-blur-sm relative overflow-hidden group rounded-xl flex flex-col ${
          service.highlight ? "border-cyan-500/60 ring-2 ring-cyan-500/20" : "border-gray-800/60"
        }`}
        initial={{ y: 0 }}
        whileHover={{
          y: -8,
          boxShadow: "0 20px 40px rgba(0, 179, 241, 0.3), 0 0 30px rgba(0, 179, 241, 0.2)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="p-6 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-14 h-14 bg-gradient-to-br from-blue-950/40 to-cyan-950/40 rounded-xl flex items-center justify-center border border-blue-900/30 transition-all duration-300 group-hover:scale-105 ${
                service.highlight ? "from-cyan-950/60 to-blue-950/60 border-cyan-500/40" : ""
              }`}
            >
              <service.icon
                className={`w-7 h-7 ${
                  service.highlight ? "text-cyan-400" : "text-cyan-400"
                }`}
              />
            </div>
            {service.isMain && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all duration-300 group-hover:bg-cyan-500/30">
                Principal
              </span>
            )}
          </div>
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-100 transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-3 group-hover:text-gray-300 transition-colors duration-200">
            {service.shortDescription}
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="border-none">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-xs py-2 hover:no-underline transition-colors duration-300">
                Ver mais detalhes
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm leading-relaxed pt-0 pb-2">
                {service.fullDescription}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section id="servicos" className="px-4 relative overflow-hidden scroll-smooth min-h-screen py-12">
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-[150px] bg-gradient-to-br from-[#00b3f1] to-[#0180fe]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full blur-[130px] bg-gradient-to-br from-[#0180fe] to-[#00b3f1]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative z-10 w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-cyan-400 text-sm font-semibold mb-4 relative inline-block">
              Serviços Complementares
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#00b3f1] to-[#0180fe] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {"Além da legalização, oferecemos "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">serviços especializados</span>
              {" para seu negócio"}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Complemente seu sorteio legalizado com nossos serviços especializados. Legalização via LOTEP é nosso serviço principal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {bonusServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
