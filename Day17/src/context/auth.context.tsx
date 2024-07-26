import { createContext, useEffect, useState } from "react";
import LoadingComponent from "../components/common/loading/loading.component";
import authSvc from "../pages/auth/auth.service";

let AuthContext=createContext({})

export const AuthProvider=({children}:{children:any})=>{
    let [loggedInUser,setLoggedInUser]=useState()
    let [loading,setLoading]=useState<boolean>()  // here we declared that useState will get the boolean data

    // day17
    const getLoggedInUser= async()=>{
        setLoading(true)
        try{
            const response:any = await authSvc.getRequest("/auth/me", {auth:true})
            setLoggedInUser(response.result)
            setLoading(false)
        }
        catch(exception){
            console.log(exception)
        }
    }

    useEffect(()=>{
        const token=localStorage.getItem("_act")
        if(token) {

        }
        else{
            setLoading(false)
        }
    })

    return(
        <AuthContext.Provider value={{loggedInUser,setLoggedInUser}}>
            {
                // Here if the loading is true, then it will show the loading spinner else it will show the children
                loading?
                <> <LoadingComponent /> </> :
                <> {children} </>
            }
        </AuthContext.Provider>

    )
}

export default AuthContext