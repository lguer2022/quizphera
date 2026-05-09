import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId); 
const auth = getAuth(app);

// Test connection
(async () => {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error: any) {
    if (error.message?.includes('offline')) {
      console.log("Firebase is currently offline or using a dummy configuration. This is expected until Firebase is fully set up.");
    }
  }
})();

export { db, auth };
export const isFirebaseEnabled = true;
