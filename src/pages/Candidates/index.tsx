import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import TableComp from "../../components/organisms/Table";
import SideNavComp from "../../components/template/SideNav";
import CandidateInformation from "../../components/template/CandidateInformation";

const StyledBox = styled(Box)({
  background: "#CECECE",
  height: "720",
  width: "1440",
  display: "flex",
  flex: "1",
});

const StyledBoxSide = styled(Box)({});

const Candidates = () => {
  return (
    <StyledBox>
      <SideNavComp />
        <CandidateInformation />
        <TableComp />
    </StyledBox>
  );
};

export default Candidates;
