/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		deploymentId: 'deployment-',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/*',
			},
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				port: '',
				pathname: '/random/*',
			},
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
