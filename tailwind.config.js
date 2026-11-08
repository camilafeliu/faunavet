module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jungle: '#174C3C',
        forest: '#286B50',
        sage: '#A9BEA5',
        sand: '#EAE2D0',
        cream: '#FAFAF6',
        earth: '#80634A',
        charcoal: '#343B36',
      },
      boxShadow: {
        soft: '0 20px 40px rgba(23, 76, 60, 0.08)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(169, 190, 165, 0.35), transparent 42%)',
      },
    },
  },
  plugins: [],
};
