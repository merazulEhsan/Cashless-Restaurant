/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('/src/images/salmon.jpg')",
                'hero-home': "url('/src/images/02_Gastro-Webseiten-Sliderbilder.jpg')",
                'hero-about': "url('/src/images/02-Gastro-Webseiten-Parallax.jpg')",
                'hero-gallery': "url('/src/images/03_Gastro-Webseiten-Sliderbilder.jpg')",
                'hero-dark': "url('/src/images/starry-night-sky-dark-aesthetic-ro6a8cda8gg0zoil.jpg')",
                'hero-contact': "url('/src/images/home.jpg.webp')",
            },
            fontFamily: {
                'nunito': [
                    'Nunito', 'sans-serif'
                ],
                'playfair': [
                    'Playfair Display', 'serif'
                ],
                'vibes': 'Great Vibes, cursive',
                'marck': ['Marck Script', 'cursive']
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
