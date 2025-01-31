import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="produtos" className="container px-4 py-8 md:py-16 lg:py-24 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-sage leading-tight">
            Nosso Kefir – Nutrição 100% Natural e Artesanal
          </h1>
          <p className="text-dusty text-base sm:text-lg md:text-xl font-medium">
            Descubra o poder do kefir e transforme sua saúde assim como transformamos a nossa! 💙🥛
          </p>
          <Button
            href="https://wa.me/5551981966901?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20kefir"
            className="w-full sm:w-auto bg-sage text-white hover:bg-sage/90 text-base md:text-lg py-3 px-6 font-medium"
          >
            Conheça nossos produtos
          </Button>
        </div>
        <div className="relative aspect-square max-w-sm mx-auto lg:max-w-md">
          <div className="rounded-lg bg-sage/10 p-8 h-full flex items-center justify-center">
            <Leaf className="h-24 w-24 md:h-32 md:w-32 text-sage opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}

