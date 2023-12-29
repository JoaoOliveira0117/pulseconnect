import { animated, useTransition } from '@react-spring/web';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import Button from '@/components/Dummies/Button';

type AuthFormProps = {
	isLogin: boolean;
	handleChange: (b: boolean) => void;
};

export default function AuthForm({ isLogin, handleChange }: AuthFormProps) {
	const transition = useTransition(isLogin, {
		from: { opacity: 0, transform: `translateX(${!isLogin ? '' : '-'}100%)` },
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: { opacity: 0, transform: `translateX(${isLogin ? '' : '-'}100%)` },
	});

	return (
		<div className="relative min-h-[450px] min-w-[300px]">
			<div className="font-light text-center mb-8">
				or you can
				<Button
					type="button"
					variant="borderless"
					className="font-bold underline text-secondary px-2"
					onClick={() => handleChange(!isLogin)}
				>
					{isLogin ? 'register' : 'login'}
				</Button>
				instead
			</div>
			{transition((style, item) => (
				<animated.div style={style}>{item ? <LoginForm /> : <RegisterForm />}</animated.div>
			))}
		</div>
	);
}
