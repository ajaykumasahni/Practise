import React from 'react'

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import TypographyComp from '../../atoms/typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const StyledBoxInsideEmailContainer = styled(Box)({

})

const EmailFrom = styled(Box)({
  display:'flex',
  alignItems: 'center'
})

const EmailTo = styled(Box)({
  display:'flex',
  alignItems: 'center'
})

const EmailSubject = styled(Box)({
  display:'flex',
  alignItems: 'center'
})

const EmailContent = styled(Box)({

})

const styles = {
  text:{

  }
}


const EmailContainerComp = () => {

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
    <StyledBoxInsideEmailContainer>
        <EmailFrom>
          <TypographyComp sx={styles.text} children="From:" variant="subtitle2" />
          <TypographyComp sx={styles.text} children="Kyle@Checkr.Com" variant="subtitle1" />
        </EmailFrom>
        <EmailTo>
        <TypographyComp sx={styles.text} children="To:" variant="subtitle2" />
          <TypographyComp sx={styles.text} children="John Smith@Checkr.Com" variant="subtitle1" />
        </EmailTo>
        <EmailSubject>
          <TypographyComp sx={styles.text} children="Subject:" variant="subtitle2" />
          <TypographyComp sx={styles.text} children="Pre-Adverse Action Notice - checkr- Bpo" variant="subtitle1" />
        </EmailSubject>
        <EmailContent>
          <TypographyComp sx={styles.text} children="Dear John Smith" variant="body2" />
          <TypographyComp sx={styles.text} children="You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc." variant="body2" />
        </EmailContent>

        <Box>
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
      </Box>
      </StyledBoxInsideEmailContainer>
  )
}

export default EmailContainerComp
