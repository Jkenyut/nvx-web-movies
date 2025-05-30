/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {
            screens: {
                "3xl": "2000px",
            },
        },
    },
    plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
