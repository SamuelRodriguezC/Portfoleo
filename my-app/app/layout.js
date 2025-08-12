import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/uiComponents/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portafoleo - Samuel Rodríguez",
  description: "Desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas, optimizadas y escalables. Experiencia en tecnologías como Laravel, Python, React, Django, Next.js y MySQL, con un enfoque en soluciones eficientes que mejoran la experiencia del usuario y optimizan procesos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${jetbrainsMono.variable}`}>
          <Header/>
              {children}
      </body>
    </html>
  );
}
