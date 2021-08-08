import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase';

const SignOut = () => {
    return (
        <div>
            <Button onClick={()=>auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut;
