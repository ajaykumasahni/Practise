import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TypographyComp from "../../atoms/typography";
import { theme } from "../../../theme/theme";
import IconComp from "../../atoms/Icon";
import { Translate } from "@mui/icons-material";

export interface TextIcomCompProps {
  children: string;
  src: string;
  variant: any;
}

const StyledBox = styled(Box)({
  ...theme.typography.body2,
  marginTop: '26px',
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",
  height: "56px",
  width: "1056px",
  background: "#FFFFFF",
  borderRadius: "8px",
});

const styles = {
  icon: {},
  typo: {
    marginTop: '15px',
    transform: 'translate(50px)'
  },
};

const TextIconComp: React.FC<TextIcomCompProps> = ({
  children,
  src,
  variant,
}) => {
  return (
    <StyledBox>
      <TypographyComp sx={styles.typo} variant={variant} children={children} />
      <IconComp sx={styles.icon} src={src} />
    </StyledBox>
  );
};

export default TextIconComp;
