import React from 'react'
import SideNavComp from '../../components/template/SideNav'
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import VectorLeft from "../../images/VectorLeft.svg"
import ButtonComp from '../../components/atoms/button';
import IconTextComp from '../../components/molecules/SideNavTextIcon';
import Down from "../../images/down.svg"
import TextIconComp from '../../components/molecules/TextIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TypographyComp from '../../components/atoms/typography';

const StyledBox = styled(Box)({
  // transform: 'translate(300px)',
  marginLeft:'100px',
  display: 'flex',
  flex: '1',
  backgroundColor: '#CECECE'
})

const StyledBoxUpper = styled(Box)({
  width: '1056',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: "space-between"
})
const StyledBoxTable = styled(Box)({

})

const StyledBoxCandidate = styled(Box)({

})

const StyledNavBox = styled(Box)({
  flex: '0.15'
})

const StyledBoxSide = styled(Box)({
  flex: '0.85',
  marginLeft: '100px'
})

const styles = {
  tableContainer : {
    width: '1065px',
    height: '338px',
    marginTop: '24px'
  },
  text: {
    marginTop: '20px',
    // marginLeft: '40px',
    height: '50px',
    borderBottom: '1px solid #CECECE',
  }
}
function createData(
  Search: string,
  // calories: number,
  Status: string,
  // carbs: number,
  Date: number,
) {
  return { Search, Status, Date};
}

const rows = [
  createData("SSN Verification", "Clear", 2/22/2020),
  createData("SSN Verification", "Clear", 2/22/2020),
  createData("SSN Verification", "Clear", 2/22/2020),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CandidateDetails = () => {
  return (
    <StyledBox>
      <StyledNavBox>
      <SideNavComp />
      </StyledNavBox>
     <StyledBoxSide>
     <StyledBoxUpper>
        <IconTextComp variant="body1" children="John Smith" src={VectorLeft} />
        <ButtonComp variantContained="outlined" children="Pre Adverse Action" />
        <ButtonComp variantContained="contained" children="Engage" /> 
      </StyledBoxUpper>

      <StyledBoxCandidate>
        <TextIconComp variant="body1" children="Candidate Information" src={Down} />
        <TextIconComp variant="body1" children="Candidate Information" src={Down} />
      </StyledBoxCandidate>

      <TableContainer sx={styles.tableContainer} component={Paper}>
      <StyledBoxTable>
        <TypographyComp variant="body1" children="Count Searches" sx={styles.text}/>
      </StyledBoxTable>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">SEARCH</TableCell>
            <TableCell align="left">STATUS</TableCell>
            <TableCell align="left">DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.Search}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
              <TableCell align="left">{row.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </StyledBoxSide>
    </StyledBox>

  )
}

export default CandidateDetails