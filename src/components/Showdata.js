import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { deleteUser } from '../Slices/Create';
import CircularProgress from '@mui/material/CircularProgress';
import { getUser } from '../Slices/Create';
import { editUser, getUserById } from '../Slices/Create';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const Showdata = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.userdata.users)
  const navigate = useNavigate()
  const editUsers = (id,name,age,email) => {
      dispatch(editUser({id,name,age,email}))
      navigate("/edit")
  }

  const handledeleteUser = (id) => {
      dispatch(deleteUser(id))
      console.log("delete" , id);
  }

  useEffect(() => {
    dispatch(getUser())
  }, [])
  return (
    <div >

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && 
              users.map((row) => (
                
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.age}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" color="success" onClick={() => editUsers(row.id,row.name,row.age,row.email)}>Edit</Button>
                  <Button variant="contained" color="error" onClick={() => handledeleteUser(row.id)}>Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Showdata