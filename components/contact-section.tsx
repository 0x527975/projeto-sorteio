"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, User, MessageSquare, FileText } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Aqui você pode integrar com sua API de envio de email
      // Por exemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})
    } catch (error) {
      alert("Erro ao enviar mensagem. Tente novamente mais tarde.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <section id="contato" className="px-4 relative overflow-hidden scroll-smooth min-h-screen py-12">
      <div className="absolute inset-0 bg-[#0d0d0f]" />
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[rgba(0,179,241,0.1)] to-transparent" />
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-gradient-to-br from-[#00b3f1] to-[#0180fe]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-gradient-to-br from-[#0180fe] to-[#00b3f1]"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative z-10 w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold mb-4 text-[#00b3f1] relative inline-block">
              Contato
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#00b3f1] to-[#0180fe] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Vamos{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b3f1] to-[#0180fe]">
                conversar
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Tem um projeto em mente? Entre em contato conosco e vamos transformar suas ideias em realidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00b3f1] to-[#0180fe] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                <Card className="relative backdrop-blur-sm border bg-[rgba(20,20,23,0.8)] border-[rgba(0,179,241,0.2)]">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00b3f1] to-[#0180fe] flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Envie sua mensagem</h3>
                        <p className="text-gray-400 text-xs">Respondemos em até 24h</p>
                      </div>
                    </div>

                    <form className="space-y-3.5" onSubmit={handleSubmit} noValidate>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-gray-300 text-xs font-medium">
                            Nome
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleChange("name", e.target.value)}
                              placeholder="Seu nome"
                              className={`bg-gray-900/80 border-gray-700/50 text-white placeholder:text-gray-500 h-10 rounded-lg pl-10 pr-3 text-sm transition-all duration-300 focus:border-[#00b3f1] focus:ring-2 focus:ring-[#00b3f1]/20 focus:bg-gray-900 hover:border-gray-600/70 ${
                                errors.name ? "border-red-500/50" : ""
                              }`}
                              aria-invalid={!!errors.name}
                              aria-describedby={errors.name ? "name-error" : undefined}
                            />
                          </div>
                          {errors.name && (
                            <p id="name-error" className="text-red-400 text-xs mt-0.5" role="alert">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-gray-300 text-xs font-medium">
                            Email
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              placeholder="seu@email.com"
                              className={`bg-gray-900/80 border-gray-700/50 text-white placeholder:text-gray-500 h-10 rounded-lg pl-10 pr-3 text-sm transition-all duration-300 focus:border-[#00b3f1] focus:ring-2 focus:ring-[#00b3f1]/20 focus:bg-gray-900 hover:border-gray-600/70 ${
                                errors.email ? "border-red-500/50" : ""
                              }`}
                              aria-invalid={!!errors.email}
                              aria-describedby={errors.email ? "email-error" : undefined}
                            />
                          </div>
                          {errors.email && (
                            <p id="email-error" className="text-red-400 text-xs mt-0.5" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="subject" className="text-gray-300 text-xs font-medium">
                          Assunto
                        </Label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => handleChange("subject", e.target.value)}
                            placeholder="Sobre o que deseja falar?"
                            className={`bg-gray-900/80 border-gray-700/50 text-white placeholder:text-gray-500 h-10 rounded-lg pl-10 pr-3 text-sm transition-all duration-300 focus:border-[#00b3f1] focus:ring-2 focus:ring-[#00b3f1]/20 focus:bg-gray-900 hover:border-gray-600/70 ${
                              errors.subject ? "border-red-500/50" : ""
                            }`}
                            aria-invalid={!!errors.subject}
                            aria-describedby={errors.subject ? "subject-error" : undefined}
                          />
                        </div>
                        {errors.subject && (
                          <p id="subject-error" className="text-red-400 text-xs mt-0.5" role="alert">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-gray-300 text-xs font-medium">
                          Mensagem
                        </Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            placeholder="Descreva seu projeto ou dúvida..."
                            rows={4}
                            className={`bg-gray-900/80 border-gray-700/50 text-white placeholder:text-gray-500 resize-none rounded-lg pl-10 pr-3 pt-3 text-sm transition-all duration-300 focus:border-[#00b3f1] focus:ring-2 focus:ring-[#00b3f1]/20 focus:bg-gray-900 hover:border-gray-600/70 ${
                              errors.message ? "border-red-500/50" : ""
                            }`}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "message-error" : undefined}
                          />
                        </div>
                        {errors.message && (
                          <p id="message-error" className="text-red-400 text-xs mt-0.5" role="alert">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full text-white py-3.5 text-sm rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl mt-2 bg-gradient-to-r from-[#00b3f1] to-[#0180fe] shadow-[0_8px_30px_rgba(0,179,241,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                          {!isSubmitting && (
                            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00b3f1] to-[#0180fe] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
                <Card className="relative backdrop-blur-sm border bg-[rgba(20,20,23,0.8)] border-[rgba(0,179,241,0.2)] group-hover:border-[rgba(0,179,241,0.4)] transition-colors">
                  <CardContent className="p-4">
                    <a href="mailto:contato@techflow.com.br" className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b3f1] to-[#0180fe] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-sm mb-0.5">Email</h3>
                        <p className="text-gray-400 hover:text-[#00b3f1] transition-colors text-xs truncate">
                          contato@techflow.com.br
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00b3f1] to-[#0180fe] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
                <Card className="relative backdrop-blur-sm border bg-[rgba(20,20,23,0.8)] border-[rgba(0,179,241,0.2)] group-hover:border-[rgba(0,179,241,0.4)] transition-colors">
                  <CardContent className="p-4">
                    <a href="tel:+5511999999999" className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0180fe] to-[#00b3f1] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-sm mb-0.5">Telefone</h3>
                        <p className="text-gray-400 hover:text-[#00b3f1] transition-colors text-xs">
                          +55 (11) 99999-9999
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00b3f1] to-[#0180fe] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
                <Card className="relative backdrop-blur-sm border bg-[rgba(20,20,23,0.8)] border-[rgba(0,179,241,0.2)] group-hover:border-[rgba(0,179,241,0.4)] transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b3f1] to-[#0180fe] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-sm mb-0.5">Endereço</h3>
                        <p className="text-gray-400 text-xs">São Paulo, SP - Brasil</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative p-4 rounded-xl bg-gradient-to-br from-[rgba(0,179,241,0.1)] to-[rgba(1,128,254,0.05)] border border-[rgba(0,179,241,0.2)]"
              >
                <p className="text-gray-300 text-xs font-medium mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00b3f1] animate-pulse" />
                  Resposta em até 24h
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["A", "B", "C", "D"].map((letter, i) => (
                      <motion.div
                        key={letter}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      >
                        <Avatar className="w-8 h-8 border-2 border-[#0b0b0d]">
                          <AvatarFallback className={`text-white text-xs ${
                            i === 0 ? "bg-[#00b3f1]" :
                            i === 1 ? "bg-[#0180fe]" :
                            i === 2 ? "bg-[#0090d9]" : "bg-[#0080c2]"
                          }`}>
                            {letter}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs">+50 clientes</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
