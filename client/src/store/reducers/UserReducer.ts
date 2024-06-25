import { createAsyncThunk, createSlice ,createAction} from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import axios from "axios";
const initialUsers:User[]=[];
export const getUsers:any=createAsyncThunk(
    "users/getAllUser",
    async()=>{
       const response= await axios.get("http://localhost:3000/users");
       return response.data;
    }
)
export const addUser:any=createAsyncThunk(
  "users/addUser",
  async(user)=>{
    const response=await axios.post("http://localhost:3000/users",user)
    return response.data;
    
  }
)
export const deleteUserById:any=createAsyncThunk(
  "users/deleteUser",
  async(id)=>{
    await axios.delete(`http://localhost:3000/users/${id}`)
    return id;
  }
)
const UsersReducer=createSlice({
    name:'usersReducer',
    initialState:initialUsers,
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getUsers.pending, (state, action) => {
            // action is inferred correctly here if using TS
          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(getUsers.fulfilled, (state, action) => {
            return action.payload;
          })
          // You can match a range of action types
          .addCase(getUsers.rejected,()=>{})
          .addCase(addUser.fulfilled,(state,action)=>{
              state.push(action.payload)
          })
          .addCase(deleteUserById.fulfilled,(state,action)=>{
             const newUsersDelete=state.filter(btn=>btn.id!==action.payload);
             return newUsersDelete;           
          })
    },
})
export default UsersReducer.reducer;