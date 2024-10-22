import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
	// callbacks: {
	// 	async signIn({ account, profile }) {
	// 		if (account.provider === 'google') {
	// 			return profile.email_verified && profile.email.endsWith('@example.com');
	// 		}
	// 		return true; // Do different verification for other providers that don't have `email_verified`
	// 	},
	// },
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// ...add more providers here
	],
};

export default NextAuth(authOptions);
