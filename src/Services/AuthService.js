import Api from '../Axios/Api';

const USER_API="/users"

 const register=async(user)=> { 
   
    return await Api.post(USER_API,user);

    }    

const login=async(user)=> { 
        return await Api.post(USER_API+"/loginuser", user);
        
    }     

 export const AuthService = {
    
    register,
    login
}
