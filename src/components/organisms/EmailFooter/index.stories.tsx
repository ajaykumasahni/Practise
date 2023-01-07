import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react"
import EmailFooterComp from "."

export default {
    title: 'checkr/organisms/EmailFooterComp',
    component: EmailFooterComp,
    argTypes: {
        
    }
} as ComponentMeta<typeof EmailFooterComp>;

const Template: ComponentStory<typeof EmailFooterComp> = (args) => <EmailFooterComp />

export const candidateNav = Template.bind({})
candidateNav.args = {

}
