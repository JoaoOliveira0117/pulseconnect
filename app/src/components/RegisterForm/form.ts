type Form = {
	name: string;
	variant: 'transparent' | 'outline' | 'filled';
	label: string;
	type?: 'text' | 'password';
};

const form: Form[] = [
	{
		name: 'username',
		variant: 'outline',
		label: 'Username',
	},
	{
		name: 'name',
		variant: 'outline',
		label: 'Name',
	},
	{
		name: 'email',
		variant: 'outline',
		label: 'Email',
	},
	{
		name: 'password',
		variant: 'outline',
		label: 'Password',
		type: 'password',
	},
	{
		name: 'confirm_password',
		variant: 'outline',
		label: 'Confirm Password',
		type: 'password',
	},
];

export default form;
