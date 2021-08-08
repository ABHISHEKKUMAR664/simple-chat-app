import './App.css';
import Chat from './component/Chat';
import SignIn from './component/SignIn';
import { auth } from './firebase.js';
import {useAuthState} from "react-firebase-hooks/auth"


function App() {
  const [user]=useAuthState(auth)

  return (
    <>
    {user?<Chat/>:<SignIn/>}
     
     

    </>
  );
}

export default App;
