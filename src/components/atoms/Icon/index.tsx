import React, { Children } from 'react'
import {styled} from "@mui/material/styles"
import Box from "@mui/material/Box";

export interface IconCompProps {
    src: string
    sx: any
}

const IconComp:React.FC<IconCompProps> = ({sx,src}) => {
  return (
    <Box>
      <img style={sx}src={src} alt='' />
    </Box>
  )
}

export default IconComp