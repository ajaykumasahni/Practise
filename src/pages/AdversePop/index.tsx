import React from "react";
import { styled } from "@mui/material/styles";
import { Box} from "@mui/material";
import SideNavComp from "../../components/template/SideNav";
import IconTextComp from "../../components/molecules/SideNavTextIcon";
import LeftArrow from "../../images/VectorLeft.svg";
import TypographyComp from "../../components/atoms/typography";
import EmailContainerComp from "../../components/template/EmailContainer";
import CheckBoxTextComp from "../../components/organisms/CheckboxText";
import EmailFooterComp from "../../components/organisms/EmailFooter";

const StyledBox = styled(Box)({
  display: 'flex',
  flex: "1",
  backgroundColor: '#CECECE'
});

const StyledBoxSide = styled(Box)({});

const StyledNavBox = styled(Box)({
  flex: "0.15"
})

const StyledAdverseSide = styled(Box)({
  marginTop: '20px',
  flex: "0.85",
  width: '1056px',
  height: '649px',
  background: '#FFFFFF',

boxShadow: '0px 4px 28px rgba(45, 45, 47, 0.1)',
borderRadius: '12px'
})

const styles = {
  text: {},
};

const AdversePopUp = () => {
  return (
    <StyledBox>
      <StyledNavBox>
      <SideNavComp />
      </StyledNavBox>
       <StyledAdverseSide>
       <StyledBoxSide>
        <IconTextComp
          variant="body1"
          children="Pre adverse action"
          src={LeftArrow}
        />
      </StyledBoxSide>
      <EmailContainerComp />
      {/* <CheckBoxTextComp /> */}

      <TypographyComp
        sx={styles.text}
        children="If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.Sincerely, Checkr-bpo |"
        variant="subtitle2"
      />

      <EmailFooterComp />
       </StyledAdverseSide>
    </StyledBox>
  );
};

export default AdversePopUp;
