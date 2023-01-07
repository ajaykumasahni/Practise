import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import IconTextComp from ".";
import Home from "../../../images/Home.svg"

export default {
    title: 'checkr/molecules/SideNavIconText',
    component: IconTextComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof IconTextComp>;

const Template: ComponentStory<typeof IconTextComp> = (args) => <IconTextComp {...args} />

export const iconTextHome = Template.bind({})
iconTextHome.args = {
    src: Home,
    children: "Home",
    variant: 'subtitle2' 
}