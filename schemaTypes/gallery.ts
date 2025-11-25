import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Галерея',
  type: 'document',
  description: 'Секція «Атмосфера, яку хочеться відчути».',
  fields: [
    defineField({
      name: 'photo1',
      title: 'Фото 1',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo2',
      title: 'Фото 2',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo3',
      title: 'Фото 3',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo4',
      title: 'Фото 4',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo5',
      title: 'Фото 5',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: 'photo1',
    },
    prepare({media}) {
      return {
        title: 'Галерея',
        subtitle: '5 фото для секції',
        media,
      }
    },
  },
})
