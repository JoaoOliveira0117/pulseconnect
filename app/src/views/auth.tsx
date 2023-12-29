'use client';

import { useState } from 'react';
import Logo from '@/components/Dummies/Logo';
import AuthForm from '@/components/AuthForm';

export default function Auth() {
	const [login, setLogin] = useState(true);

	return (
		<div className="w-full h-[100vh] flex justify-between">
			<div className="mx-auto w-[400px] flex flex-col items-center py-6 gap-8">
				<Logo className="mt-2 text-[2rem] cursor-default select-none" />
				<hr className="w-[75%] border-bgsecondary border-y-1" />
				<AuthForm isLogin={login} handleChange={setLogin} />
			</div>
		</div>
	);
}
