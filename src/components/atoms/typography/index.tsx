import React from 'react'
import { Typography as MUITypography } from "@mui/material";
import {styled} from "@mui/material/styles"

export interface TypographyCompProps {
    children: string,
    variant: any,
    sx?: any
}

const StyleTypography = styled(MUITypography)({
    
})

const TypographyComp:React.FC<TypographyCompProps> = ({sx,variant,children}) => {
  return (
    <StyleTypography style={sx} variant={variant}>{children}</StyleTypography>
  )
}

export default TypographyComp