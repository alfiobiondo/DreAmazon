import * as admin from 'firebase-admin';
import serviceAccount from './permissions'; // Make sure this points to your service account file

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	});
} else {
	admin.app(); // Use existing app instance if already initialized
}

export default admin;
