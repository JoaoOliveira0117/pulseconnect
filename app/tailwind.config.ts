import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				sans: 'var(--font-inter)',
				mono: 'var(--font-work-sans)',
			},
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				bgprimary: 'var(--bg-primary)',
				bgsecondary: 'var(--bg-secondary)',
				bgtertiary: 'var(--bg-tertiary)',
			},
			animation: {
				fadeIn: 'fadeIn 0.4s ease-in',
				scaleYdown: 'scaleYdown 1s ease-out',
				scaleYup: 'scaleYup 1s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				scaleYup: {
					'0%': { maxHeight: '0px' },
					'100%': { maxHeight: '1000px' },
				},
				scaleYdown: {
					'0%': { maxHeight: '1000px' },
					'100%': { maxHeight: '0px' },
				},
			},
		},
	},
	safelist: [
		'underline',
		{
			pattern: /^m[a-z]?-.+$/,
		},
		{
			pattern: /^p[a-z]?-.+$/,
		},
		{
			pattern: /^cursor-.+$/,
		},
		{
			pattern: /^opacity-.+$/,
		},
		{
			pattern: /^max-w?-.+$/,
		},
	],
	plugins: [],
};
export default config;
