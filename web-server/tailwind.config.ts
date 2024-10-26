import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

import { withOpacity } from '~/utilities/color'

const config: Config = {
  darkMode: 'class', // or 'media' if you prefer automatic switching based on user's system preference
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: { tablet: '640px' },

    extend: {
      keyframes: {
        scaleUp: {
          to: { transform: 'scale(1.05)' }
        },
        scaleDown: {
          to: { transform: 'scale(0.95)' }
        },
        leftRight: {
          to: { transform: 'translateX(10px)' }
        },
        upDown: {
          to: { transform: 'translateY(10px)' }
        }
      },

      animation: {
        scaleUp: 'scaleUp 3s ease-in-out alternate infinite',
        scaleDown: 'scaleDown 3s ease-in-out alternate infinite',
        leftRight: 'leftRight 3s ease-in-out alternate infinite',
        upDown: 'upDown 3s ease-in-out alternate infinite'
      },

      colors: { primary: withOpacity('--color-primary') },

      backgroundImage: {
        signInSignUp: 'url("/desktop-backgrounds.jpg")'
      },

      textColor: { primary: withOpacity('--color-a11y') }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('selected', ['&[data-selected=true]'])
    }),
    plugin(function ({ addVariant }) {
      ;['glass', 'solid'].forEach((variant: string) => {
        addVariant(variant, [`&[data-style=${variant}]`])
      })
    })
  ]
}

export default config