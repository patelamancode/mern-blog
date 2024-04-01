import { Button } from "flowbite-react";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import {app} from "../firebase"
import {useDispatch} from "react-redux"
import {signInSuccess} from "../redux/slices/userSlice"
import { useNavigate } from "react-router-dom";

export default function Oauth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async() =>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt : "select_account"})
        try{
            const resultFromGoogle  = await signInWithPopup(auth, provider)
            console.log(resultFromGoogle)
            const res = await fetch('/api/auth/google', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify({
                    name : resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                    googlePhotoURL : resultFromGoogle.user.photoURL
                })
            })
            const data = await res.json();
            if(res.ok){
                dispatch(signInSuccess(data))
                navigate("/")
            }
        }catch(error){
            console.log(error)
        }
    }
  return (
    <Button gradientDuoTone="purpleToPink" outline type="button" onClick={handleGoogleClick}>   
      Login with Google
    </Button>
  )
}

