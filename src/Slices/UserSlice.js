import { createSlice } from "@reduxjs/toolkit";

const initialState={

    Islogin:false,
    RegisterUser:{},
    orders:[],
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
        },
        Order:(state,action)=>{
            state.orders.push(action.payload);
        },
        RemoveOrder:(state,action)=>{
            let order=state.orders.filter((x)=>x.id!==action.payload);
            state.orders=order;

        }
    }
})

export const {RegisterUser,LoginUser,LogOut,Order,RemoveOrder}=userSlice.actions;
export default userSlice.reducer;