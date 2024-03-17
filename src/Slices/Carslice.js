import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/Car.json";
import { act } from "react-dom/test-utils";

let AllCar = data;


const initialState = {
  CarData: data,
  SelectedCity: "ALL",
  selectedCarData:[],
  SelectedCar: "ALL",
  UserView:[],
  carname: "false",
};
const Carslice = createSlice({
  name: "car",
  initialState,
  reducers: {
    AddCarData: (state, action) => {
      state.CarData.push(action.payload);
    },
    SetIntial: (state, action) => {
      state.CarData = data;
      state.SelectedCar = "ALL";
      state.SelectedCity = "ALL";
      state.carname = false;
    },
    SelecteCity: (state, action) => {

    if(state.carname === "true")
    {
        if(action.payload=="ALL")
        {
            state.CarData=state.selectedCarData;
        }
        else{
            state.CarData = state.selectedCarData.filter(
                (x) => x.car_location === action.payload
              )
        };
    }
    else{

        if(action.payload=="ALL")
        {
            state.CarData = initialState.CarData;
        }
        else{
            state.CarData = AllCar.filter(
                (x) => x.car_location === action.payload
              );
        }
    }
      state.SelectedCity = action.payload;
    },
    Selectedcar: (state, action) => {
      state.CarData = state.CarData.filter((x) => x.CarName === action.payload);
      state.SelectedCar = action.payload;
      state.selectedCarData = state.CarData.filter(
        (x) => x.CarName === action.payload
      );
      state.carname = "true";
    },
    CurentCarView:(state,action)=>{
      console.log(action.payload);
      let car=AllCar.filter((x)=>x.id===Number(action.payload));
      
      state.UserView.push(car[0]);
    }
  },
});

export const { AddCarData, CurentCarView, SelecteCity, Selectedcar, SetIntial } =
  Carslice.actions;
export default Carslice.reducer;
