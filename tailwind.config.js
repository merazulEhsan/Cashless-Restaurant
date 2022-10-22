/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('/src/images/salmon.jpg')"
            },
            fontFamily: {
                'nunito': [
                    'Nunito', 'sans-serif'
                ],
                'playfair': [
                    'Playfair Display', 'serif'
                ],
                'vibes': 'Great Vibes, cursive',
            }
        },
    },


    plugins: [
        require("daisyui"), require('flowbite/plugin'),
    ],
    daisyui: {
        themes: ['night']
    }
}
