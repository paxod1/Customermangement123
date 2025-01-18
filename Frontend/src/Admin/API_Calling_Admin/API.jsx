import { basicRequest } from '../../AxiosCreate';
import { LoginData } from '../../Redux/AdminSlice'


export const SignupAPI = async (data) => {
    try {
        // Send data to the backend
        const response = await basicRequest.post('/admin/signup', data);
        
        // Display the backend response in the alert box
        alert(response.data);

    } catch (err) {
        // Log the error and show an error message in the alert box
        console.error("SignupAPI Error:", err);
        alert(err.response?.data?.message || 'An error occurred during signup.');
    }
};

export const loginAdmin=async (data,dispatch)=>{
    try{
          const LoginInfo=await basicRequest.post("/admin/login",data)
          console.log(LoginInfo.data)
          dispatch(LoginData(LoginInfo.data))
          
    }catch(err){
        console.log(err)
    }
}
