import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import TableComp from "."

export default {
    title: "checkr/organisms/TableComp",
    component: TableComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof TableComp>

const Template: ComponentStory<typeof TableComp> = (args) => <TableComp {...args} />

export const tablevalues = Template.bind({})
tablevalues.args={
    
}