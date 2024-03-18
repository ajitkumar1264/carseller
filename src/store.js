import { configureStore } from "@reduxjs/toolkit";
import Carslice from "./Slices/Carslice";
import UserSlice from "./Slices/UserSlice";


const store=configureStore({
    reducer:{
        car:Carslice,
        user:UserSlice
    }
})

export default store;