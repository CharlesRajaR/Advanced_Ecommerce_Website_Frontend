import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

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
  return (
    <div className='px-3 pt-3'>
      <TableContainer component={Paper}>
       <Table>
        <TableHead>
            <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
        </TableHead>
         <TableBody>
          {[1,1,1,1,1].map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {0}
              </StyledTableCell>
              <StyledTableCell align="right">1</StyledTableCell>
              <StyledTableCell align="right">2</StyledTableCell>
              <StyledTableCell align="right">3</StyledTableCell>
              <StyledTableCell align="right">4</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
       </Table>
      </TableContainer>
    </div>
  )
}

export default Dashboard
