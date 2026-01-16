import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lila': '#EAD7FF',
        'lila-light': '#F5EDFF',
        'green-dark': '#03483A',
        'green-darker': '#022E26',
        'green-accent': '#0A5C4A',
        'cream': '#F7F3ED',
        'cream-dark': '#EBE5DC',
        'text-dark': '#1a1a1a',
        'text-muted': '#6B6B6B',
      },
      fontFamily: {
        'serif': ['Instrument Serif', 'Georgia', 'serif'],
        'sans': ['DM Sans', '-apple-system', 'sans-serif'],
        'uxum': ['Uxum Grotesque', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
