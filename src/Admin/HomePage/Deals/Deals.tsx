import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'
import Category from './Category.tsx';
import DealForm from './DealForm.tsx';

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
}))

const Deals = () => {
  const [page, setPage] = useState("Deals")
  return (
     <div className='px-3 pt-3'>
          <div className="m-3">
            <div className='text-3xl flex gap-5 font-semibold text-black'>
               <div className="">
                <Button variant={page === "Deals" ? "contained":"outlined"}
                onClick={()=>setPage("Deals")}>Deals</Button>
               </div>
               <div className="">
                <Button variant={page === "Categories" ? "contained":"outlined"}
                onClick={()=>setPage("Categories")}>Categories</Button>
               </div>
               <div className="">
                <Button variant={page === "DealForm" ? "contained":"outlined"}
                onClick={()=>setPage("DealForm")}>Create Deal</Button>
               </div>

            </div>
          </div>
          
          <div className="my-3"></div>
        { page === "Deals"? <TableContainer component={Paper}>
           <Table>
            <TableHead>
                <TableRow>
                <StyledTableCell align="left">Number</StyledTableCell>
                <StyledTableCell align="left">Id</StyledTableCell>
                <StyledTableCell align="left">Image</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                
                
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
          : page === "Categories" ? <Category/>
          :<DealForm/>
        }
        </div>
  )
}

export default Deals