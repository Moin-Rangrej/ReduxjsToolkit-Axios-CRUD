import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Userpost = createAsyncThunk("user/postUser",
     async() => {
        try {
            const response = await axios.get('https://64181f7275be53f451d67f3c.mockapi.io/CRUD')  
            console.log(response.data);      
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
)
console.log(Userpost);

const initialState = {
    isLoading: false,
    users: [],
    error: ""
}

const viewpost = createSlice({
    name: "user",
    initialState:initialState,
    extraReducers: {
        [Userpost.pending]:(state) => {
            state.isLoading = true
        },
        [Userpost.fulfilled]:(state,action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = false
        },
        [Userpost.rejected]: (state,action) =>{
            state.isLoading = false
            state.users = []
            state.error = action.payload
        }
    }
    
})


export default viewpost.reducer