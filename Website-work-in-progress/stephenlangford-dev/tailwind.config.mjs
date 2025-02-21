/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                fontFamily: {
                    sans: ['Arial', 'sans-serif'],
                },
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'menu-gray': '#c0c0c0',
                'menu-top': '#f4f4f4',
                'menu-bottom': '#4e4e4e',
                'window-background': '#c6c6c6',
                'window-border-light': '#efefef',
                'window-border-dark': '#000',
                'window-top-blue': '#050080',
            },
            padding: {
                '3px': '3px',
            },
            width: {
                '59px': '59px',
            },
        },
    },
    plugins: [],
};
