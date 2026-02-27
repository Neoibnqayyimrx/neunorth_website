export default {
  name: "globalpresence",
  title: "Global Presence",
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
      type: "text",
      title: "Section Description",
    },
    {
      name: "cards",
      title: "Global Presence Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Card Title",
            },
            {
              name: "subtitle",
              type: "string",
              title: "Card Subtitle",
            },
            {
              name: "image",
              type: "image",
              title: "Background Image",
              options: { hotspot: true },
            },
            {
              name: "logo",
              type: "image",
              title: "Logo Image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};