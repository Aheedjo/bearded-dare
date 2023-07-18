/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            Secondary: "#FFFEFA",
            Primary: "#E3CAA5",
            Headers: "#3E3B32",
            Text: "#76715F",
            Error: "ff0000"
        },
        screens: {
            mb: "475px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
