import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import AvatarComp from ".";
import Person from "../../../images/person.svg"
import person_image from "../../../images/person_image.svg"

export default {
    title: 'checkr/Atoms/Avatar',
    component: AvatarComp,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof AvatarComp>;

const Template: ComponentStory<typeof AvatarComp> = (args) => <AvatarComp {...args} />

export const primary = Template.bind({})
primary.args = {
    children: "https://s3-alpha-sig.figma.com/img/e471/5a45/712dd1ca82591ad52dcfa8f03dfdd1ab?Expires=1673222400&Signature=HGzFYBUk4ANGEd1ZcTrRRCE7Czy5rmAWrq54OV0IMmaGTgx7dLQl8DownKkmCYTgnYsWE3Qa-un6OekrhJt9axtVlM9b4zKLr0SDF-LIfjpGNzQVUS2HU7oELvJxs-2O2Yx6~hNh3bnsDLf5emn~e~O61pKmZ5MR1SeZlyff17mOC7JuOphag-zr~UyT0UWU2O7vMvCs6zj3fW~hEeXDb~EfNtjL5PevvkxcsByNVcpnoYa09gktPW0XC06RqtgCyUuea3-4j0~nUCio4Mx-sxINfYVX1qsBTvPy0Z-d0W6lZFw9Fo86O~JwDxM3XD92RPXV1vFFcQbb4gtoixWTig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
}