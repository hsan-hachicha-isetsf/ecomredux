import Api from "../Axios/Api";
const USER_API="/users"

    const fetchUsers=async()=> {
        return await Api.get(USER_API);
        }
     const fetchUserById=async(userId)=> {
        return await Api.get(USER_API + '/' + userId);
        }
    const deleteUser=async(userId) =>{
        
        return await Api.delete(USER_API + '/' + userId);
        }
     const addUser=async(user)=> { 
       
        return await Api.post(USER_API,user);
    
        }    
     const editUser=(user) =>{ 
       
        return Api.put(USER_API + '/' + user._id, user);
    
        }
          
    export const UserService = {
        fetchUsers,
        fetchUserById,
        addUser,
        deleteUser,
        editUser
        
    }

