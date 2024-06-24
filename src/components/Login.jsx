import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export default function Login() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

   const navigate = useNavigate();



    async function handleSubmit(e) {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          alert("Login Succes");
          navigate("/");
        } catch (err) {
          alert(err.message);
        }

    }

    return (
        <>
            <h1 style={{textAlign:"center"}}>Login</h1>
            <form action="" style={{marginTop:"10vh",textAlign:"center"}}>

                <label htmlFor="email">Email: </label>
                <input id="email" type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                <br />
                <br />
                <label htmlFor="">Password: </label>
                <input id="password" type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                <br />
                <br />
                <input onClick={(e) => { handleSubmit(e); }} type="submit" />
                <br />
                <br />
                <button onClick={(e) => {e.preventDefault();  navigate("/signup");}}  >signUp</button>


            </form>
        </>
    )
}