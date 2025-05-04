import { Box, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'

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

const Dashboard = () => {
  const[status, setStatus] = useState('');
  const handleChange = (event:SelectChangeEvent) => {
    setStatus(event.target.value as string)
  }
  return (
     <div className='px-3 pt-3'>
          <div className="m-3">
            <p className='text-3xl font-semibold text-black'>All Orders</p>
          </div>
          <Box sx={{minWidth: 120}}>
             <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
          <Select label='status' value={status} onChange={handleChange}>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value='PendingVerification'>Pending Verification</MenuItem>
            <MenuItem value='Suspended'>Suspended</MenuItem>
            <MenuItem value='Deactivated'>Deactived</MenuItem>
            <MenuItem value='Banned'>Banned</MenuItem>
            <MenuItem value='Closed'>Closed</MenuItem>
          </Select>
             </FormControl>
          </Box>
          <div className="my-3"></div>
          <TableContainer component={Paper}>
           <Table>
            <TableHead>
                <TableRow>
                <StyledTableCell align="left">Seller Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Mobile</StyledTableCell>
                <StyledTableCell align="left">GSTIN</StyledTableCell>
                <StyledTableCell align="left">Business Status</StyledTableCell>
                <StyledTableCell align="left">Account Status</StyledTableCell>
                <StyledTableCell align="left">Change Status</StyledTableCell>
                
                </TableRow>
            </TableHead>
             <TableBody>
              {[1,1,1,1,1].map((row, i) => (
                <StyledTableRow key={i}>
                  
                  <StyledTableCell align="left">1</StyledTableCell>
                  <StyledTableCell align="left">2</StyledTableCell>
                  <StyledTableCell align="left">3</StyledTableCell>
                  <StyledTableCell align="left">4</StyledTableCell>
                  <StyledTableCell align="left">5</StyledTableCell>
                  <StyledTableCell align="left">6</StyledTableCell>
                  <StyledTableCell align="left">7</StyledTableCell>
                  
                </StyledTableRow>
              ))}
            </TableBody>
           </Table>
          </TableContainer>
        </div>
  )
}

export default Dashboard