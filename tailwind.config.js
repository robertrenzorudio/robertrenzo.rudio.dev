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
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
