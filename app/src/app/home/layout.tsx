import { ReactNode } from 'react';

// Components
import Header from '@/components/Header';

export default async function RootLayout(props: { children: ReactNode; modal: ReactNode }) {
	return (
		<>
			<Header />
			<main className="max-w-[1000px] m-auto">
				{props.children}
				{props.modal}
			</main>
		</>
	);
}
