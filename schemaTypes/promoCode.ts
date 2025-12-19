import { defineField, defineType } from 'sanity'

export const promoCode = defineType({
  name: 'promoCode',
  title: 'Промокоди',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Код',
      type: 'string',
      validation: (Rule) => Rule.required().uppercase(),
    }),
    defineField({
      name: 'discountPercent',
      title: 'Відсоток знижки',
      type: 'number',
      options: {
        list: [5, 10, 15],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Тип',
      type: 'string',
      options: {
        list: [
          { title: 'Багаторазовий', value: 'reusable' },
          { title: 'Персональний (одноразовий)', value: 'personal' },
        ],
      },
      initialValue: 'reusable',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Активний',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'validFrom',
      title: 'Діє з',
      type: 'datetime',
    }),
    defineField({
      name: 'validUntil',
      title: 'Діє до',
      type: 'datetime',
    }),
    defineField({
      name: 'usageLimit',
      title: 'Ліміт використань (загальний)',
      type: 'number',
      description: 'Залиште пустим для безлімітного',
    }),
    defineField({
      name: 'usageCount',
      title: 'Кількість використань',
      type: 'number',
      initialValue: 0,
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'code',
      subtitle: 'discountPercent',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, isActive }) {
      return {
        title: title,
        subtitle: `${subtitle}% - ${isActive ? 'Активний' : 'Неактивний'}`,
      }
    },
  },
})
