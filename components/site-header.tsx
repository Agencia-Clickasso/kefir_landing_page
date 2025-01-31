import Link from "next/link"
import { Instagram, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-cream/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-xl font-medium text-sage">
            Kefir Vitalis
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#produtos" className="text-sage hover:text-sage/80">
            Produtos
          </Link>
          <Link href="#sobre-kefir" className="text-sage hover:text-sage/80">
            Nosso Kefir
          </Link>
          <Link href="#quem-somos" className="text-sage hover:text-sage/80">
            Quem Somos
          </Link>
          <Link href="#contato" className="text-sage hover:text-sage/80">
            Contato
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://instagram.com/kefirvitalis" target="_blank" className="text-sage hover:text-sage/80">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Button
            href="https://wa.me/5551981966901?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20kefir"
            variant="outline"
            className="hidden md:flex border-sage text-sage hover:bg-sage hover:text-white font-medium"
          >
            Fazer Pedido
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="#produtos" className="text-sage hover:text-sage/80 font-medium">
                  Produtos
                </Link>
                <Link href="#sobre-kefir" className="text-sage hover:text-sage/80 font-medium">
                  Nosso Kefir
                </Link>
                <Link href="#quem-somos" className="text-sage hover:text-sage/80 font-medium">
                  Quem Somos
                </Link>
                <Link href="#contato" className="text-sage hover:text-sage/80 font-medium">
                  Contato
                </Link>
                <Button
                  href="https://wa.me/5551981966901?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20kefir"
                  className="w-full justify-center bg-sage text-white hover:bg-sage/90 font-medium"
                >
                  Fazer Pedido
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

