import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linksPage',
  title: 'Links Page',
  type: 'document',

  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      description:
        'Shown in order as buttons on beyondscrumptious.com/links. Drag to reorder.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'linkItem',
          title: 'Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Button Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              description:
                'A path on this site (e.g. /croffle) or a full https:// link.',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'highlight',
              title: 'Highlight This Button',
              description:
                'Makes the button stand out with a solid background instead of an outline.',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href', highlight: 'highlight'},
            prepare({title, subtitle, highlight}) {
              return {
                title: highlight ? `★ ${title}` : title,
                subtitle,
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Links Page'}
    },
  },
})
