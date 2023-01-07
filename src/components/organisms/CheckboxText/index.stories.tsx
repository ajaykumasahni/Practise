import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import CheckBoxTextComp from "."

export default {
    title: 'checkr/organisms/CheckBoxComp',
    component: CheckBoxTextComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof CheckBoxTextComp>

const Template: ComponentStory<typeof CheckBoxTextComp> = (args) => <CheckBoxTextComp {...args} />

export const checkboxTextClick = Template.bind({})
checkboxTextClick.args = {}