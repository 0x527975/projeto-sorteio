"use client";

import { motion } from "framer-motion";
import { Rocket, Shield, Users } from "lucide-react";

const stats = [
  { number: "50+", label: "Projetos", icon: Rocket },
  { number: "100%", label: "Satisfação", icon: Users },
  { number: "24/7", label: "Suporte", icon: Shield },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden scroll-smooth"
    >
      {/* fundo */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* elementos de fundo - estáticos para performance */}
      <div className="absolute top-10 left-0 sm:left-10 w-[150px] sm:w-[250px] md:w-[350px] h-[150px] sm:h-[250px] md:h-[350px] rounded-full blur-[80px] sm:blur-[120px] opacity-20 bg-gradient-to-br from-[#00b3f1] to-[#0180fe]" />
      <div className="absolute bottom-10 right-0 sm:right-10 w-[120px] sm:w-[180px] md:w-[250px] h-[120px] sm:h-[180px] md:h-[250px] rounded-full blur-[80px] sm:blur-[100px] opacity-15 bg-gradient-to-br from-[#0180fe] to-[#00b3f1]" />

      {/* padrão de grade */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,179,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,179,241,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00b3f1]/10 to-[#0180fe]/10 border border-[#00b3f1]/20 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00b3f1] animate-pulse" />
              <span className="text-xs font-medium text-[#00b3f1]">
                Sobre Nós
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Legalize seu projeto com{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
                segurança e tecnologia
              </span>
            </h2>

            <div className="space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Na{" "}
                <span className="text-[#00b3f1] font-semibold">ZENTRATECH</span>
                , desenvolvemos sites, sistemas e plataformas digitais
                totalmente personalizados, criados do zero para refletir a
                identidade, os objetivos e as necessidades de cada cliente.
              </p>
              <p>
                Nossos projetos unem design exclusivo, tecnologia moderna,
                segurança e alta performance, entregando soluções sob medida que
                fortalecem a presença digital e impulsionam resultados.
              </p>
            </div>
          </motion.div>

          {/* estatísticas */}
          <motion.div
            className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                className="group relative text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00b3f1]/20 to-[#0180fe]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-2 sm:p-3 md:p-4 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#00b3f1]/20 to-[#0180fe]/20 flex items-center justify-center mx-auto mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b3f1]" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
