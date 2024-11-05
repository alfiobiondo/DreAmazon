import admin from './admin'; // Import the initialized admin SDK from admin.js

// Function to generate a Firebase Custom Token
export async function generateFirebaseToken(userId) {
	try {
		// Create a custom token for the given userId
		const customToken = await admin.auth().createCustomToken(userId);
		return customToken;
	} catch (error) {
		console.error('Error creating custom token:', error);
		throw new Error('Unable to create custom token');
	}
}
