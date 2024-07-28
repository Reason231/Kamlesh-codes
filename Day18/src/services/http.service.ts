import { toast } from "react-toastify";
import axiosInstance from "../config/axios.config";

// We are using the class cause we are going to use the inheritance in the typescript
abstract class HttpService {
  private headers = {};
  private params={};
  private getHeaders = (config: any) => {

    // auth of Day17
    if(config && config.auth){

      let token=localStorage.getItem("_act") || null  // Here it takes the token from the localStorage we have built in day 16
      if(!token){
        toast.error("Login your account first")
        // redirect the user to the login if he hasn't logged in
        document.location.href="/login"  
      }
        this.headers={
            ...this.headers,
            "Authorization" : "Bearer" + token
        }
    }

    // files type defined
    if (config && (config.file || config.files)) {
      this.headers = {
        ...this.headers,
        "Content-Type": "multipart/form-data",
      };
    }

    // query string
    if(config && config.params){
        this.params={
            ...this.params,
            ...config.params
        }
    }
  };
  postRequest = async (
    url: string,
    data: any = {},
    config: any = null
  ): Promise<any> => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.post(url, data, {
        headers: {
          ...this.headers,
        },
      });
      console.log(response);
      return response;
    } catch (exception) {
      console.error("postRequest Exception:", exception);
      throw exception;
    }
  };

  // getRequest = (url: string, config: any = null) => {};
  getRequest = async (url: string, config: unknown = null): Promise<any> => {
		try {
			this.getHeaders(config);
			const response = await axiosInstance.get(url, {
				headers: { ...this.headers },
				params: { ...this.params },
			});
			return response;
		} catch (error) {
			console.log("GetRequestException", error);
			throw error;
		}
	};

  putRequest = (url: string, config: any = null) => {};

  patchRequest = (url: string, config: any = null) => {};

  deleteRequest = (url: string, config: any = null) => {};
}

export default HttpService;
