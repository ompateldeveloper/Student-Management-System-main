import { useEffect, useState } from 'react'
import './App.css'
import {Route, Routes,Navigate} from "react-router-dom"
import Home from './pages/Home'
import { useGlobalContext } from './context/GlobalContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import axios from 'axios'
import Navbar from './components/Navbar'

function App() {
    const {user,setUser} = useGlobalContext();
    const verifyUser = async()=>{
        if(user){
            await axios.post("http://localhost:4000/auth/verify",user)
            .then((data)=>{
                // setUser(data.data)
            })
            .catch(()=>{
                setUser(null)
            })
        }
    }
    useEffect(()=>{
        verifyUser()
    },[user])
    return (
        <main >
            <Navbar/>
            <Routes>
                <Route path={"/"} element={
                    user?
                    <Home/>
                    :
                    <Navigate to="/login" replace/>
                }/>
                <Route path = {"/login"} element={
                    user?
                    <Navigate to={"/"} replace />
                    :
                    <Login/>
                }/>
                <Route path = {"/signup"} element={<Signup/>}/>
            </Routes>
        </main>
    )
}

export default App
