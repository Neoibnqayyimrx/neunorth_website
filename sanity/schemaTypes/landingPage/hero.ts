export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    { name: 'headline', type: 'string', title: 'Headline' },
    { name: 'subtext', type: 'text', title: 'Subtext' },
    { name: 'image', type: 'image', title: 'Hero Image' },

    { name: 'primaryButtonText', type: 'string', title: 'Primary Button Text' },
    { name: 'primaryButtonLink', type: 'string', title: 'Primary Button Link' },

    { name: 'secondaryButtonText', type: 'string', title: 'Secondary Button Text' },
    { name: 'secondaryButtonLink', type: 'string', title: 'Secondary Button Link' },
  ],
}
