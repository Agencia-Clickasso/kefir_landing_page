import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Kefir Vitalis - Saúde e Vitalidade",
  description: "Descubra como ter mais saúde, vitalidade e ânimo no seu dia a dia com Kefir Vitalis.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

