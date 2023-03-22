import React, { useEffect, useState } from 'react'
import { TextField, Button } from "@mui/material";

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUserById } from '../Slices/Create';



const Editdata = () => {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(editUser())
    //     console.log('use effecy');
    // }, [])
    const navigate = useNavigate()
    const userdata = useSelector(state => state.userdata.users)
    console.log(userdata);

    if(userdata != ''){
        console.log('not empty');
    }

    const [name, setname] = useState(userdata.name)
    const [age, setage] = useState("")
    const [email, setemail] = useState("")

    const handleUpdate = (e) => {
        e.preventDefault()
        const data = {
            name, age, email
        }
        console.log(data);
        dispatch(editUser(data))
        alert("data Updated")
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <TextField
                    id="standard-password-input"
                    type="text"
                    value={userdata.name}
                    onChange={(e) => setname(e.target.value)}
                    autoComplete="current-password"
                    variant="standard"
                />
                <br />
                <TextField
                    id="standard-password-input"
                    type="email"
                    value={userdata.email}
                    onChange={(e) => setemail(e.target.value)}
                    autoComplete="current-password"
                    variant="standard"
                />
                <br />
                <TextField
                    id="standard-password-input"
                    type="number"
                    value={userdata.age}
                    onChange={(e) => setage(e.target.value)}
                    autoComplete="current-password"
                    variant="standard"
                />
                <br />
                <Button type='submit' variant="contained" color="primary">Update</Button>
                <Button type='submit' variant="outlined" onClick={() => navigate(-1)}>Back</Button>
            </form>
        </div>
    )
}

export default Editdata
