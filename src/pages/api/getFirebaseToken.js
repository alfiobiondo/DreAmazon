import { getSession } from 'next-auth/react';
import { generateFirebaseToken } from '../../firebase/generateToken'; // Correct import

export default async function handler(req, res) {
	const session = await getSession({ req });

	if (!session) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	try {
		// Use the user's email or ID from the NextAuth.js session to generate the token
		const userId = session.user.id || session.user.email; // Adjust as needed
		const customToken = await generateFirebaseToken(userId);
		res.status(200).json({ customToken });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
