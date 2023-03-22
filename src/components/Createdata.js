import React, { useEffect, useState } from 'react'
import { TextField, Button } from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from '../Slices/Create';
import { postData } from '../Slices/Create';
import { useNavigate } from 'react-router-dom';

const Createdata = () => {
    // const [userid,setUserid] = useState()
    const [name,setUsername] = useState()
    const [age,setUserage] = useState()
    const [email,setUseremail] = useState()

    // const myusers = useSelector((state) => state.userdata)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [])
    const navigate = useNavigate()
    const handleUserdata = (e) => {
        e.preventDefault()
        const data = {
            name,age,email
        }
        console.log(data);
        dispatch(postData(data))
        alert("data Submited")
        console.log('click');
        navigate("/read")
    }
    


    return (
        <div>
            <div style={{
                display: 'flex',
                border: '2px solid black',
                borderRadius: '10px',
                width: '300px',
                justifyContent: 'space-around',
            }}>
                <form onSubmit={handleUserdata}>
                    <TextField
                        id="standard-password-input"
                        label="Enter Name"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <br />
                    <TextField
                        id="standard-password-input"
                        label="Enter Email"
                        type="email"
                        onChange={(e) => setUseremail(e.target.value)}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <br />
                    <TextField
                        id="standard-password-input"
                        label="Enter Age"
                        type="number"
                        onChange={(e) => setUserage(e.target.value)}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <br />
                    <Button type='submit' variant="contained" color="success">Submit</Button>
                </form>
                
                
                
            </div>
        </div>
    )
}

export default Createdata
