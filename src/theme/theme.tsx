import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    //Green shade
    primary: {
      main: "#224DFF",
      light: "#22C870",
      dark: "#20BA68",
    },
    // Blue shade
    secondary: {
      main: "#0365F2",
    },
    // Grey shade
    info: {
      main: "#224DFF",
    },
    // typography
    text: {
      primary: "#224DFF",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),

    body1: {
        fontWeight: "500",
        fontSize: "20px",
    },

    body2: {
        fontWeight: "500",
        fontSize: "16px",
        // lineHeight: "24px",
    },

    subtitle1: {
        fontWeight: "400",
        fontSize: "12px",
        // lineHeight: "18px",
    },

    subtitle2: {
        fontWeight: '500',
        fontSize: '14px',
    },

    h1: {
      fontWeight: 700,
      fontSize: "36px",
      // lineHeight: '45px',
    },

    /* heading 3 */
    h3: {
      fontWeight: 700,
      fontSize: "24px",
      // lineHeight: '45px',
    },

    /* beta/subtitle 1 */
    h2: {
      fontWeight: 500,
      fontSize: "24px",
      // lineHeight: '32px',
    },
    
    h4: {
      fontWeight: 400,
      fontSize: "20px",
      // lineHeight: '32px',
    },

    /* Caption 3 */
    h6: {
      fontWeight: 400,
      fontSize: "14px",
      // lineHeight: '32px',
    },
  },
});
