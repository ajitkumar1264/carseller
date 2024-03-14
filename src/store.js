import { configureStore } from "@reduxjs/toolkit";
import Carslice from "./Slices/Carslice";


const store=configureStore({
    reducer:{
        car:Carslice
    }
})

export default store;