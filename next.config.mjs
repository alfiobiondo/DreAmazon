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
	/* env: {
		next_public_stripe_publishable_key:
			process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
	}, */
};

export default nextConfig;
