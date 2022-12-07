import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Datatable() {
  return (
 
   
<div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">E Book Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Free Video</th>
            <th scope="col">Cost</th>
            <th>Buy</th>
            <th>Sale</th>
            <th>Comission</th>
            
          </tr>
        </thead>
        <tbody>
         

        </tbody>
      </table>
    </div>


    
  );
}


{/*export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableRowHead'>
          <TableRow>
          <TableCell   component="th" align="justify" class="thead">E Book Name</TableCell>
            <TableCell component="th" align="justify" class="thead">Designation</TableCell>
            <TableCell component="th" align="justify" class="thead">Free Video</TableCell>
            <TableCell component="th" align="justify" class="thead">Cost</TableCell>
            <TableCell component="th" align="justify" class="thead">Buy</TableCell>
            <TableCell component="th" align="justify" class="thead">Sale</TableCell>
            <TableCell component="th" align="justify" class="thead">Comission</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Month}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="TableRowText" component="th" scope="row" align="justify">{row.E_Book_Name}</TableCell>
              <TableCell className="TableRowText" align="justify">{row.Designation}</TableCell>
              <TableCell className="TableRowText" align="justify">{row.Free_Video}</TableCell>
              <TableCell className="TableRowText" align="justify">{row.Cost}</TableCell>
              <TableCell className="TableRowText" align="justify">{row.Buy}</TableCell>
              <TableCell className="TableRowText" align="justify">{row.Sale}</TableCell>
              <TableCell className="TableRowText" align="justify">{row.Comission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}*/}