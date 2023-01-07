import React from 'react'
import { styled } from "@mui/material/styles";
import { Box} from "@mui/material";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import IconComp from '../../atoms/Icon';

export interface InputSearchCompProps {
    src: string,
    label: string
}

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center'
})

const styles = {
  text: {
    width: '450px',
    height: '10px',
  },
  icon: {
    transform: 'translate(40px)',
    marginTop: '50px'
  }
}

const InputSearchComp:React.FC<InputSearchCompProps> = ({src, label}) => {
  return (
    <StyledBox>
       <IconComp sx={styles.icon} src={src} />
      <TextField sx={styles.text} label="search candidate name" id="fullWidth" />
    </StyledBox>
  )
}

export default InputSearchComp