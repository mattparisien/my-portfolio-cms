
const containerMaxWidth = {
    type: "string",
    title: "Container Max Width",
    name: "containerMaxWidth",
    validation: Rule => Rule.required(),
    options: {
        list: [{
            value: "small",
            title: "Small"
        }, {
            value: "large",
            title: "Large"
        }],
        layout: "radio"
    },

}

export default containerMaxWidth;