
import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '744px',
        'desktop': '1440px'
      },
      fontFamily: {
        'poppins-m': ['Poppins-Medium', 'sans-serif'],
        'poppins': ['Poppins-Regular', 'sans-serif'],
        'mukta': ['Mukta', 'sans-serif']
      },
      colors: {
        'offblack': '#353535',
        'white': '#F9F9FB',
        'offwhite': '#EBEBED',
        'grey': '#A0A0A0',
        'primary': '#4C75A4',
        'primarylight': '#AECDDF',
        'accent': '#F89B61'
      },
      width: {
        '1120px': '1120px',
      },
      maxWidth: {
        '1120px': '1120px'
      },
      backgroundImage: {
        'blob': "url('/bblob.svg')",
        'blobs': "url('/fblobs.svg')",
        'cblob': "url('/cblob.svg')"
      }

    }
  },
  plugins: [
    plugin(({ addBase, theme }: any) => {
      addBase({
        'h1': { fontSize: theme('fontSize.6xl') },
        'h2': { fontSize: theme('fontSize.5xl') },
        'h3': { fontSize: theme('fontSize.4xl') },
        'h4': { fontSize: theme('fontSize.3xl') },
        'h5': { fontSize: theme('fontSize.2xl') },
      })
    })
  ],
}
export default config
