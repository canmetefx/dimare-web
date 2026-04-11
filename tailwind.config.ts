import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#D4A96A',
          DEFAULT: '#B8894A',
          dark: '#8B6535',
        },
        cream: {
          light: '#FDFAF5',
          DEFAULT: '#F7F1E6',
          dark: '#EDE4D3',
        },
        linen: {
          light: '#FAF7F2',
          DEFAULT: '#F2EBE0',
          dark: '#E5D9C8',
        },
        clay: {
          light: '#C4907A',
          DEFAULT: '#A8705A',
          dark: '#7A4F3D',
        },
        espresso: {
          light: '#5C4A3A',
          DEFAULT: '#3D2E22',
          dark: '#1E1510',
        },
        obsidian: {
          light: '#1C1A14',
          DEFAULT: '#0E0D09',
          dark: '#080706',
        },
        sand: '#2A2419',
        warm: '#8B7355',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Josefin Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
