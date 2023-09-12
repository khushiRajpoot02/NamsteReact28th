import { createSlice } from "@reduxjs/toolkit";
const appSignSlice = createSlice({
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
export const {addUser, removeUser}  = appSignSlice.actions;
export default appSignSlice.reducer;