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
                vt323: ['VT323', 'monospace'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'windows-grey': '#c0c0c0',
                'window-light': '#f4f4f4',
                'window-border-top': '#efefef',
                'window-border-left': '#efefef',
                'window-border-right': '#000',
                'window-border-bottom': '#000',
            },
        },
    },
    plugins: [],
};
