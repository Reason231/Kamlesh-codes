import HttpService from "../../services/http.service";
import * as Yup from "yup"

class AuthService extends HttpService{
    registerUserDto = ()=>{

        const RegistrationDTO =Yup.object({
     
            name: Yup.string().matches(/^[a-zA-Z ]+$/).min(2).max(50).required(),                                                                       // it means it should have the text between 2 to 50 and it is required
                email: Yup.string().email().required(),
                 password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required(),
                  confirmPassword:Yup.string().oneOf([Yup.ref('password')]).required(),
                  address:Yup.string().nullable().optional(),                                  // it doesn't matter if we won't write cause optional
                phone:Yup.string().min(10).max(25),
                image:Yup.mixed(),
                role:Yup.string().matches(/^(admin|seller|customer)$/).required()
           });
           return RegistrationDTO;
    }
}
const authSvc =new AuthService()
export default authSvc;