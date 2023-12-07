import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    const logGooglePopUpUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGooglePopUpUser}>Sign In with Google Popup</button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;