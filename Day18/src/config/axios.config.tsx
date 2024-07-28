import axios from "axios"


// baseURL => http://localhost:8000
// port number is imported from the nodejs code.
// server connection
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,       // we have imported it from the env file 
    timeout:50000,                               // 5 sec to get the response from the server
    timeoutErrorMessage:"Server timed out",       // If the sever can't give response upto 5 sec
    headers:{
        "Content-Type" : "application/json"      // it represnts that we get the data in the json format like postman

    }
})

// it works before giving the response. Just like the middleware
axiosInstance.interceptors.response.use(
    (response) =>{
        return response.data
    },
    (exception)=>{
        throw exception.response
    }
)

export default axiosInstance