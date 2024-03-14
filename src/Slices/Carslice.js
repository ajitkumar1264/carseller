import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/Car.json"

let AllCar=data;

const initialState={
    CarData:data,
    SelectedCity:"ALL",
}
const Carslice=createSlice({
    name:'car',
    initialState,
    reducers:{
        AddCarData:(state,action)=>{

            state.CarData.push(action.payload);
        },
        SelecteCity:(state,action)=>{
            if(action.payload==="ALL")
            {
                state.CarData=initialState.CarData
            }
            else{
                state.CarData = AllCar.filter(x => x.car_location === action.payload);
                
                
            }
            state.SelectedCity=action.payload;
        }
    }
})

export const {AddCarData,SelecteCity}=Carslice.actions;
export default Carslice.reducer;