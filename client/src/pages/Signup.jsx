import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import axios from "axios";

export default function Signup() {
    const [credentials, setCredentials] = useState({"name":"", "email": "", "password": "" });
    const { user, setUser } = useGlobalContext();
    const LoginUser = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:4000/auth/signup", credentials)
            .then((data) => {
                setUser(data.data)
                localStorage.setItem('user',data.data)
            })
            .catch(() => {
                setUser(null)
            })
    }
    return (
        <div className=' h-full absolute w-full flex items-center justify-center'>
            <form action="" onSubmit={LoginUser} className=' p-4 rounded-lg flex flex-col w-11/12 sm:w-6/12 lg:w-4/12 mx-auto  '>
                <label htmlFor="user-name">Name:</label>
                <input type="text" className=' h-10 duration-150 focus:bg-green-100 border-b-zinc-300 border-b-2 rounded focus:border-b-green-400 outline-none pl-2 mb-4' id='user-name' onChange={(e) => { setCredentials({ ...credentials, "name": e.target.value }) }} />
                <label htmlFor="email">Email:</label>
                <input type="email" className=' h-10 duration-150 focus:bg-green-100 border-b-zinc-300 border-b-2 rounded focus:border-b-green-400 outline-none pl-2 mb-4' id='email' onChange={(e) => { setCredentials({ ...credentials, "email": e.target.value }) }} />
                <label htmlFor="password">Password:</label>
                <input type="password" className=' h-10 duration-150 focus:bg-green-100 border-b-zinc-300 border-b-2 rounded focus:border-b-green-400 outline-none pl-2' id='password' onChange={(e) => { setCredentials({ ...credentials, "password": e.target.value }) }} />
                <button className='self-start my-4 mx-1 font-bold text-sm text-white bg-green-400 px-3 py-2 rounded-md'>Sign Up</button>
            </form>
        </div>
    )
}
