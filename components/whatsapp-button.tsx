import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5551981966901?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20kefir"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Conversar pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}

