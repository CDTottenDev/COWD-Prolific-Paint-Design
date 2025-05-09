import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prolific Paint & Design - Admin",
  description:
    "Prolific Paint & Design - Admin",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
