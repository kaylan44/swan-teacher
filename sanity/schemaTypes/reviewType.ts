import {StarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'reviewer',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
      name: 'reviewText',
      title: 'Avis',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'reviewer',
      subtitle: 'reviewText',
    },
  },
})
