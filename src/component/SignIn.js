import React from 'react';
import firebase from 'firebase';
import { auth } from '../firebase.js';
import {Button} from '@material-ui/core';

const SignIn = () => {

    function signInWithGoogle() {
          const provider = new firebase.auth.GoogleAuthProvider()
          auth.signInWithPopup(provider)
    }

    return (
        <div>
            <Button onClick={signInWithGoogle}>sign In With Google</Button>
            
        </div>
    )
}

export default SignIn;
