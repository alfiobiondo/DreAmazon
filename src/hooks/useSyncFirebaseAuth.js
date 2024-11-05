import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { auth } from '@/firebase/clientApp';
import { signInWithCustomToken } from 'firebase/auth';

function useSyncFirebaseAuth() {
	const { data: session, status } = useSession();
	const isLoading = status === 'loading';

	useEffect(() => {
		if (isLoading || !session) return;

		if (session) {
			// Fetch the Firebase Custom Token from your API
			fetch('/api/getFirebaseToken')
				.then((res) => res.json())
				.then((data) => {
					if (data.customToken) {
						signInWithCustomToken(auth, data.customToken)
							.then(() => {
								console.log('User signed in to Firebase');
							})
							.catch((error) => {
								console.error('Firebase sign-in error:', error);
							});
					}
				});
		} else {
			auth.signOut(); // Sign out from Firebase if no session
		}
	}, [session, isLoading]);
}

export default useSyncFirebaseAuth;
