import { defineField, defineType } from 'sanity'

export const promoCodeReservation = defineType({
  name: 'promoCodeReservation',
  title: 'Резервації промокодів',
  type: 'document',
  fields: [
    defineField({
      name: 'promoCode',
      title: 'Промокод',
      type: 'reference',
      to: [{ type: 'promoCode' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Статус',
      type: 'string',
      options: {
        list: [
          { title: 'Зарезервовано', value: 'reserved' },
          { title: 'Підтверджено (Оплачено)', value: 'confirmed' },
          { title: 'Скасовано', value: 'cancelled' },
          { title: 'Минув термін', value: 'expired' },
        ],
      },
      initialValue: 'reserved',
      readOnly: true, // Controlled by API
    }),
    defineField({
      name: 'reservedAt',
      title: 'Час резервації',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'validUntil',
      title: 'Діє до',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'orderReference',
      title: 'ID замовлення WayForPay',
      type: 'string',
    }),
    defineField({
      name: 'finalAmount',
      title: 'Сума зі знижкою',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'promoCode.code',
      status: 'status',
      date: 'reservedAt',
    },
    prepare({ title, status, date }) {
      return {
        title: `${title} [${status}]`,
        subtitle: date,
      }
    },
  },
})
