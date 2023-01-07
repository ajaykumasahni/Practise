import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import IconComp from "../../atoms/Icon";
import Logo from "../../../images/logo.svg";
import IconTextComp from "../../molecules/SideNavTextIcon";
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
import AvatarComp from "../../atoms/avatar";
import LogoutUser from "../../../images/Vector.svg"

const StyledBox = styled(Box)({
//   marginLeft: "24px",
//   marginTop: "24px",
  transform: 'translate(24px)',
  height: "720px",
  width: "238px",
  background: "#FFFFFF",
  borderRadius: "6px",
  flex: '0.15'
});

const StyledBoxOne = styled(Box)({
  marginTop: "20px",
  marginLeft: "20px",
});

const StyledBoxTwo = styled(Box)({
  marginTop: '204px',
  paddingTop: '10px',
  borderTop: '1px solid #E5E7ED',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
});

const StyledInside = styled(Box)({});

const StyledFlex = styled(Box)({
  transform: 'translate(-10px)'
})

const styles = {
  text: {
    marginTop: "24px",
    marginLeft: "24px",
  },
  typo: {
    ...theme.typography.body1,
  },
  icon: {

  },
  textOne: {
  },
  textTwo: {

  }
};

export interface SideNavCompProps {
    variant?: string
}

const SideNavComp:React.FC<SideNavCompProps> = ({variant}) => {
  const templateValues = [
    { src: Home, variant: "subtitle2", children: "Home" },
    { src: Candidates, variant: "subtitle2", children: "Candidates" },
    { src: AdverseAction, variant: "subtitle2", children: "Adverse Actions" },
    { src: Logs, variant: "subtitle2", children: "Logs" },
    { src: Analytics, variant: "subtitle2", children: "Analytics" },
    { src: Account, variant: "subtitle2", children: "Account" },
    { src: Screenings, variant: "subtitle2", children: "Screenings" },
  ];
  return (
    <StyledBox>
      <IconComp sx={styles.text} src={Logo} />
      <StyledBoxOne>
        {templateValues?.map((item) => (
          <IconTextComp
            src={item.src}
            variant={item.variant}
            children={item.children}
          />
        ))}
      </StyledBoxOne>

      {/* page divide */}
      <StyledBoxTwo>
        <AvatarComp children="https://s3-alpha-sig.figma.com/img/e471/5a45/712dd1ca82591ad52dcfa8f03dfdd1ab?Expires=1673222400&Signature=HGzFYBUk4ANGEd1ZcTrRRCE7Czy5rmAWrq54OV0IMmaGTgx7dLQl8DownKkmCYTgnYsWE3Qa-un6OekrhJt9axtVlM9b4zKLr0SDF-LIfjpGNzQVUS2HU7oELvJxs-2O2Yx6~hNh3bnsDLf5emn~e~O61pKmZ5MR1SeZlyff17mOC7JuOphag-zr~UyT0UWU2O7vMvCs6zj3fW~hEeXDb~EfNtjL5PevvkxcsByNVcpnoYa09gktPW0XC06RqtgCyUuea3-4j0~nUCio4Mx-sxINfYVX1qsBTvPy0Z-d0W6lZFw9Fo86O~JwDxM3XD92RPXV1vFFcQbb4gtoixWTig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        <StyledFlex>
          <TypographyComp variant="subtitle2" children="James Rodriguez" sx={styles.textOne} />
          <TypographyComp variant="subtitle1" children="james.co" sx={styles.textTwo} />
        </StyledFlex>
        <IconComp src={LogoutUser} sx={styles.icon} />
      </StyledBoxTwo>
    </StyledBox>
  );
};

export default SideNavComp;
