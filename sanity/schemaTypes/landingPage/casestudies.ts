export default {
  name: "casestudies",
  title: "Case Studies",
  type: "object",
  fields: [
    {
      name: "enabled",
      type: "boolean",
      title: "Enable Section",
      initialValue: true,
    },
    {
      name: "heading",
      type: "string",
      title: "Section Heading",
    },
    {
      name: "subheading",
      type: "string",
      title: "Section Subheading",
    },
    {
      name: "studies",
      title: "Case Study Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Project Title",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "subtitle",
              type: "string",
              title: "Short Description",
            },
            {
              name: "organization",
              type: "string",
              title: "Organization Name",
            },
            {
              name: "category",
              type: "string",
              title: "Category",
              options: {
                list: [
                  { title: "Enterprise", value: "Enterprise" },
                  { title: "Non-Profit", value: "Non-Profit" },
                  { title: "AI/ML", value: "AI/ML" },
                ],
              },
            },
            {
              name: "image",
              type: "image",
              title: "Organization Image / Logo",
              options: { hotspot: true },
            },
            {
              name: "goal",
              type: "text",
              title: "The Goal",
            },
            {
              name: "whatWeDid",
              type: "text",
              title: "What We Did",
            },
            {
              name: "outcome",
              type: "text",
              title: "The Outcome",
            },
          ],
        },
      ],
    },
  ],
};