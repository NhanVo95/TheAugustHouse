'use client'

import localFont from 'next/font/local'
import './globals.css'
import 'tailwindcss/tailwind.css'

import { Providers as ThemeProviders } from '~/app/themeProviders'
import { Providers } from '~/redux/Provider'

import { hexToRgb, getAccessibleColor } from '~/utilities/color'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

const color_primary: string = '#6231af'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const primaryColor = hexToRgb(color_primary, 'primary')
  const a11yColor = hexToRgb(getAccessibleColor(color_primary), 'a11y')
  const backgroundPrimaryColor = hexToRgb('#ffffff', 'backgroundPrimary')
  const borderPrimaryColor = hexToRgb('#ffffff', 'borderPrimary')

  return (
    <Providers>
      <html lang='en' suppressHydrationWarning>
        <style global jsx>
          {`
            .light {
              ${primaryColor} ${a11yColor} ${borderPrimaryColor} ${backgroundPrimaryColor}
            }
          `}
        </style>

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProviders>{children}</ThemeProviders>
        </body>
      </html>
    </Providers>
  )
}
