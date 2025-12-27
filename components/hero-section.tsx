"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center px-4 overflow-hidden scroll-smooth" style={{ height: "100vh", minHeight: "100vh" }}>
      <div className="absolute inset-0" style={{ backgroundColor: "#09090b" }} />

      <div
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse-slow"
        style={{ backgroundColor: "rgba(0, 179, 241, 0.2)" }}
      />
      <div
        className="absolute bottom-10 right-20 w-[450px] h-[450px] rounded-full blur-[130px] animate-pulse-slower"
        style={{ backgroundColor: "rgba(1, 128, 254, 0.15)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[110px]"
        style={{ backgroundColor: "rgba(0, 179, 241, 0.1)" }}
      />

      <div className="container mx-auto relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 w-full" style={{ maxHeight: "calc(100vh - 72px)", overflow: "auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
              style={{ backgroundColor: "rgba(0, 179, 241, 0.1)", borderColor: "rgba(0, 179, 241, 0.3)" }}
            >
              <Zap className="w-4 h-4" style={{ color: "#00b3f1" }} />
              <span className="text-sm font-medium" style={{ color: "#00b3f1" }}>
                Legalização de Sorteios
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {"Legalize seus sorteios com "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
            >
              segurança e tecnologia
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Legalize seu projeto com segurança e tecnologia com a Zentra Tech.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              className="group relative text-white px-8 py-6 text-lg rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)",
                boxShadow: "0 10px 40px rgba(0, 179, 241, 0.3)",
              }}
            >
              <span className="relative z-10 flex items-center">
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button
              variant="outline"
              className="group relative text-white px-8 py-6 text-lg bg-transparent rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-cyan-500/10"
              style={{ borderColor: "rgba(0, 179, 241, 0.3)", color: "#00b3f1" }}
            >
              <span className="relative z-10">Saiba Mais</span>
              <div className="absolute inset-0 border-2 rounded-2xl border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
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
            <div
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all"
              style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
            >
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
            <div
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all"
              style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
            >
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
            <div
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all"
              style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
            >
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
            <div
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all"
              style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
            >
              R$ 0
            </div>
            <div className="text-gray-400 mt-2">Custo de Legalização</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
