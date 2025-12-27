"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, User, MessageSquare, FileText } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ContactSection() {
  return (
    <section id="contato" className="flex items-center justify-center px-4 relative overflow-hidden scroll-smooth" style={{ height: "100vh", minHeight: "100vh" }}>
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

      <div className="container mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div style={{ maxHeight: "calc(100vh - 72px)", overflow: "auto", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div className="text-center mb-12">
          <div className="text-sm font-semibold mb-4" style={{ color: "#00b3f1" }}>
            Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {"Vamos "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)" }}
            >
              conversar
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Entre em contato conosco e vamos transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <Card
            style={{ backgroundColor: "rgba(20, 20, 23, 0.6)", borderColor: "rgba(42, 42, 45, 0.6)" }}
            className="backdrop-blur-sm border"
          >
            <CardContent className="p-8 md:p-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Envie sua mensagem</h3>
                <p className="text-gray-400 text-sm">Preencha o formulário abaixo e entraremos em contato em breve</p>
              </div>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2.5">
                    <Label htmlFor="name" className="text-gray-300 text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4" style={{ color: "#00b3f1" }} />
                      Nome
                    </Label>
                    <div className="relative">
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        className="bg-gray-900/60 border-gray-700/50 text-white placeholder:text-gray-500 h-12 rounded-xl pl-4 pr-4 transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-gray-900/80 hover:border-gray-600/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="email" className="text-gray-300 text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" style={{ color: "#00b3f1" }} />
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-gray-900/60 border-gray-700/50 text-white placeholder:text-gray-500 h-12 rounded-xl pl-4 pr-4 transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-gray-900/80 hover:border-gray-600/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label htmlFor="subject" className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4" style={{ color: "#00b3f1" }} />
                    Assunto
                  </Label>
                  <div className="relative">
                    <Input
                      id="subject"
                      placeholder="Sobre o que deseja falar?"
                      className="bg-gray-900/60 border-gray-700/50 text-white placeholder:text-gray-500 h-12 rounded-xl pl-4 pr-4 transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-gray-900/80 hover:border-gray-600/50"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label htmlFor="message" className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" style={{ color: "#00b3f1" }} />
                    Mensagem
                  </Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Descreva seu projeto ou dúvida em detalhes..."
                      rows={6}
                      className="bg-gray-900/60 border-gray-700/50 text-white placeholder:text-gray-500 resize-none rounded-xl p-4 transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-gray-900/80 hover:border-gray-600/50"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="group relative w-full text-white py-6 text-base rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl mt-2"
                  style={{
                    backgroundImage: "linear-gradient(to right, #00b3f1, #0180fe)",
                    boxShadow: "0 10px 40px rgba(0, 179, 241, 0.3)",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enviar Mensagem
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 flex flex-col">
            <Card
              style={{ backgroundColor: "rgba(20, 20, 23, 0.3)", borderColor: "rgba(42, 42, 45, 0.5)" }}
              className="backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ backgroundColor: "rgba(0, 179, 241, 0.1)", borderColor: "rgba(0, 179, 241, 0.2)" }}
                  >
                    <Mail className="w-6 h-6" style={{ color: "#00b3f1" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-gray-400">contato@techflow.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              style={{ backgroundColor: "rgba(20, 20, 23, 0.3)", borderColor: "rgba(42, 42, 45, 0.5)" }}
              className="backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ backgroundColor: "rgba(0, 179, 241, 0.1)", borderColor: "rgba(0, 179, 241, 0.2)" }}
                  >
                    <Phone className="w-6 h-6" style={{ color: "#00b3f1" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Telefone</h3>
                    <p className="text-gray-400">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              style={{ backgroundColor: "rgba(20, 20, 23, 0.3)", borderColor: "rgba(42, 42, 45, 0.5)" }}
              className="backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ backgroundColor: "rgba(0, 179, 241, 0.1)", borderColor: "rgba(0, 179, 241, 0.2)" }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: "#00b3f1" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Endereço</h3>
                    <p className="text-gray-400">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div
              className="rounded-lg p-6 border"
              style={{ backgroundColor: "rgba(20, 20, 23, 0.2)", borderColor: "rgba(42, 42, 45, 0.5)" }}
            >
              <p className="text-gray-400 text-sm mb-4">Resposta em até 24 horas úteis</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#0b0b0d" }}>
                    <AvatarFallback className="text-white text-xs" style={{ backgroundColor: "#00b3f1" }}>
                      A
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#0b0b0d" }}>
                    <AvatarFallback className="text-white text-xs" style={{ backgroundColor: "#0180fe" }}>
                      B
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#0b0b0d" }}>
                    <AvatarFallback className="text-white text-xs" style={{ backgroundColor: "#0090d9" }}>
                      C
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#0b0b0d" }}>
                    <AvatarFallback className="text-white text-xs" style={{ backgroundColor: "#0080c2" }}>
                      D
                    </AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-gray-400 text-sm">+50 clientes atendidos</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
