"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-4 relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0" style={{ backgroundColor: "#09090b" }} />
      <div
        className="absolute bottom-0 left-0 right-0 h-[600px]"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(0, 179, 241, 0.25), rgba(1, 128, 254, 0.15), rgba(0, 179, 241, 0.08), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(0, 179, 241, 0.3) 0%, rgba(1, 128, 254, 0.2) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(1, 128, 254, 0.3) 0%, rgba(0, 179, 241, 0.2) 50%, transparent 100%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-sm font-semibold mb-4" style={{ color: "#00b3f1" }}>
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {"Soluções digitais "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
              >
                personalizadas
              </span>
              {" para seu negócio"}
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p>
              Na Zentra Tech, desenvolvemos sites, sistemas e plataformas digitais totalmente personalizados, criados do zero para refletir a identidade, os objetivos e as necessidades de cada cliente.
            </p>
            <p>
              Nossos projetos unem design exclusivo, tecnologia moderna, segurança e alta performance, entregando soluções sob medida que fortalecem a presença digital e impulsionam resultados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
