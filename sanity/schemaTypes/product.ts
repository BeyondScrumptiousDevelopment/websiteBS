import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Gallery Image',
  type: 'document',

  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Short caption shown under the image in the gallery (optional).',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cakes', value: 'cakes'},
          {title: 'Cupcakes', value: 'cupcakes'},
          {title: 'Desserts', value: 'desserts'},
          {title: 'Dessert Tables', value: 'dessert-tables'},
          {title: 'Live Desserts', value: 'live-desserts'},
          {title: 'Events', value: 'events'},
        ],
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured Image',
      description: 'Show this image in the "Featured Creations" section on the homepage.',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'order',
      title: 'Order',
      description: 'Lower numbers appear first in the gallery. Leave blank to sort by newest.',
      type: 'number',
    }),
  ],

  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: '_createdAt', direction: 'desc'},
      ],
    },
  ],

  preview: {
    select: {
      title: 'category',
      subtitle: 'caption',
      media: 'image',
    },
  },
})
