import { useContext, useEffect, useState } from "react"
import LoadingComponent from "../components/common/loading/loading.component"
import AuthContext from "../context/auth.context"
import NoPermission from "../errors/no-permission.page"

const AllowUser=({allowUser,children}:{allowUser:any,children:any})=>{
    const [loading,setLoading]=useState<boolean>()
    const [giveAccess,setAccess]=useState<boolean>()

    const auth:any=useContext(AuthContext)

    useEffect(()=>{
            if(auth.loggedInUser){
                if(allowUser===auth.loggedInUser.role){
                    setLoading(false)   // here it doesn't give the loading if the user is admin
                    setAccess(true)     // here it give access to the page if the user is admin
                }
                else{
                    setLoading(true)   
                    setAccess(false)   // here it doesn't give access to admin page if the user is not admin and it will show that you don't have permission
                }
            }
    },[auth])

    return(
        <>
        {

            loading ? 
            <><LoadingComponent /> </> :

            <> 
            {
                giveAccess ? <> {children} </> :
                 <> <NoPermission /></>
            }
            </>
        }

        </>
    )
}

export default AllowUser