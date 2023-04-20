import React from 'react'
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Header = () => {

    const nav = useNavigate()
    const logout = () => {
        googleLogout();
        nav("/")
        toast.success("logged out")
    }
  return (
    <div className='flex justify-between items-center lg:px-24 px-4 py-3 border-b-[1px] border-gray-300 shadow-lg'>
        <div className="flex">
            <h1 className='text-blue-700 text-2xl font-bold'>Vid<span className='text-red-700'>Me</span></h1>
        </div>
      <button onClick={logout}
      className='bg-blue-700 text-white hover:bg-blue-600 cursor-pointer px-10 py-2 rounded-md shadow-sm '
      >Logout</button>
    </div>
  )
}

export default Header
