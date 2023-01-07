import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import SideNavComp from "."

export default {
    title: 'checkr/templates/SideNav',
    component: SideNavComp,
    argTypes: {
        backgroundColor: {Control: 'color'}
    }
} as ComponentMeta<typeof SideNavComp>

const Template: ComponentStory<typeof SideNavComp> = (args) => <SideNavComp {...args}/>

export const sideNavbar = Template.bind({})
sideNavbar.args={
    variant: "body1"
}