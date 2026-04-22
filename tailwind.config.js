/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F07A10',
          dark: '#D4660D',
          light: '#FF8C2A',
          glow: '#FFB067',
        },
        ink: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#0D0D0D',
          800: '#111111',
          700: '#1A1A1A',
          600: '#242424',
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'blueprint': "linear-gradient(rgba(240,122,16,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(240,122,16,0.06) 1px, transparent 1px)",
        'orange-radial': 'radial-gradient(circle at center, rgba(240,122,16,0.25), transparent 70%)',
        'sheen': 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
      },
      backgroundSize: {
        'grid-lg': '60px 60px',
        'grid-md': '40px 40px',
        'grid-sm': '24px 24px',
      },
      boxShadow: {
        'orange-glow': '0 0 40px -5px rgba(240,122,16,0.45)',
        'orange-soft': '0 12px 50px -15px rgba(240,122,16,0.5)',
        'inset-line': 'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-up-slow': 'fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.6s ease-out forwards',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 65s linear infinite',
        'scan': 'scan 3.5s ease-in-out infinite',
        'sheen': 'sheen 3s ease-in-out infinite',
        'blink': 'blink 1.2s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'crane-sway': 'craneSway 7s ease-in-out infinite',
        'glass-fill': 'glassFill 2.2s cubic-bezier(0.22,1,0.36,1) forwards',
        'grid-drift': 'gridDrift 60s linear infinite',
        'draw-line': 'drawLine 2s cubic-bezier(0.22,1,0.36,1) forwards',
        'construct': 'construct 1.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'shine': 'shine 2.2s ease-out forwards',
        'spin-slow': 'spin 14s linear infinite',
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
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-120%)', opacity: '0' },
          '50%': { transform: 'translateY(120%)', opacity: '1' },
        },
        sheen: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        craneSway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        glassFill: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        gridDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        construct: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
          '60%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
      },
    },
  },
  plugins: [],
}
