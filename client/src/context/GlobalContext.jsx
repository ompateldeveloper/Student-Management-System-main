import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

export function GlobalContextProvider({children}){
    const[user,setUser] =useState(null);
    const[students,setStudents]= useState()
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    return(
        <GlobalContext.Provider value={{user,setUser,students,setStudents}} >
             {children}
        </GlobalContext.Provider>

    )
}

export function useGlobalContext(){
    return useContext(GlobalContext)
}