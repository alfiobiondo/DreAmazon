/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'links.papareact.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
