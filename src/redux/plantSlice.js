import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../constants";

export const fetchPlants = createAsyncThunk(
  "fetchPlants",
  async () => {
    const response = await axios.get(BASE_URL+"/allPlants",{withCredentials:true});
    return response.data;
  }
);

const plantSlice=createSlice({
    name:"plants",
    initialState:[],
    reducers:{
        addPlants:(state,action)=>{
            return action.payload
        },
        removePlants:(state,action)=>{
            return []
        }
    },
    extraReducers: (builder) => {
    builder.addCase(fetchPlants.fulfilled, (state, action) => action.payload);
  }
})

export const {addPlants,removePlants}=plantSlice.actions
export default plantSlice.reducer