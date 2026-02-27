export default {
  name: "stat",
  title: "Stats Section",
  type: "object",
  fields: [
    {
      name: "enabled",
      type: "boolean",
      title: "Enable Section",
      initialValue: true,
    },
    {
      name: "stats",
      title: "Statistics",
      type: "array",
      validation: (Rule: any) => Rule.min(3).max(3),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              type: "number",
              title: "Value",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "suffix",
              type: "string",
              title: "Suffix (e.g +, %, yrs)",
            },
            {
              name: "label",
              type: "string",
              title: "Label",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};