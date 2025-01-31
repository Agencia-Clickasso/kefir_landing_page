import { Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-sage text-sage-foreground">
      <div className="container px-4 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Kefir Vitalis</h3>
            <p className="text-sm font-medium">Transformando vidas através da nutrição natural e artesanal.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Links Rápidos</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="#produtos" className="hover:underline">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#sobre-kefir" className="hover:underline">
                  Nosso Kefir
                </Link>
              </li>
              <li>
                <Link href="#quem-somos" className="hover:underline">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contato</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(51) 98196-6901</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Kefirvitalis@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <Link href="https://instagram.com/kefirvitalis" target="_blank" className="hover:underline">
                  @kefirvitalis
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-sage-foreground/10 pt-8 text-center text-sm font-medium">
          <p>© 2024 Kefir Vitalis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

