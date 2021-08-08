import { Input, Button } from '@material-ui/core'
import React, { useState } from 'react'
import firebase from 'firebase' 
import { db, auth } from '../firebase'
import 'firebase/auth'

const SendMessages = () => {
const[msg, setMsg]=useState('')

async function SendMessages(e){
    e.preventDefault()
    const {uid, photoURL} = auth.currentUser

    await db.collection('messages').add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMsg('')
}

    return (
        <div>
            <form onSubmit={SendMessages}>
                <Input value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder="Messages..."/>
                <Button type="submit">Send</Button>

            </form>
            
        </div>
    )
}

export default SendMessages;
