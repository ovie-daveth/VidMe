import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';

const Login = () => {
    const nav = useNavigate()
  return (
    <div className='bg-black h-screen w-full '>
        <div className="absolute top-[50%] -translate-[50%] left-[50%] translate-x-[-50%]">
            <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(credentialResponse);
                if(credentialResponse){
                    toast.success("Signed in succesfully")
                    nav('/home')
                }

            }}
                onError={() => {
                console.log('Login Failed')
            }}
/>
        </div>
    </div>
  )
}

export default Login
