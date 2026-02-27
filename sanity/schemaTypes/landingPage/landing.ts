export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'about' },
        { type: 'globalpresence' },
        { type: 'map' },
        { type: 'stat' },
        { type: 'casestudies' },
        { type: 'academy' },
      ],
    },
  ],
}
