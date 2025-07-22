/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        borderRadius: {
            'custom': '16px',
        },
        colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
        },
    },
};
export const plugins = [];
