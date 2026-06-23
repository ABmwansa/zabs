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
        primary: {
          50: '#eef8ff',
          100: '#d7eeff',
          200: '#b7e0ff',
          300: '#8ad5ff',
          400: '#42b4f0',
          500: '#008fd5',
          600: '#007dbc',
          700: '#006aa0',
          800: '#005587',
          900: '#003f65',
          DEFAULT: '#008fd5',
        },
        secondary: {
          50: '#effcff',
          100: '#d4f8ff',
          200: '#acefff',
          300: '#74e1ff',
          400: '#34c9f5',
          500: '#14afd9',
          600: '#0f8caf',
          700: '#106f8b',
          800: '#145b71',
          900: '#164c5e',
          DEFAULT: '#14afd9',
        },
        grey: {
          50: '#f7fafc',
          100: '#edf3f7',
          200: '#d9e5ef',
          300: '#b7cada',
          400: '#839bb0',
          500: '#5e7488',
          600: '#475b6c',
          700: '#324355',
          800: '#1e2d3f',
          900: '#102235',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
