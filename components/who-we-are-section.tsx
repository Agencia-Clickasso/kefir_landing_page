import { Button } from "@/components/ui/button"

export function WhoWeAreSection() {
  return (
    <section id="quem-somos" className="py-12 md:py-16 lg:py-24">
      <div className="container px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-sage mb-6 md:mb-8 text-center">Quem Somos</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 text-dusty">
            {[
              "Somos Anne e Daltro, um casal apaixonado por culinária, música e natureza. Nossa jornada com o kefir começou por necessidade: ambos enfrentávamos problemas digestivos como intestino irritável, azia e refluxo. Ao introduzir o kefir em nossa rotina, notamos uma transformação na saúde – não apenas na digestão, mas também na pele, cabelos e unhas, além da sensação de bem-estar diário.",
              'A melhoria foi tão significativa que sentimos a necessidade de compartilhar esse alimento vivo e natural com outras pessoas. Assim, nasceu a nossa marca "Kefir Vitalis", no qual Vitalis vem do latim que significa "aquele que traz vida", uma forma de levar mais saúde, equilíbrio e qualidade de vida através de um produto artesanal, puro e sem conservantes.',
              "Nosso compromisso é oferecer um kefir fresco e de alta qualidade, sempre respeitando o processo natural de fermentação para garantir o máximo de benefícios.",
            ].map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg font-medium">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-sage/10 p-6 md:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-medium text-sage mb-4">Atendimento</h3>
            <p className="text-dusty text-base sm:text-lg font-medium mb-6">
              📍Atendemos Porto Alegre e região, com opção de retirada na Zona Norte ou envio por Uber.
            </p>
            <Button
              href="https://wa.me/5551981966901?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20kefir"
              className="w-full justify-center bg-sage text-white hover:bg-sage/90 text-base md:text-lg py-3 font-medium"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

