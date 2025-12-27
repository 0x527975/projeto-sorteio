"use client"

import { motion } from "framer-motion"

interface SectionTransitionProps {
  fromColor?: string
  toColor?: string
  height?: string
}

export function SectionTransition({
  fromColor = "#09090b",
  toColor = "#0d0d0f",
  height = "120px",
}: SectionTransitionProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height,
        background: fromColor === toColor ? fromColor : `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`
      }}
    >
      {/* Animated glowing line that runs across */}
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2a2a2d]/50 to-transparent" />
        <motion.div
          className="absolute top-0 left-0 w-32 h-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #00b3f1 50%, transparent 100%)",
            boxShadow: "0 0 20px #00b3f1, 0 0 40px #00b3f1",
          }}
          initial={{ x: "-100%" }}
          whileInView={{ x: "calc(100vw + 100%)" }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles that appear along the path */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00b3f1]"
            style={{
              left: `${10 + i * 12}%`,
              top: "50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1 + i * 0.08,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Center diamond with glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "radial-gradient(circle, rgba(0,179,241,0.3) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Inner diamond */}
          <div
            className="w-3 h-3 bg-gradient-to-br from-[#00b3f1] to-[#0180fe]"
            style={{ boxShadow: "0 0 10px #00b3f1, 0 0 20px rgba(0,179,241,0.5)" }}
          />
        </motion.div>
      </div>

      {/* Side decorative elements - left */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: i === 1 ? "#00b3f1" : "#2a2a2d",
              boxShadow: i === 1 ? "0 0 6px #00b3f1" : "none",
            }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Side decorative elements - right */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: i === 1 ? "#00b3f1" : "#2a2a2d",
              boxShadow: i === 1 ? "0 0 6px #00b3f1" : "none",
            }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Subtle corner accents */}
      <motion.div
        className="absolute top-3 left-1/4 w-8 h-px bg-gradient-to-r from-transparent via-[#00b3f1]/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-3 right-1/4 w-8 h-px bg-gradient-to-r from-transparent via-[#00b3f1]/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </div>
  )
}
