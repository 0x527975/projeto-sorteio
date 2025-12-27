"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center px-4 overflow-hidden scroll-smooth h-screen min-h-screen">
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full blur-[120px] bg-gradient-to-br from-[#00b3f1] to-[#0180fe]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-[450px] h-[450px] rounded-full blur-[130px] bg-gradient-to-br from-[#0180fe] to-[#00b3f1]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[110px] bg-[rgba(0,179,241,0.15)]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto relative z-10 h-full flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm bg-[rgba(0,179,241,0.1)] border-[rgba(0,179,241,0.3)]">
              <Zap className="w-4 h-4 text-[#00b3f1]" />
              <span className="text-sm font-medium text-[#00b3f1]">
                Legalização de Sorteios
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {"Legalize seus sorteios com "}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b3f1] via-[#0180fe] to-[#00b3f1] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              segurança e tecnologia
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Transforme seus sorteios em operações 100% legais com nossa expertise em legalização via LOTEP e serviços especializados.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              onClick={() => {
                const element = document.getElementById("contato")
                element?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="group relative text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-r from-[#00b3f1] to-[#0180fe] shadow-[0_10px_40px_rgba(0,179,241,0.3)]"
            >
              <span className="relative z-10 flex items-center">
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("sobre")
                element?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              variant="outline"
              className="group relative px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg bg-transparent rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-cyan-500/10 border-[rgba(0,179,241,0.3)] text-[#00b3f1]"
            >
              <span className="relative z-10">Saiba Mais</span>
              <div className="absolute inset-0 border-2 rounded-2xl border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl px-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              100%
            </div>
            <div className="text-gray-400 mt-2">Legalizado</div>
          </motion.div>
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              500+
            </div>
            <div className="text-gray-400 mt-2">Sorteios Realizados</div>
          </motion.div>
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              10+
            </div>
            <div className="text-gray-400 mt-2">Anos de Experiência</div>
          </motion.div>
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              R$ 0
            </div>
            <div className="text-gray-400 mt-2">Custo de Legalização</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Role para ver mais</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-6 h-6 text-[#00b3f1]/60"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
