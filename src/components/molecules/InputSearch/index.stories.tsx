import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react';
import InputSearchComp from '.';
import Search from "../../../images/search.svg"

export default {
    title: 'checkr/molecules/inputSearch',
    component: InputSearchComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof InputSearchComp>;

const Template: ComponentStory<typeof InputSearchComp> = (args) => <InputSearchComp {...args} />

export const inputTextSearch = Template.bind({})
inputTextSearch.args = {
    src: Search,
    label: "Search any candidates"
}

