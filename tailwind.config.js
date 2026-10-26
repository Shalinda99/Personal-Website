/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: {
                    50: '#fafafa',
                    100: '#f5f4f4',
                    200: '#e8e5e5',
                    300: '#d4cfcf',
                    400: '#a39b9c',
                    500: '#776f70',
                    600: '#544d4e',
                    700: '#3a3334',
                    800: '#221d1e',
                    900: '#141112',
                    950: '#080707',
                },
                background: 'rgb(var(--background-rgb) / <alpha-value>)',
                text: 'rgb(var(--text-rgb) / <alpha-value>)',
                primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
                secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
                accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['"Playfair Display"', 'Georgia', 'serif'],
                signature: ['"Mrs Saint Delafield"', 'cursive'],
            },
            animation: {
                'spin-slow': 'orbit 14s linear infinite',
                'mesh-a': 'meshA 16s ease-in-out infinite',
                'mesh-b': 'meshB 20s ease-in-out infinite',
                'mesh-c': 'meshC 24s ease-in-out infinite',
                'rise': 'rise 10s linear infinite',
                'shine': 'shine 6s linear infinite',
                'scan': 'scan 8s linear infinite',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                orbit: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                meshA: {
                    '0%, 100%': { transform: 'translate(-10%, -5%) scale(1)' },
                    '50%': { transform: 'translate(25%, 20%) scale(1.3)' },
                },
                meshB: {
                    '0%, 100%': { transform: 'translate(10%, 10%) scale(1.2)' },
                    '50%': { transform: 'translate(-25%, -15%) scale(0.9)' },
                },
                meshC: {
                    '0%, 100%': { transform: 'translate(0, 20%) scale(1)' },
                    '50%': { transform: 'translate(-15%, -25%) scale(1.25)' },
                },
                rise: {
                    '0%': { transform: 'translateY(0) scale(0.6)', opacity: '0' },
                    '15%': { opacity: '1' },
                    '100%': { transform: 'translateY(-90vh) scale(1.2)', opacity: '0' },
                },
                shine: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' },
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.08)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
