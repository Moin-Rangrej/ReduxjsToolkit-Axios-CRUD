import { configureStore } from "@reduxjs/toolkit";
import  viewpost  from "../Slices/Create";

const store = configureStore({
    reducer:{
        userdata: viewpost
    }
})

export default store