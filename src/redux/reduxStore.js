import { configureStore } from "@reduxjs/toolkit"
import plantReducer from "./plantSlice"
import filterReducer from "./filterSlice"
import cartReducer from "./cartSlice"


const plantStore=configureStore({
    reducer:{
        plant:plantReducer,
        filter:filterReducer,
        cart:cartReducer
    }
})
export default plantStore