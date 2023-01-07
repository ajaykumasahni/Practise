import React from 'react'
import {styled} from "@mui/material/styles"
import { Button as MUIButton } from "@mui/material";

export interface ButtonCompProps {
    children: string,
    // textColor: any,
    variantContained: any
    onClick?: any
    sx? :string
}

const StyledButton = styled(MUIButton)({

})

const ButtonComp: React.FC<ButtonCompProps> = ({children, variantContained, onClick}) => {
  return (
    <StyledButton onClick={onClick} style={{textTransform: 'capitalize'}} variant={variantContained}>{children}</StyledButton>
  )
}

export default ButtonComp;