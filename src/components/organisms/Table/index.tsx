import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import TypographyComp from '../../atoms/typography';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export interface TableCompProps {

}

const styles = {
  tableContainer: {
    marginTop: '50px',
    transform: 'translate(-430px)',
    width: '1065px',
  },
  text: {

  }
}

const TableComp: React.FC<TableCompProps> = () => {

  const [data, setData] = useState<any>([])

  const getData = async() => {
    try{
      const result = await axios.get(`http://localhost:3006/candidate`)
      console.log(result, "============")
    }catch(error: any){
      // console.log(error.message)
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  console.log(data, "-------------")

  return (
    <TableContainer sx={styles.tableContainer} component={Paper}>
       <TypographyComp variant="boyd2" sx={styles.text} children="Candidate Information" />
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">ADJUDICATION</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">LOCATION</TableCell>
            <TableCell align="right">DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item,">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.adjudication}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
              <TableCell align="right">{item.location}</TableCell>
              <TableCell align="right">{item.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp