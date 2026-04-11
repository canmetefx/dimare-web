import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    defineField({ name: 'heroImage', title: 'Hero Görseli', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'aboutImage', title: 'Hakkımızda Görseli', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'stats', title: 'İstatistikler', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Değer', type: 'string' },
          { name: 'label', title: 'Etiket', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),
    defineField({
      name: 'hotelClients',
      title: 'Referans Oteller',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Otel Adı', type: 'string' },
          { name: 'url', title: 'Website (opsiyonel)', type: 'url' },
        ],
        preview: { select: { title: 'name' } },
      }],
    }),
    defineField({ name: 'contactEmail', title: 'İletişim E-postası', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Numarası', type: 'string', placeholder: '+90 5xx xxx xx xx' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'pinterestUrl', title: 'Pinterest URL', type: 'url' }),
    defineField({ name: 'etsyUrl', title: 'Etsy URL', type: 'url' }),
    defineField({ name: 'shopifyUrl', title: 'Shopify URL', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Site Ayarları' }) },
})
