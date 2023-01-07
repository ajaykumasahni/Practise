import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import EmailContainerComp from "."


export default {
    title: "checkr/templates/EmailContainer",
    component: EmailContainerComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof EmailContainerComp>

const Template: ComponentStory<typeof EmailContainerComp> = () => <EmailContainerComp />

export const emailContainer = Template.bind({})
emailContainer.args = {}

