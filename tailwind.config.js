
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#FF575F", // [navbar colour hover joono use kora hoi]
          secondary: "#EDEAFD",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

