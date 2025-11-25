import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Послуга',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'menuOrder',
      title: 'Порядок відображення',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'paymentUrl',
      title: 'Посилання на оплату',
      type: 'url',
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'menuOrder',
    },
    prepare({title, media, subtitle}) {
      return {
        title,
        media,
        subtitle: subtitle !== undefined ? `Порядок: ${subtitle}` : undefined,
      }
    },
  },
})
