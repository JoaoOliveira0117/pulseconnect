import React from 'react';

// Components
import Header from '@/components/Header';
import Providers from '@/contexts/ReduxContext';

export default async function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<Providers>
			<Header />
			{children}
		</Providers>
	);
}
