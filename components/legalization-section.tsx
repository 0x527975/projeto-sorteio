"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Scale, Shield, FileCheck } from "lucide-react"
import { motion } from "framer-motion"

export function LegalizationSection() {
  return (
    <section className="flex items-center justify-center px-4 relative overflow-hidden scroll-smooth" style={{ height: "100vh", minHeight: "100vh" }}>
      <div className="absolute inset-0" style={{ backgroundColor: "#0d0d0f" }} />
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

      <div className="container mx-auto relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full" style={{ maxHeight: "calc(100vh - 72px)", overflow: "auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card
              className="backdrop-blur-md border"
              style={{ backgroundColor: "rgba(20, 20, 23, 0.8)", borderColor: "rgba(42, 42, 45, 0.5)" }}
            >
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                className="flex justify-center mb-8 gap-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "rgba(0, 179, 241, 0.2)", borderColor: "rgba(0, 179, 241, 0.3)" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Scale className="w-8 h-8" style={{ color: "#00b3f1" }} />
                </motion.div>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "rgba(0, 179, 241, 0.2)", borderColor: "rgba(0, 179, 241, 0.3)" }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-8 h-8" style={{ color: "#00b3f1" }} />
                </motion.div>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "rgba(0, 179, 241, 0.2)", borderColor: "rgba(0, 179, 241, 0.3)" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FileCheck className="w-8 h-8" style={{ color: "#00b3f1" }} />
                </motion.div>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                {"Conectamos você às principais "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
                >
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
                <p className="font-semibold text-xl" style={{ color: "#00b3f1" }}>
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
