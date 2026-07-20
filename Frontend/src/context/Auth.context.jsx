import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const[islogin,setIslogin] = useState(false)
    const[userdata,setUserData] = useState(null)
    const[loading,setLoading] = useState(true)

    async function fetchData(){
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/dashboard`, {
                withCredentials: true,
            })
            setUserData(response.data.data)
            setIslogin(true)
        }
        catch(error){
            console.log(error)
            setIslogin(false)
            setUserData(null)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
         fetchData()   
    },[])


    return (
        <AuthContext.Provider value = {{islogin,userdata,loading,fetchData}}>
            {children}
        </AuthContext.Provider>
    )
}
