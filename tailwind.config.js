/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        borderRadius: {
            'custom': '25px',
        },
        colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
        },
        fontFamily: {
            sans: ['sfProDisplay', 'sans-serif'],
        },
    },
};
export const plugins = [];
