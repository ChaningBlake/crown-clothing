import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-KWaXLUV_dioylFKyuWTWdx-C3mE-Yi8",
    authDomain: "crown-clothing-db-ef7cc.firebaseapp.com",
    projectId: "crown-clothing-db-ef7cc",
    storageBucket: "crown-clothing-db-ef7cc.appspot.com",
    messagingSenderId: "332844830762",
    appId: "1:332844830762:web:dc89268aff6fd2b2eb7353"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

// Create Auth
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// Create DB and user document function
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // Create user document
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    
    return userDocRef;
}