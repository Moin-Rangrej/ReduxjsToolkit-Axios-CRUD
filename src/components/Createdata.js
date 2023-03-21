import React, { useEffect } from 'react'
import { TextField, Button } from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import { Userpost } from '../Slices/Create';

const Createdata = () => {

    const myusers = useSelector((state) => state.userdata)
    console.log(myusers.users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Userpost())
    }, [])
    

    return (
        <div>
            <div style={{
                display: 'flex',
                border: '2px solid black',
                borderRadius: '10px',
                width: '300px',
                justifyContent: 'space-around',
            }}>
                <form>
                    <TextField
                        id="standard-password-input"
                        label="Enter Name"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <br />
                    <TextField
                        id="standard-password-input"
                        label="Enter Name"
                        type="number"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <br />
                    <TextField
                        id="standard-password-input"
                        label="Enter Name"
                        type="email"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <br />
                    <br />
                    <Button variant="contained" color="success">Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Createdata
