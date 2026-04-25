
export default {
  content: ["./components/**/*.{vue,js}", "./pages/**/*.vue"],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#FFF9EC',
          100: '#FFF0CC',
          200: '#FFE099',
          300: '#FFD066',
          400: '#FFC033',
          500: '#FFB300',
          600: '#CC9000',
          700: '#996C00',
          800: '#664800',
          900: '#332400',
        },
        forest: {
          50: '#F0F7F0',
          100: '#D5EAD5',
          200: '#ABD5AB',
          300: '#78B878',
          400: '#52A052',
          500: '#2D8A2D',
          600: '#236E23',
          700: '#1A531A',
          800: '#123A12',
          900: '#0A200A',
        },
        cream: {
          50: '#FFFDF8',
          100: '#FFF9ED',
          200: '#FFF0D6',
          300: '#FFE4B8',
        },
        bark: {
          50: '#F9F6F1',
          100: '#EDE6D9',
          200: '#D5C9B3',
          300: '#B5A488',
          400: '#978262',
          500: '#7A6548',
          600: '#5C4B36',
          700: '#3F3425',
          800: '#241D15',
        }
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'count-up': 'countUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
