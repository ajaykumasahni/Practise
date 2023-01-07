import React from "react";
import { styled } from "@mui/material/styles";
import { Box, DialogContent, DialogContentText, Dialog } from "@mui/material";
import TypographyComp from "../../atoms/typography";
import ButtonComp from "../../atoms/button";

const StyledBox = styled(Box)({});

const StyledBoxSide = styled(Box)({});

const EmailPagination = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: '50px',

});

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

const StyledBoxBottom = styled(Box)({});

const PreviewNotice = styled(Box)({
  transform: 'translate(300px)'
});

const styles = {
  text: {},
};

const EmailFooterComp = () => {
  const [open, setOpen] = React.useState(false);
  const [submitOpen, setSubmitOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenSubmit = () => {
    setSubmitOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitOpen(false);
  };

  const styles = {
    dialogContent: {},
    text: {},
  };

  return (
    <StyledBoxBottom>
      <EmailPagination>
        <TypographyComp
          sx={styles.text}
          children="Auto send Prev adverse action"
          variant={"subtittle"}
        />
        <ButtonComp children="7" variantContained="outlined" />
        <TypographyComp sx={styles.text} children="Days" variant="subtitle2" />

        <PreviewNotice>
          <ButtonComp
            onClick={handleOpen}
            variantContained="contained"
            children="Preview Notice"
          />
        </PreviewNotice>
      </EmailPagination>

      <Dialog
        data-testid="open"
        open={open}
        onClose={handleClose}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <DialogContent>
          <DialogContentText>
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
            <ButtonComp
              onClick={handleOpenSubmit}
              variantContained="contained"
              children="Submit Notice"
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/*  for submit notice dialog box */}

      <Dialog
        sx={styles.dialogContent}
        data-testid="open"
        open={submitOpen}
        onClose={handleClose}
        // fullScreen={true}
        // className={style.dialog}
        style={{
          // paddingLeft: 100,
          // paddingRight: 100,
          // paddingTop: 200,
          paddingBottom: 0,
        }}
      >
        <DialogContent>
          <DialogContentText>
            <TypographyComp
              sx={styles.text}
              children={"Pre adverse Notice successfully sent"}
              variant="body1"
            />
            {/* <ButtonComp onClick={handleOpen} variantContained="contained" children='Submit Notice' /> */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </StyledBoxBottom>
  );
};

export default EmailFooterComp;
