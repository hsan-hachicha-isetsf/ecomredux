import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {UserService} from "../Services/User-Service"

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await UserService.addUser(user);
    return res.data
  }
  catch (error) {
    return rejectWithValue(error.message);
  }
  }
);
export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
      const res = await UserService.fetchUser();
      return res.data;
      }
      catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (user,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await UserService.editUser(user);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });
  
  export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      await UserService.deleteUser(id);
      return  id ;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });


  export const findUserByID = createAsyncThunk(
    "user/findUserByID",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await UserService.fetchUserById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });
export const userSlice = createSlice({
  name: 'user',
  initialState:{
    users:[],
    isLoading: false,
    status:null,
  },
  reducers: {},
  
  extraReducers: {
    //get user
    [getUsers.pending]:(state,action)=>{
      state.isLoading=true;
      state.status=null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status = null;
        state.users=action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
      
    },

    //insertion user
    [createUser.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;
    },
    [createUser.fulfilled]: (state, action) => {
     
      state.users.push(action.payload);
      state.isLoading=false;
      state.status=null;
    },
    [createUser.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
    },
    //Modification user
    [updateUser.fulfilled]: (state, action) => {
      const index = state.users.findIndex(user => user._id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },

    //Delete user
    [deleteUser.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;    
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status=null;    
      state.users=state.users.filter((item)=> item._id!==action.payload)
    
    },
    [deleteUser.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;       
    },
  //Fectch user
    [findUserByID.pending]: (state, action) => {
      state.isLoading = true
      state.status = null
        
      },
    [findUserByID.fulfilled]:(state, action) => {
      state.isLoading = false
      state.status = null
   },
  }
  }
)
export default userSlice.reducer;
