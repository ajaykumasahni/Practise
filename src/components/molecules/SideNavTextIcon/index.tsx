import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import IconComp from "../../atoms/Icon";
import TypographyComp from "../../atoms/typography";

export interface IconTextCompProps {
  src: string;
  children: string;
  variant: string;
}

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: '11px',
  width: "206px",
  height: "44px",
  background: "#FFFFFF",
  borderRadius: "8px",
});

const styles = {
  text: {},
  typo: {
    marginLeft: "26px",
  },
};

const IconTextComp: React.FC<IconTextCompProps> = ({
  src,
  children,
  variant,
}) => {
  return (
    <StyledBox>
      <IconComp sx={styles.text} src={src} />
      <TypographyComp sx={styles.typo} variant={variant} children={children} />
    </StyledBox>
  );
};

export default IconTextComp;
