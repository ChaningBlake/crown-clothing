import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase.utils";
import { useState } from "react";

import './sign-in-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        resetFormFields();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = formFields;

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                case 'auth/invalid-credential':
                    alert('Invalid credentials');
                    break;
                default:
                    console.log(error);
            }
        }

    }


    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign In with Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="email" type="email" required name="email" onChange={handleChange} value={email} />
                <FormInput label="password" type="password" required name="password" onChange={handleChange} value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign-In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;