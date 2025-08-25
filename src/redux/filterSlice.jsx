import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"fliterPlants",
    initialState:{
        searchName:"",
        searchCategory:""
    },
    reducers:{
        setSearch:(state,action)=>{
           state.searchName= action.payload
        },
        setCategory:(state,action)=>{
          
            state.searchCategory= action.payload
        }
    }
})

export const {setCategory,setSearch}=filterSlice.actions
export default filterSlice.reducer