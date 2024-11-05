import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// ...add more providers here
	],
	session: {
		maxAge: 60 * 60, // Set the session duration (e.g., 1 hour)
	},
	callbacks: {
		async session({ session }) {
			return session;
		},
	},
};

export default NextAuth(authOptions);
