import { Delete } from '@mui/icons-material';
import { Box, colors, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
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

const Coupon = () => {
  const[status, setStatus] = useState('');
  const handleChange = (event:SelectChangeEvent) => {
    setStatus(event.target.value as string)
  }
  return (
     <div className='px-3 pt-3'>
          <div className="m-3">
            <p className='text-3xl font-semibold text-black'>Coupons</p>
          </div>
          <Box sx={{minWidth: 120}}>
             <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
          <Select label='status' value={status} onChange={handleChange}>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value='PendingVerification'>Expired</MenuItem>
            <MenuItem value='Suspended'>Special</MenuItem>
            
          </Select>
             </FormControl>
          </Box>
          <div className="my-3"></div>
          <TableContainer component={Paper}>
           <Table>
            <TableHead>
                <TableRow>
                <StyledTableCell align="left">Coupon code</StyledTableCell>
                <StyledTableCell align="left">Start Date</StyledTableCell>
                <StyledTableCell align="left">End Date</StyledTableCell>
                <StyledTableCell align="left">Max Order Value</StyledTableCell>
                <StyledTableCell align="left">Discount</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Remove</StyledTableCell>
                
                </TableRow>
            </TableHead>
             <TableBody>
              {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((row, i) => (
                <StyledTableRow key={i}>
                  
                  <StyledTableCell align="left">1</StyledTableCell>
                  <StyledTableCell align="left">2</StyledTableCell>
                  <StyledTableCell align="left">3</StyledTableCell>
                  <StyledTableCell align="left">4</StyledTableCell>
                  <StyledTableCell align="left">5</StyledTableCell>
                  <StyledTableCell align="left">6</StyledTableCell>
                  <StyledTableCell align="left"><Delete style={{color:'red'}}/></StyledTableCell>
                  
                </StyledTableRow>
              ))}
            </TableBody>
           </Table>
          </TableContainer>
        </div>
  )
}

export default Coupon