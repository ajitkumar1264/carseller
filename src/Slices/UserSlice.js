import { createSlice } from "@reduxjs/toolkit";

const initialState={

    Islogin:false,
    RegisterUser:{},
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
    
        RegisterUser:(state,action)=>{
            state.RegisterUser=action.payload
        },
        LoginUser:(state,action)=>{
            state.Islogin=true;
        },
        LogOut:(state,action)=>{
            state.Islogin=false;
            state.RegisterUser={};
        }
    }
})

export const {RegisterUser,LoginUser,LogOut}=userSlice.actions;
export default userSlice.reducer;