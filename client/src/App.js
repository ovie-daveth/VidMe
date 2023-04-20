import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Login from './pages/Login';
import Room from './pages/Room';

const App = () => {
  return (

    <Router>
         <ToastContainer />
        <Routes>
            <Route exact path="/*" element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/room/:id' element={<Room />} />
        </Routes>
    </Router>
  )
}

export default App
