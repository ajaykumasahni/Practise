import React from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface CheckBoxTextCompProps {

}

const CheckBoxTextComp:React.FC<CheckBoxTextCompProps> = () => {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
      };
  
    const children = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Driving while license suspended"
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="Assault Domestic Violence"
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
        <FormControlLabel
          label="Unable to verify employment history at Dunder Mifflin"
          control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
        />
      </Box>
    );
  
    return (
      <div>
        <FormControlLabel
          label="Select the charges for the pre adverse action"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </div>
    );
}

export default CheckBoxTextComp
