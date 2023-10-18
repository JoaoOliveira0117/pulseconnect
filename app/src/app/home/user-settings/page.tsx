import UserImage from '@/components/Dummies/UserImage';
import Input from '@/components/Input';

export default function UserSettings() {
	return (
		<div className="min-w-[1000px]">
			<div className="w-full mt-16 flex items-start justify-evenly">
				<UserImage size={240} />
				<div className="flex gap-8">
					<div className="flex flex-col gap-2">
						<Input variant="outline" label="Username" />
						<Input variant="outline" label="Full Name" />
						<Input variant="outline" label="Email" />
					</div>
					<div className="flex flex-col gap-2">
						<Input variant="outline" label="New Password" />
						<Input variant="outline" label="Confirm Password" />
					</div>
				</div>
			</div>
		</div>
	);
}
