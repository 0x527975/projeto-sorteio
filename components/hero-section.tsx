"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  FileCheck,
  Scale,
  Award,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center px-4 overflow-hidden scroll-smooth min-h-[100dvh] pt-24 pb-8 sm:pt-20 sm:pb-12"
    >
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* orbes de gradiente - estáticos para melhor performance */}
      <div className="absolute top-20 left-0 w-[150px] sm:w-[250px] md:w-[400px] h-[150px] sm:h-[250px] md:h-[400px] rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] bg-gradient-to-br from-[#00b3f1] to-[#0180fe] opacity-20 sm:opacity-25" />
      <div className="absolute bottom-10 right-0 w-[150px] sm:w-[250px] md:w-[450px] h-[150px] sm:h-[250px] md:h-[450px] rounded-full blur-[60px] sm:blur-[80px] md:blur-[130px] bg-gradient-to-br from-[#0180fe] to-[#00b3f1] opacity-15 sm:opacity-20" />

      {/* ícones decorativos flutuantes */}
      <motion.div
        className="absolute top-32 right-[15%] hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[rgba(0,179,241,0.15)] to-[rgba(1,128,254,0.1)] border border-[rgba(0,179,241,0.2)] backdrop-blur-sm">
          <FileCheck className="w-8 h-8 text-[#00b3f1]" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-48 left-[10%] hidden md:block"
        animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[rgba(0,179,241,0.15)] to-[rgba(1,128,254,0.1)] border border-[rgba(0,179,241,0.2)] backdrop-blur-sm">
          <Scale className="w-8 h-8 text-[#00b3f1]" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[8%] hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[rgba(0,179,241,0.15)] to-[rgba(1,128,254,0.1)] border border-[rgba(0,179,241,0.2)] backdrop-blur-sm">
          <Award className="w-8 h-8 text-[#00b3f1]" />
        </div>
      </motion.div>

      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center py-4">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6 md:space-y-8 w-full">
          {/* selo de certificação */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* anel de brilho externo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00b3f1] to-[#0180fe] blur-lg opacity-40"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* emblema principal */}
              <div className="relative inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 backdrop-blur-md bg-gradient-to-r from-[rgba(0,179,241,0.15)] to-[rgba(1,128,254,0.1)] border-[rgba(0,179,241,0.5)] shadow-[0_0_30px_rgba(0,179,241,0.2)]">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#00b3f1] to-[#0180fe]">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] sm:text-xs font-semibold text-[#00b3f1] uppercase tracking-wider">
                    Autorizado LOTEP
                  </span>
                  <span className="text-[8px] sm:text-[10px] text-gray-400">
                    Legalização Oficial de Sorteios
                  </span>
                </div>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 ml-0.5 sm:ml-1" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance px-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {"Legalize seus sorteios com "}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b3f1] via-[#0180fe] to-[#00b3f1] bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ["0% center", "100% center", "0% center"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              segurança e tecnologia
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed px-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Transforme seus sorteios em operações 100% legais com nossa
            expertise em legalização via LOTEP e serviços especializados.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group relative text-white px-5 py-4 sm:px-8 sm:py-6 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-r from-[#00b3f1] to-[#0180fe] shadow-[0_10px_40px_rgba(0,179,241,0.3)] cursor-pointer w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Fale Conosco
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("sobre");
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              variant="outline"
              className="group relative px-5 py-4 sm:px-8 sm:py-6 text-sm sm:text-base md:text-lg bg-transparent rounded-xl sm:rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-cyan-500/10 border-[rgba(0,179,241,0.3)] text-[#00b3f1] cursor-pointer w-full sm:w-auto"
            >
              <span className="relative z-10">Saiba Mais</span>
              <div className="absolute inset-0 border-2 rounded-2xl border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 w-full max-w-4xl px-1"
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
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              100%
            </div>
            <div className="text-gray-400 mt-1 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Legalizado
            </div>
          </motion.div>
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              500+
            </div>
            <div className="text-gray-400 mt-1 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Sorteios Realizados
            </div>
          </motion.div>
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              10+
            </div>
            <div className="text-gray-400 mt-1 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Anos de Experiência
            </div>
          </motion.div>
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-all bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
              R$ 0
            </div>
            <div className="text-gray-400 mt-1 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Custo de Legalização
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* indicador de scroll */}
      <motion.div
        className="flex absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 sm:gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">
          Role para ver mais
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b3f1]/50"
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
      </motion.div>
    </section>
  );
}
