import React from 'react';

// Components
import Header from '@/components/Header';
import Providers from '@/contexts/ReduxContext';
import ToastProvider from '@/contexts/ToastContext';

export default async function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<Providers>
			<ToastProvider />
			<Header />
			{children}
		</Providers>
	);
}
