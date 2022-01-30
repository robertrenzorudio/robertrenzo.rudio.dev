module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace'],
    },
    extend: {
      colors: {
        nightowl: { 100: '#0a192f', 200: '#0d1928' },
        teal: {
          250: '#64ffda',
        },
        blue: { 1000: '#457b9d', 1100: '#264653' },
        gray: { 950: '#264653' },
        orange: { 150: '#ff9a63' },
      },
      animation: {
        blobTop: 'blobTop 15s infinite',
        blobBot: 'blobBot 15s infinite',
      },
      keyframes: {
        blobTop: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-10px, 40px) scale(1.1)' },
          '66%': { transform: 'translate(60px, -10px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        blobBot: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(10px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(30px, -50px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
