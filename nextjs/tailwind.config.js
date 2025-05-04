module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bg-dark': '#0f0f0f',
          'bg-dark-secondary': '#1a1a1a',
          'button-hover' : '#a0a0a0'
        },
      },
    },
    plugins: [],
  }