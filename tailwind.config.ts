import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1900px',
        '4xl': '2200px',
      },
      colors: {
        'lila': '#EAD7FF',
        'lila-light': '#F5EDFF',
        'green-dark': '#03483A',
        'green-darker': '#022E26',
        'green-accent': '#0A5C4A',
        'cream': '#F7F3ED',
        'cream-dark': '#EBE5DC',
        'text-dark': '#1a1a1a',
        'text-muted': '#3a3a3a',
        'text-light': '#6B6B6B',
      },
      fontFamily: {
        'serif': ['Instrument Serif', 'Georgia', 'serif'],
        'sans': ['DM Sans', '-apple-system', 'sans-serif'],
        'uxum': ['Uxum Grotesque', 'DM Sans', 'sans-serif'],
        'polysans-wide': ['var(--font-polysans-wide)', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
