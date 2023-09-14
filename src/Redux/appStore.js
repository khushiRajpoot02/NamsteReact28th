// creating cart store
import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSignSlice";
const appStore = configureStore ({
   reducer : {
    cart : cartReducer,
     user : userReducer,
   }
})
export default appStore;

/// coding + Anchal se baat  ///