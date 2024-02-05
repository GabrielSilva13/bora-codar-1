import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        highlight: ['var(--font-rubik)', 'sans-serif'],
        formula: ['var(--font-courier-prime)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bx-login-background': 'url(/img/shapes.png)',
      },
      boxShadow: {
        'light-blue': '0px 0px 10px 0px rgba(28, 159, 255, 0.4)',
      },
      keyframes: {
        slide: {
          '0%': {
            'background-color': 'var(--bx-blue-500)',
            transform: 'translateX(0vw)',
          },
          '100%': {
            'background-color': 'var(--bx-blue-400)',
            transform: 'translateX(calc(15.625rem - (2.25rem * 1.25)))',
          },
        },
        'color-change': {
          '0%': {
            'background-color': '#1c3fb7',
          },
          '100%': {
            'background-color': '#8099ec',
          },
        },
        'flip-1': {
          '0%, 15%': {
            transform: 'rotate(0)',
          },
          '35%, 100%': {
            transform: 'rotate(-180deg)',
          },
        },
        'flip-2': {
          '0%, 30%': {
            transform: 'rotate(0)',
          },
          '50%, 100%': {
            transform: 'rotate(-180deg)',
          },
        },
        'flip-3': {
          '0%, 45%': {
            transform: 'rotate(0)',
          },
          '65%, 100%': {
            transform: 'rotate(-180deg)',
          },
        },
        'flip-4': {
          '0%, 60%': {
            transform: 'rotate(0)',
          },
          '80%, 100%': {
            transform: 'rotate(-180deg)',
          },
        },
        'squidge-1': {
          '5%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(1) scaleY(1)',
          },
          '15%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(1.3) scaleY(0.7)',
          },
          '25%, 20%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(0.8) scaleY(1.4)',
          },
          '55%, 100%': {
            'transform-origin': 'center top',
            transform: 'scaleX(1) scaleY(1)',
            'background-color': '#8099ec',
          },
          '40%': {
            'transform-origin': 'center top',
            transform: 'scaleX(1.3) scaleY(0.7)',
          },
        },
        'squidge-2': {
          '20% ': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(1) scaleY(1)',
          },
          '30%': {
            'transform-origin': 'center bottom',
            transform: ' scaleX(1.3) scaleY(0.7)',
          },

          '40%, 35%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(0.8) scaleY(1.4)',
          },
          '70%, 100%': {
            'transform-origin': 'center top',
            transform: 'scaleX(1) scaleY(1)',
            'background-color': '#8099ec',
          },
          '55%': {
            'transform-origin': 'center top',
            transform: ' scaleX(1.3) scaleY(0.7)',
          },
        },
        'squidge-3': {
          '35%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(1) scaleY(1)',
          },

          '45%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(1.3) scaleY(0.7)',
          },
          '55%, 50%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(0.8) scaleY(1.4)',
          },
          '85%, 100%': {
            'transform-origin': 'center top',
            transform: 'scaleX(1) scaleY(1)',
            'background-color': '#8099ec',
          },
          '70%': {
            'transform-origin': 'center top',
            transform: 'scaleX(1.3) scaleY(0.7)',
          },
        },
        'squidge-4': {
          '50%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(1) scaleY(1)',
          },
          ' 60%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(1.3) scaleY(0.7)',
          },
          ' 70%, 65%': {
            'transform-origin': 'center bottom',
            transform: 'scaleX(0.8) scaleY(1.4)',
          },
          '100%, 100%': {
            'transform-origin': 'center top',
            transform: 'scaleX(1) scaleY(1)',
            'background-color': '#8099ec',
          },
          '85%': {
            'transform-origin': 'center top',
            transform: 'scaleX(1.3) scaleY(0.7)',
          },
        },
        spinner: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'circle-1': {
          from: {
            transform: 'rotate(60deg)',
          },
          to: {
            transform: 'rotate(205deg)',
          },
        },
        'circle-2': {
          from: {
            transform: 'rotate(30deg)',
          },
          to: {
            transform: 'rotate(-115deg)',
          },
        },
      },
      animation: {
        slide: 'slide 1.5s ease-in-out infinite alternate',
        'color-change': 'color-change 1.5s ease-in-out infinite alternate',
        'flip-1': 'flip-1 1.5s ease-in-out infinite alternate',
        'flip-2': 'flip-2 1.5s ease-in-out infinite alternate',
        'flip-3': 'flip-3 1.5s ease-in-out infinite alternate',
        'flip-4': 'flip-4 1.5s ease-in-out infinite alternate',
        'squidge-1': 'squidge-1 1.5s ease-in-out infinite alternate',
        'squidge-2': 'squidge-2 1.5s ease-in-out infinite alternate',
        'squidge-3': 'squidge-3 1.5s ease-in-out infinite alternate',
        'squidge-4': 'squidge-4 1.5s ease-in-out infinite alternate',
        spinner: 'spinner 700ms linear infinite',
        'circle-1':
          'circle-1 700ms infinite alternate cubic-bezier(0.25, 0.1, 0.5, 1)',
        'circle-2':
          'circle-2 700ms infinite alternate cubic-bezier(0.25, 0.1, 0.5, 1)',
      },
      colors: {
        'bx-light-blue': {
          300: '#8099ec',
          500: '#1c3fb7',
        },
        'bx-blue': {
          50: '#e6eaec',
          100: '#b2bec3',
          200: '#8c9ea6',
          300: '#58727e',
          400: '#385765',
          450: '#2f4050',
          490: '#293846',
          500: '#062d3e',
          600: '#052938',
          700: '#04202c',
          750: '#111928',
          800: '#031922',
          900: '#03131a',
          
        },
        'bx-green': {
          50: '#e8f7f5',
          100: '#b8e7e1',
          200: '#95dbd3',
          300: '#65cabf',
          400: '#47c0b2',
          500: '#19b09f',
          600: '#17a091',
          700: '#127d71',
          800: '#0e6157',
          900: '#0b4a43',
        },
        'bx-black': {
          50: '#e8e8e9',
          100: '#b8b9b9',
          200: '#969798',
          300: '#666768',
          400: '#48494b',
          500: '#1a1c1e',
          600: '#18191b',
          700: '#121415',
          800: '#0e0f11',
          900: '#0b0c0d',
        },
        'bx-white': {
          50: '#ffffff',
          100: '#fdfdfd',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fbfbfb',
          500: '#fafafa',
          600: '#e4e4e4',
          700: '#b2b2b2',
          800: '#8a8a8a',
          900: '#696969',
        },
        'bx-gray': {
          100: '#DFE4EA',
        },
        'bx-turquoise-blue': {
          500: '#36779a',
        },
        'bx-grayish-blue': {
          450: '#8996a6',
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
