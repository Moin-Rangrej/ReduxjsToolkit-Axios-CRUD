import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postData = createAsyncThunk('user/postuser',
    async (data) => {
        const { name, age, email } = data
        return axios.post('https://64181f7275be53f451d67f3c.mockapi.io/CRUD', {
            name,
            age,
            email
        },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(res => console.log(res.data))
            .catch(error => console.log(error.message))
    }
)

export const getUser = createAsyncThunk("user/postUser",
    async () => {
        try {
            const response = await axios.get('https://64181f7275be53f451d67f3c.mockapi.io/CRUD')
            // console.log(response.data);      
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
)
// console.log(getUser);

export const getUserById = createAsyncThunk("user/postUser",
    async (id) => {
        try {
            const response = await axios.get(`https://64181f7275be53f451d67f3c.mockapi.io/CRUD/${id}`)
            console.log(response.data);      
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
)

export const deleteUser = createAsyncThunk("user/deleteUser",
    async (id) => {
        try {
            if (window.confirm("Are You Sure Delete this Data?")) {
                const deleteuserdata = axios.delete(`https://64181f7275be53f451d67f3c.mockapi.io/CRUD/${id}`)
                return await deleteuserdata.data
            }
        } catch (error) {
            console.log("Delete Error:", error);
        }
    }
)

export const editUser = createAsyncThunk('user/editUser',
    async ({ id, name, email, age }) => {
        console.log(id, name, email, age)
        return await axios.put(`https://64181f7275be53f451d67f3c.mockapi.io/CRUD/${id}`, {
            name,
            email,
            age
        })
            .then(res => res.data)
            .catch(error => console.log(error.message))
    }
)

const initialState = {
    isLoading: false,
    users: [],
    error: ""
}

const viewpost = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: {
        [getUser.pending]: (state) => {
            state.isLoading = true
        },
        [getUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = false
        },
        [getUser.rejected]: (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.payload
        },
        [deleteUser.pending]: (state) => {
            state.isLoading = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = false
        },
        [deleteUser.rejected]: (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.payload
        },
        [postData.pending]: (state) => {
            state.isLoading = true
        },
        [postData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = false
        },
        [postData.rejected]: (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.payload
        },
        [editUser.pending]: (state) => {
            state.isLoading = true
        },
        [editUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = false
        },
        [editUser.rejected]: (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.payload
        },
        [getUserById.pending]: (state) => {
            state.isLoading = true
        },
        [getUserById.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = false
        },
        [getUserById.rejected]: (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.payload
        }
    }

})


export default viewpost.reducer