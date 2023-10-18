import React from 'react';
import ToastProvider from '@/contexts/ToastContext';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
	return (
		<body>
			{children}
			<ToastProvider />
		</body>
	);
}
