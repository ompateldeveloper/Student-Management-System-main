import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext';
import axios from 'axios';

export default function Login() {
    const [credentials, setCredentials] = useState({ "email": "", "password": "" });
    const { user, setUser } = useGlobalContext();
    const LoginUser = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:4000/auth/login", credentials)
            .then((data) => {
                setUser(data.data)
                localStorage.setItem('user',JSON.stringify(data.data))
            })
            .catch(() => {
                setUser(null)
            })
    }
    return (
        <div className='bg-green-00 h-full absolute w-full flex items-center justify-center'>
            <form action="" onSubmit={LoginUser} className=' p-4 rounded-lg flex flex-col w-11/12 sm:w-6/12 lg:w-4/12 mx-auto '>
                <label htmlFor="user-email">Email:</label>
                <input type="email" className=' h-10 duration-150 focus:bg-green-100 border-b-zinc-300 border-b-2 rounded focus:border-b-green-400 outline-none pl-2 mb-4' id='user-email' onChange={(e) => { setCredentials({ ...credentials, "email": e.target.value }) }} />
                <label htmlFor="password">Password:</label>
                <input type="password" className=' h-10 duration-150 focus:bg-green-100 border-b-zinc-300 border-b-2 rounded focus:border-b-green-400 outline-none pl-2' id='password' autoComplete="on" onChange={(e) => { setCredentials({ ...credentials, "password": e.target.value }) }} />
                <button className='self-start my-4 mx-2 font-bold text-sm text-white bg-green-400 px-3 py-2 rounded-md'>Login</button>
            </form>
        </div>
    )
}
