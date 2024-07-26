import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextInputComponent } from "../../../components/common/form/input.component";
import { INPUT_TYPE } from "../../../components/common/form/input.contract";
import { toast } from "react-toastify";
import authSvc from "../auth.service";
import { useNavigate } from "react-router";
import { useContext } from "react";
import AuthContext from "../../../context/auth.context";

const LoginPage = () => {
  const navigate=useNavigate()

  // Day 16
  const auth:any=useContext(AuthContext)

  const LoginDTO = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginDTO),
  });

  // Day 16
  const loginAction = async (data: any) => {
      try{
        const response= await authSvc.postRequest('/auth/login' , data)
        console.log(response)  // it is required to see the path for the following codes.
        
        localStorage.setItem("_act",response.token.access)    // _act represents the access token.
        localStorage.setItem("_rft",response.token.access)    // _rft represents the refresh token.
        toast.success("Welcome to "+response.result.userDetail.role + " panel")
        navigate("/"+response.result.userDetail.role)   // It navigates to the page which role you have registered with  

        auth.setLoggedInUser(response.result.userDetail)  // Now it gives the detail of which user has loogedIN
      }
      catch(exception){
        console.log(exception)
        toast.error("Error while logging in your account")
      }
      
    };


  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[83vh] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(loginAction)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>

                  <TextInputComponent
                    control={control}
                    name="email"
                    type={INPUT_TYPE.EMAIL}
                    msg={errors?.email?.message}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>

                  <TextInputComponent
                    control={control}
                    name="password"
                    type={INPUT_TYPE.PASSWORD}
                    msg={errors?.password?.message}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
