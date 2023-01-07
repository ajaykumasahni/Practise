import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TypographyComp from ".";

export default {
  title: "checkr/Atoms/Typography",
  component: TypographyComp,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TypographyComp>;

const Template: ComponentStory<typeof TypographyComp> = (args) => (
  <TypographyComp {...args} />
);

export const candidates = Template.bind({});
candidates.args = {
  children: "Candidates",
  variant: 'body1',
};

export const candidateInformation = Template.bind({});
candidateInformation.args = {
  children: "candidate information",
  variant: 'body2',
//   styles: {
//     fontFamily: "Inter",
//     fontStyle: "normal",
//     fontWeight: "500",
//     fontSize: "16px",
//     lineHeight: "24px",
//   },
};

export const name = Template.bind({});
name.args = {
  children: "NAME",
  variant: 'subtitle1',
};

export const sideNavText = Template.bind({});
sideNavText.args = {
  children: "LOGS",
  variant: 'subtitle2'
};
