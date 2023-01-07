import React from 'react'
import {styled} from "@mui/material/styles"
import {Avatar as MUIAvatar} from "@mui/material"


export interface AvatarCompProps {
    children: string
}

const StyledAvatar = styled(MUIAvatar)({
  
})

const AvatarComp:React.FC<AvatarCompProps> = ({children}) => {
  return (
    <StyledAvatar src={children}></StyledAvatar>
  )
}

export default AvatarComp