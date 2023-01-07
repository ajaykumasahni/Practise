import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react"
import TextIconComp from ".";
import Down from "../../../images/down.svg"

export default {
    title: 'checkr/molecules/TextIcon',
    component: TextIconComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof TextIconComp>;

const Template: ComponentStory<typeof TextIconComp> = (args) => <TextIconComp {...args} />

export const candidateInformationtextICon = Template.bind({})
candidateInformationtextICon.args = {
    children: 'Candidate Information',
    src: Down,
    variant: "body2"
}

