export default {
  name: 'academy',
  title: 'Academy',
  type: 'object',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'headline', type: 'string', title: 'Headline' },
    { name: 'body', type: 'text', title: 'Body Text' },
    { name: 'image', type: 'image', title: 'Image' },

    { name: 'buttonText', type: 'string', title: 'Button Text' },
    { name: 'buttonLink', type: 'string', title: 'Button Link' },
  ],
}
