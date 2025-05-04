import React from 'react'
import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer,
     TableHead, TableRow } from '@mui/material'

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

const Orders = () => {
  return (
    <div className='px-3 pt-3'>
      <div className="m-3">
        <p className='text-3xl font-semibold text-black'>All Orders</p>
      </div>
      <TableContainer component={Paper}>
       <Table>
        <TableHead>
            <TableRow>
            <StyledTableCell align="left">Order Id</StyledTableCell>
            <StyledTableCell align="left">Products</StyledTableCell>
            <StyledTableCell align="left">Shipping Address</StyledTableCell>
            <StyledTableCell align="left">OrderStatus</StyledTableCell>
            <StyledTableCell align="left">Update</StyledTableCell>
            
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
              
            </StyledTableRow>
          ))}
        </TableBody>
       </Table>
      </TableContainer>
    </div>
  )
}

export default Orders
