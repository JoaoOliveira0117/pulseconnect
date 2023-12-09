'use client';

import { useState } from 'react';
import { animated, useTransition } from '@react-spring/web';
import Logo from '@/components/Dummies/Logo';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import Button from '@/components/Dummies/Button';

export default function Auth() {
	const [isLogin, setIsLogin] = useState(true);
	const transition = useTransition(isLogin, {
		from: { opacity: 0, transform: `translateX(${!isLogin ? '' : '-'}100%)` },
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: { opacity: 0, transform: `translateX(${isLogin ? '' : '-'}100%)` },
	});

	return (
		<div className="w-full h-[100vh] flex justify-between">
			<div className="mx-auto w-[400px] flex flex-col items-center py-6 gap-8">
				<Logo className="mt-2 text-[2rem] cursor-default select-none" />
				<hr className="w-[75%] border-bgsecondary border-y-1" />
				<div className="relative min-h-[450px] min-w-[300px]">
					<div className={'font-light text-center mb-8 '}>
						or you can
						<Button
							type="button"
							variant="borderless"
							className="font-bold underline text-secondary px-2"
							onClick={() => setIsLogin(!isLogin)}
						>
							{isLogin ? 'register' : 'login'}
						</Button>
						instead
					</div>
					{transition((style, item) =>
						item ? (
							<animated.div style={style}>
								<LoginForm />
							</animated.div>
						) : (
							<animated.div style={style}>
								<RegisterForm />
							</animated.div>
						),
					)}
				</div>
			</div>
		</div>
	);
}
