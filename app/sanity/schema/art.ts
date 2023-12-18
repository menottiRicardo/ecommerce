import {CircuitBoard} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const artType = defineType({
  name: 'art',
  title: 'Art',
  type: 'document',
  icon: CircuitBoard,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'releaseDate',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'status',
      type: 'string',
      readOnly: true,
      initialValue: 'ACTIVE',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      description: 'description',
    },
    prepare({title, media, description}) {
      return {
        title,
        subtitle: description,
        media,
      }
    },
  },
})
