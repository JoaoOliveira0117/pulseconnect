import { ReactNode } from 'react';
import Header from '@/components/Header';

export default async function RootLayout(props: { children: ReactNode; modal: ReactNode }) {
	return (
		<main className="max-w-[1000px] m-auto">
			<Header />
			{props.children}
			{props.modal}
		</main>
	);
}
