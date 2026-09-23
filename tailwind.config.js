/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#e6ffff',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#22d3ee',
          500: '#00e5ff',
          600: '#0891b2',
        },
        electric: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#8b5cf6',
        },
        dark: {
          bg: '#080c15',
          card: 'rgba(15, 23, 42, 0.75)',
          surface: '#0f172a',
          border: 'rgba(34, 211, 238, 0.15)',
        },
        light: {
          bg: '#f8fafc',
          card: 'rgba(255, 255, 255, 0.85)',
          surface: '#ffffff',
          border: 'rgba(148, 163, 184, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.35)',
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
