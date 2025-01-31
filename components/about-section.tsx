import { BugIcon as Bacteria, Brain, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
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
                  <p className="text-dusty text-base sm:text-lg font-medium mt-2">
                    Porção grãos de kefir - colher de chá R$ 20
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none">
                <CardContent className="p-4 md:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-sage mb-2 md:mb-3">Bebida pronta</h4>
                  <p className="text-dusty text-base sm:text-lg font-medium">
                    Kefir fermentado por 24 horas, feito apenas com leite integral e grãos de kefir, sem aditivos.
                  </p>
                  <ul className="text-dusty text-base sm:text-lg font-medium mt-2 space-y-1">
                    <li>500ml R$ 15</li>
                    <li>1 litro R$ 26</li>
                  </ul>
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
  )
}

