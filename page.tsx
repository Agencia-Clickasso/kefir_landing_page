import { Leaf, ArrowRight, BugIcon as Bacteria, Brain, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />

      {/* Hero Section */}
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

      {/* About Our Kefir Section */}
      <section id="sobre-kefir" className="bg-sage/5 py-12 md:py-16 lg:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-sage mb-8 text-center">Sobre Nosso Kefir</h2>
          <div className="space-y-8 md:space-y-12">
            <div className="grid gap-4 md:gap-6">
              {[
                "Nosso kefir de leite é produzido de forma 100% artesanal, sem conservantes ou aditivos.",
                "Utilizamos apenas grãos de kefir e leite integral, garantindo um produto puro e repleto de benefícios para sua saúde.",
                "O kefir é um probiótico natural, rico em bactérias benéficas e leveduras.",
                "Auxilia na saúde digestiva, fortalece o sistema imunológico e promove o equilíbrio da flora intestinal.",
                "É uma excelente fonte de vitaminas, minerais e proteínas de alta qualidade.",
              ].map((text, index) => (
                <p key={index} className="text-dusty text-base sm:text-lg md:text-xl font-medium">
                  {text}
                </p>
              ))}
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-sage mb-4 md:mb-6">Nossas Opções</h3>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <Card className="bg-white border-none">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-sage mb-2 md:mb-3">Grãos de kefir</h4>
                    <p className="text-dusty text-base sm:text-lg font-medium">
                      Para você cultivar em casa e preparar sua própria bebida fermentada.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-none">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-sage mb-2 md:mb-3">Bebida pronta</h4>
                    <p className="text-dusty text-base sm:text-lg font-medium">
                      Kefir fermentado por 24 horas, feito apenas com leite integral e grãos de kefir, sem aditivos.
                    </p>
                    <p className="text-dusty text-base sm:text-lg font-medium mt-2">
                      Disponível em embalagens de 500ml e 1 litro.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-sage mb-4 md:mb-6">Benefícios do Kefir</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    icon: <Bacteria className="h-12 w-12 text-sage mb-4" />,
                    title: "Probiótico Natural",
                    description:
                      "Rico em bactérias benéficas que promovem a saúde intestinal e fortalecem o sistema imunológico.",
                  },
                  {
                    icon: <Brain className="h-12 w-12 text-sage mb-4" />,
                    title: "Saúde Mental",
                    description:
                      "Pode ajudar a melhorar o humor e reduzir o estresse devido à conexão intestino-cérebro.",
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-sage mb-4" />,
                    title: "Fortalece a Imunidade",
                    description: "Ajuda a fortalecer o sistema imunológico, protegendo o corpo contra doenças.",
                  },
                ].map((benefit, index) => (
                  <Card key={index} className="bg-white border-none">
                    <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                      {benefit.icon}
                      <h4 className="text-lg sm:text-xl font-semibold text-sage mb-2 md:mb-3">{benefit.title}</h4>
                      <p className="text-dusty text-base sm:text-lg font-medium">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-medium text-sage mb-3 md:mb-4">💡 Sugestões de consumo:</h4>
              <p className="text-dusty text-base sm:text-lg font-medium">
                A bebida pronta pode ser consumida pura ou combinada com frutas, aveia, granola, whey protein e outros
                ingredientes para potencializar seus benefícios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="quem-somos" className="py-12 md:py-16 lg:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-sage mb-6 md:mb-8 text-center">
            Quem Somos
          </h2>
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

      {/* CTA Section */}
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

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

