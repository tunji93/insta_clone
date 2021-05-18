import React, {useContext, useState, useEffect} from 'react'
import FirebaseContext from '../context/firebase'
import {Link, useHistory} from 'react-router-dom'




const Login = () => {
    const History = useHistory()
    const {app} = useContext(FirebaseContext)
    
    const [error, setError] = useState('')
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const isInvalid = password==="" || userName ===""

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await app.auth().signInWithEmailAndPassword(userName,password)
            setError('')
            setUserName('')
            setPassword('')
            History.push("/")


            
        } catch (error) {
            
            setError(error.message)
            
        }

    }

    const handleChange = (e) => {
        const {type, value} = e.target
        type ==="password" ? setPassword(value) : setUserName(value)
        
    }

    useEffect(()=> {
        document.title = "Login"
    }, [])
    return (
        <div className= " container flex mx-auto max-w-screen-md items-center h-screen">
           <div className = "flex w-3/5">
               <img src="/images/iphone-with-profile.jpg" alt= "iphone" />
           </div>
           <div className = "flex flex-col w-2/5 " >
            <div className= "flex flex-col mb-4 border mx-2 rounded border-grey-primary items-center p-4 bg-white w-full">
                <h1 className= "flex justify-center w-full">
                    <img className="mt-2 mb-4 w-6/12" src="./images/logo.png" alt= "logo" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit= {handleSubmit} method="POST">
                        <input
                        arial-label="Enter your email adddress"
                        type="text"
                        placeholder="Email address"
                        className = "text-sm text-grey-base  w-full border border-gray-primary rounded mb-2 py-5 px-4 h-2"
                        onChange = {handleChange}
                        />
                        <input
                        arial-label="Enter your password"
                        type="password"
                        placeholder="password"
                        className = "text-sm text-grey-base w-full border border-gray-primary rounded mb-2 py-5 px-4 h-2"
                        onChange = {handleChange}
                        />
                        <button type="submit" disabled={isInvalid} className = {`text-white bg-blue-medium w-full rounded h-8 font-bold ${isInvalid&&'opacity-50'}`}> Log In</button>
                        
                    </form>
            </div>
            <div className = "flex justify-center items-center w-full bg-white p-4 rounded border border-grey-primary mx-2">
                <p className="text-sm">Dont have an account?  {``}
                    <Link to = "/signup" className="font-bold text-blue-medium">Sign up</Link>
                </p>
                </div>
            </div>
        </div>
    )
}

export default Login