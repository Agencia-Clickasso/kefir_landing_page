import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-sage/5">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="bg-sage rounded-lg p-6 md:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4">
            Invista na sua saúde com um kefir natural e artesanal!
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 text-base sm:text-lg font-medium">
            Descubra o poder do kefir e transforme sua saúde assim como transformamos a nossa!
          </p>
          <Button
            href="https://wa.me/5551981966901?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20kefir"
            className="bg-white text-sage hover:bg-white/90 text-base md:text-lg py-3 px-6 font-medium"
          >
            Fazer Pedido <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

