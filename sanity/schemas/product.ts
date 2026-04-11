import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Ürün',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Başlık', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subtitle', title: 'Alt Başlık', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({
      name: 'category', title: 'Kategori', type: 'string',
      options: { list: ['Makrome', 'Mobilya', 'Tekstil', 'Enstalasyon'] },
    }),
    defineField({ name: 'image', title: 'Ana Görsel', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'gallery', title: 'Galeri', type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Metin' }] }],
    }),
    defineField({ name: 'description', title: 'Kısa Açıklama', type: 'text', rows: 3 }),
    defineField({
      name: 'body', title: 'Detaylı Açıklama', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'materials', title: 'Materyaller', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'leadTime', title: 'Üretim Süresi', type: 'string', placeholder: '4-6 hafta' }),
    defineField({ name: 'tags', title: 'Etiketler', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'featured', title: 'Ana Sayfada Göster', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sıra', type: 'number' }),
    defineField({ name: 'etsyUrl', title: 'Etsy Linki', type: 'url' }),
    defineField({ name: 'shopifyUrl', title: 'Shopify Linki', type: 'url' }),
    defineField({ name: 'pinterestPinUrl', title: 'Pinterest Pin URL', type: 'url' }),
    defineField({ name: 'metaTitle', title: 'SEO Başlık', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Açıklama', type: 'text', rows: 2 }),
  ],
  orderings: [{ title: 'Sıra', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
})
