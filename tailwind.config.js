const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  purge: {
    mode: 'all',
    content: [
      './site/content/**/*.md',
      './site/layouts/**/*.html',
      './src/js/**/*.js',
    ],
    options: {
      safelist: ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'strong' /* etc. */],
    },
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}