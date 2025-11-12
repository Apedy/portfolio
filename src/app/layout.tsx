import './globals.css';

import { Metadata, Viewport } from 'next';

import { Desktop, Mobile } from '@/components/atoms/responsive';
import Header from '@/components/organisms/header';
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
				<Desktop>
					<Sidebar />
				</Desktop>

				<Mobile>
					<Header />
				</Mobile>

				{children}
			</body>
		</html>
	);
}
