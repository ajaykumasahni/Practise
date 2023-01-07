import React from 'react'
import { styled } from "@mui/material/styles";
import { Box} from "@mui/material";
import Home from "../../../images/Home.svg";
import Candidates from "../../../images/Vector-1.svg";
import AdverseAction from "../../../images/Vector-2.svg";
import Logs from "../../../images/Vector-3.svg";
import Analytics from "../../../images/Vector-4.svg";
import Account from "../../../images/Vector-5.svg";
import Screenings from "../../../images/Vector-6.svg";
import { Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import TypographyComp from "../../atoms/typography";
import { theme } from "../../../theme/theme";

export interface CandidateInformationProps {

}

const StyledBox = styled(Box)({
  // alignItems: 'center',
  // justifyContent: 'space-between',
  width: '10650px',
  height: '720px',
  flex: '0.80'
})

const StyledBoxTwo = styled(Box)({});

const StyledInside = styled(Box)({
  // transform: 'translate(286px)'
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

const StyledBoxFlex = styled(Box)({
  transform: 'translate(600px)'
})

const styles = {
  text: {
    marginTop: "24px",
    marginLeft: "24px",
  },
  typo: {
    ...theme.typography.body1,
    transform: 'translate(106px)'
  }
};


const CandidateInformation:React.FC<CandidateInformationProps> = () => {

  return (
    <StyledBox>
        <StyledInside>
          <TypographyComp sx={styles.typo} variant="body1" children="Candidates" />
          <StyledBoxFlex >
          <Button variant="outlined" startIcon={<GetAppIcon />}>
            Import
          </Button>
          <Button variant="outlined" startIcon={<LocalHospitalOutlinedIcon />}>
            Manual Order
          </Button>
          </StyledBoxFlex>
        </StyledInside>
    </StyledBox>
  )
}

export default CandidateInformation