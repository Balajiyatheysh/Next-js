import "./globals.css";
import NavBar from "./navbar/page";
import Footer from "./footer/page";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: {
    default:"Next js tutorial- balaji yatheysh",
    template:"%s | balajiyatheysh"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body suppressHydrationWarning={true}>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
