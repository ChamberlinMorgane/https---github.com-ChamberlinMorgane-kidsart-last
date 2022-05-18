module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "orange-fonce": "#ffa461"
      },
      "fontSize": {
        "base": "6.25rem"
       },
       "fontFamily": {
        "acme": "Acme",
        "roboto": "Roboto",
        "mulish": "Mulish",
       },
       "borderRadius": {
        "none": "0",
        "xs": "0.625rem",
        "sm": "0.8125rem",
        "default": "1.25rem",
        "lg": "1.375rem",
        "xl": "1.78125rem",
        "2xl": "2.0625rem",
        "3xl": "3.125rem",
        "4xl": "3.71875rem",
        "full": "9999px"
      },
    },

  },
  plugins: [],
}
