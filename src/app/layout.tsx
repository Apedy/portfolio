import './globals.css';

import { Metadata, Viewport } from 'next';

import Sidebar from '@/components/organisms/sidebar';

import {
	Ubuntu
} from 'next/font/google';

export const metadata: Metadata = {
	title: 'Portfolio',
	icons: 'apedy.svg'
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 0.8,
	maximumScale: 1,
	userScalable: false
};

const ubuntu = Ubuntu({
	weight: '400',
	subsets: ['latin']
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={ubuntu.className}>
				<Sidebar />

				{children}
			</body>
		</html>
	);
}
