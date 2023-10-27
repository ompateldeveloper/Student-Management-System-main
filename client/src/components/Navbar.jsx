import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { user ,setUser } = useGlobalContext();
    return (
        <div className='flex w-full py-3 border-b'>
            <div className="title ml-6 text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">Student Management System</div>
            <div className="if ml-auto">
                {
                    user
                        ?

                        (<div className="user flex">
                            <div className="username capitalize mr-4">
                                {
                                    "hello, " + user.name
                                }

                            </div>
                            <div className="logout -scale-x-100 border-2 border-zinc-100 p-1 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900  rounded-md mr-4 " onClick={()=>{
                                    localStorage.removeItem('user')
                                    setUser(null)
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                            </div>
                        </div>)
                        :
                        (<div className="not-user flex">
                            <Link to={"/login"} className="login-btn text-sm mx-2 pt-px pb-1 px-2 rounded-md border border-green-400 text-green-500 ">Login</Link>
                            <Link to={"/signup"} className="signup-btn text-sm mx-2 pt-px pb-1 px-2 rounded-md border bg-green-400 text-white ">Sign up</Link>
                        </div>)
                }
            </div>
        </div>
    )
}
