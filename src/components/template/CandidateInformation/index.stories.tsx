import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CandidateInformation from ".";

export default {
    title: 'checkr/templates/CandidatesInformation',
    component: CandidateInformation,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof CandidateInformation>;

const Template: ComponentStory<typeof CandidateInformation> = (args) => <CandidateInformation {...args}/>

export const candidateNav = Template.bind({})
candidateNav.args = {

}


