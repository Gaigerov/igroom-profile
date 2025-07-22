import type {Metadata} from 'next';
import {sfProDisplay} from '@/shared/config/fonts/fonts';

export const metadata: Metadata = {
    title: 'Igroom Profile',
    description: 'Profile page for Igroom',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={sfProDisplay.className}>
            <body>{children}</body>
        </html>
    );
}
