import './global.css'

import { dir } from 'i18next'
import localFont from "next/font/local";
import { languages } from '../i18n/settings'
import DrawerProvider from "@/context/drawerProvider";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: 'SoftZone',
  description: 'We listen. We provided. We solve.',
  icons: {
    icon: '/favicon.ico',
  },
}

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)} className={`${poppins.variable}`}>
      <body>
        <DrawerProvider>{children}</DrawerProvider>
      </body>
    </html>
  )
}
