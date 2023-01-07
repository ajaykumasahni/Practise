import { ThemeProvider } from "@mui/material";
import { addDecorator } from "@storybook/react";
import { theme } from "../src/theme/theme";
import { addons } from "@storybook/addons";
import { StyledEngineProvider } from "@mui/styled-engine";
// import "../src/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    theme,
  },
};

addDecorator((story) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </StyledEngineProvider>
));

addons.setConfig({
  theme,
});