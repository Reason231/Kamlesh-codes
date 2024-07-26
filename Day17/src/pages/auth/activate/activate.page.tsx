import { useEffect, useState } from "react";
import LoadingComponent from "../../../components/common/loading/loading.component";
import { HomePageTitle } from "../../../components/common/title/home-title.component";
import { useParams } from "react-router";
import authSvc from "../auth.service";


const ActivationPage = () => {
    const [loading,setLoading]=useState(true)
    let [msg,setMsg]=useState("")
    let [isExpired,setIsExpired]=useState(false)

    const params=useParams()

    const getVerified=async()=>{
        try{
            const token=params.token;
            await authSvc.getRequest('/auth/activate/' + token)
            setMsg("Your account has been activated successfully . Please login your account")
            
        }
        catch(exception:any){
          // 24th July i.e error handling if the token is expired
          if(+exception.status===400 && exception.data.result && exception.data.result.hasOwnProperty('token') && exception.data.result.token === "Expired"){
            setMsg("Your token has been expired. Please confirm resending the token")
            setIsExpired(true)
          }
          else{
            setMsg("Your activation has been already activated. please continue with login")
          }
        }
        finally{
          setLoading(false)
        }
    }

    const resendToken = async()=>{
      try{
        setLoading(true)
        await authSvc.getRequest("/auth/resend-token"+params.token)
        setMsg("A new activation email has been sent to you Registered email. Please check for the further process")

      }
      catch(exception){
        setMsg("There was a problem while sending you the activation email again.")
      }
      finally{
        setLoading(false)
        setIsExpired(false)
      }
    }

    useEffect(() =>{
        getVerified
    },[])

  return (
    <>
      <HomePageTitle title="Activate Your account" url="" />
    <button onClick={getVerified} className="text-center">Activate User</button>

      <section className="min-h-screen mt-24 -mb-20">

{
  loading ? <>
    <LoadingComponent />
  </> : <>
    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h3 className="block text-2xl font-bold text-gray-800 dark:text-white">
        {msg}
      </h3>

      {
        isExpired ? <>
          <div className="mt-16 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">

            <button onClick={resendToken} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
              Resend Activation Token
            </button>
          </div>
        </> : <>
          <div className="mt-16 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <a href="/" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
              <span className="me-2"><i className="ri-arrow-left-s-line"></i></span>
              Back To Home
            </a>

            <span className="mx-4">or</span>


            <a href="/login" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-700 text-white hover:bg-blue-600 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
              Continue
              <span className="ms-2"><i className="ri-arrow-right-s-line"></i></span>
            </a>



          </div>

        </>
      }

    </div>
  </>
}
</section>
    </>
  );
};

export default ActivationPage;


      // <div className="flex flex-col flex-wrap sm:flex sm:flex-row sm:flex-wrap md:flex md:flex-row md:flex-wrap mx-15 py-5 gap-2 mt-5">
        
      //   {
      //       loading ? <>
      //       <LoadingComponent /> 

      //       </>:<>

      //       {
      //         msg ? msg:<></>
      //       }
      //       {
      //         isExpired ? <>
      //         <button onClick={resendToken}>
      //           Confirm Resending Acitvation Link
      //         </button>
      //         </>:<></>
      //       }
      //       </>
      //   }
      // </div>