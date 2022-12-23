/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            Secondary: "#FFFEFA",
            Primary: "#E3CAA5",
            Headers: "#3E3B32",
            Text: "#76715F",
        },
    },
    plugins: [],
};
