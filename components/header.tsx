"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[rgba(9,9,11,0.8)] backdrop-blur-sm border-b border-[#2a2a2d]">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="ZENTRATECH Home"
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00b3f1]">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-white">ZENTRA</span>
            <span className="text-[#00b3f1]">TECH</span>
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegação principal"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-400 hover:text-white transition-colors nav-link-progress cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-gray-400 hover:text-white transition-colors nav-link-progress cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-gray-400 hover:text-white transition-colors nav-link-progress cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-gray-400 hover:text-white transition-colors nav-link-progress cursor-pointer"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("contato")}
            className="hidden md:flex bg-gradient-to-r from-[#0180fe] to-[#00b3f1] hover:from-[#0170e0] hover:to-[#00a0d0] text-white shadow-lg shadow-[#00b3f1]/30 cursor-pointer"
          >
            Fale Conosco
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-[rgba(9,9,11,0.95)] backdrop-blur-sm border-b border-[#2a2a2d]">
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-4"
            aria-label="Menu mobile"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-400 hover:text-white transition-colors text-left py-2 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-400 hover:text-white transition-colors text-left py-2 cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-400 hover:text-white transition-colors text-left py-2 cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-400 hover:text-white transition-colors text-left py-2 cursor-pointer"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-[#0180fe] to-[#00b3f1] hover:from-[#0170e0] hover:to-[#00a0d0] text-white shadow-lg shadow-[#00b3f1]/30 w-full mt-2 cursor-pointer"
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
