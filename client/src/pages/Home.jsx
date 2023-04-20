import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const nav = useNavigate()
    const callFriend = () => {
       nav('/room/1')
    }

    
  return (
    <main>
        <Header />
        <div className="flex justify-between items-center mt-10 lg:px-24 px-4">
            <div className="block w-[40%]">
                <h1 className='my-4 text-3xl font-bold'>The best Video Chat App available Online</h1>
                <h3 className='w-[80%] mb-6 font-semibold text-red-600'>Chat with two or more of your friends, business associates and lovedones with low data usage and high video quality</h3>
                <div className="flex items-center gap-6">
                    <button onClick={callFriend} className='bg-transparent text-blue-700 font-semibold px-8 py-2 rounded-sm before:absolute relative before:bg-blue-700 before:left-0 before:top-0 before:h-full hover:before:w-full before:w-0 border-[1px] border-blue-700 hover:text-white hover:before:-z-10 before:transition-all before:ease-in-out before:duration-500'>MAKE A CALL</button>
                    <button className='bg-transparent text-blue-700 font-semibold px-8 py-2 rounded-sm before:absolute relative before:bg-blue-700 before:left-0 before:top-0 before:h-full hover:before:w-full before:w-0 border-[1px] border-blue-700 hover:text-white hover:before:-z-10 before:transition-all before:ease-in-out before:duration-500'>SCHEDULE A CALL</button>
                </div>
            </div>
            <div className="block W-[30%] ">
                <img src="https://plus.unsplash.com/premium_photo-1679619558734-fd00ecb84594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="dances" className='w-[550px] h-[550px] rounded-full' />
            </div>
        </div>
    </main>
    
  )
}

export default Home
