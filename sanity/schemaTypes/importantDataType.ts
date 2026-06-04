import {defineField, defineType} from 'sanity'

export const importantDataType = defineType({
  name: 'importantData',
  title: 'Important Data',
  type: 'document',
  fields: [
    defineField({
      name: 'identifier',
      title: 'Identifier',
      type: 'string',
      description: 'Unique identifier for this document (e.g. site-metadata)'
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, e.g. 33712345678'
    }),
    defineField({
      name: 'price40',
      title: 'Price (40 min)',
      type: 'string',
      description: 'Display price for a 40 minute lesson, e.g. 28€'
    }),
    defineField({
      name: 'price60',
      title: 'Price (60 min)',
      type: 'string',
      description: 'Display price for a 60 minute lesson, e.g. 40€'
    }),
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'contactEmail',
    },
  },
})
