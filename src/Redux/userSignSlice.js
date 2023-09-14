import { createSlice } from "@reduxjs/toolkit";
const userSignSlice = createSlice({
    name:"user",
    initialState :null,
    reducers :{
        addUser:(state, action)=>{
           return action.payload;
        },
        removeUser:(state, action)=>{
           return null;
        }
    }
})
export const {addUser, removeUser}  = userSignSlice.actions;
export default userSignSlice.reducer;