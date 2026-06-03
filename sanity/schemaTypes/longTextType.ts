import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const longTextType = defineType({
  name: 'longText',
  title: 'Long Text',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Texte long',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'content',
    },
  },
})
