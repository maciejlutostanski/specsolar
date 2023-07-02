const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: {
          200: "#FDE2AF",
          400: "#FBCC74",
          500: "#FAB436",
        }
      }
    }
  },

  corePlugins: {
    aspectRatio: false,
  },
  
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};

module.exports = config;
