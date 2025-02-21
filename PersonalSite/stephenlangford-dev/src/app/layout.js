import './globals.css';

export const metadata = {
    title: 'Stephen Langford',
    description:
        'A live resume for Stephen Langford hosted on an Oracle cloud server.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
