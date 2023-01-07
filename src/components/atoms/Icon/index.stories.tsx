import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import IconComp from "./index"
import Vector from "../../../images/Vector.svg"
import VectorLeft from "../../../images/VectorLeft.svg"

export default {
    title: 'checkr/Atoms/Icon',
    component: IconComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof IconComp>

const Template: ComponentStory<typeof IconComp> = (args) => <IconComp {...args} />


export const navBottomProfile = Template.bind({})
navBottomProfile.args = {
    src: Vector
}

export const leftArrow = Template.bind({})
leftArrow.args = {
    src: VectorLeft,
}
