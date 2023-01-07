import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonComp from ".";

export default {
    title: 'Checkr/Atoms/Button',
    component: ButtonComp,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ButtonComp>;

const Template: ComponentStory<typeof ButtonComp> = (args) => <ButtonComp {...args} />

export const engage = Template.bind({})
engage.args = {
    children: 'Engage',
    variantContained: 'contained',
}

export const preAdverseAction = Template.bind({})
preAdverseAction.args = {
    children: 'Pre-Adverse Action',
    variantContained: 'outlined',
}

export const previewNotice = Template.bind({})
previewNotice.args = {
    children: 'Preview Notice',
    variantContained: 'contained'
}