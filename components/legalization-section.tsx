"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Scale, Shield, FileCheck } from "lucide-react"
import { motion } from "framer-motion"

export function LegalizationSection() {
  return (
    <section className="flex items-center justify-center px-4 relative overflow-hidden scroll-smooth h-screen min-h-screen">
      <div className="absolute inset-0 bg-[#0d0d0f]" />
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[rgba(0,179,241,0.1)] to-transparent" />
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-gradient-to-br from-[#00b3f1] to-[#0180fe]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-gradient-to-br from-[#0180fe] to-[#00b3f1]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* partículas flutuantes */}
      <motion.div
        className="absolute top-20 right-10 w-2 h-2 rounded-full bg-[#00b3f1]/40"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-1.5 h-1.5 rounded-full bg-[#0180fe]/50"
        animate={{ y: [0, -15, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-[#00b3f1]/60"
        animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card className="backdrop-blur-md border bg-[rgba(20,20,23,0.8)] border-[rgba(42,42,45,0.5)]">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                className="flex justify-center mb-8 gap-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 bg-[rgba(0,179,241,0.2)] border-[rgba(0,179,241,0.3)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Scale className="w-8 h-8 text-[#00b3f1]" />
                </motion.div>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 bg-[rgba(0,179,241,0.2)] border-[rgba(0,179,241,0.3)]"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-8 h-8 text-[#00b3f1]" />
                </motion.div>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 bg-[rgba(0,179,241,0.2)] border-[rgba(0,179,241,0.3)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FileCheck className="w-8 h-8 text-[#00b3f1]" />
                </motion.div>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                {"Conectamos você às principais "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
                  legalizações
                </span>
                {", com as melhores condições do mercado"}
              </motion.h2>

              <motion.div
                className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <p>
                  Trabalhamos com capitalizações, loterias estaduais e autorizações regulamentadas do segmento para seu sorteio estar 100% dentro da lei.
                </p>
                <p className="font-semibold text-xl text-[#00b3f1]">
                  Aqui você não precisa pagar nada para legalizar o seu sorteio. Te apresentamos os formatos e unimos você, cliente, aos responsáveis de cada processo.
                </p>
              </motion.div>
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
