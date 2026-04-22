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
      name: 'category',
      title: 'Kullanım Alanı',
      type: 'string',
      options: {
        list: [
          { title: 'Havuz & Plaj', value: 'havuz-plaj' },
          { title: 'Oda & Suite', value: 'oda-suite' },
          { title: 'Lobi & Ortak Alan', value: 'lobi-ortak' },
          { title: 'Spa & Wellness', value: 'spa-wellness' },
        ],
      },
    }),
    defineField({
      name: 'collections',
      title: 'Koleksiyonlar (çoklu seçim)',
      type: 'array',
      description: 'Bu ürün hangi koleksiyonlara ait?',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          { title: 'Hotel Pool Shading', value: 'hotel-pool-shading' },
          { title: 'Hospitality Lobby Décor', value: 'hospitality-lobby-decor' },
          { title: 'Suite Macramé', value: 'suite-macrame' },
          { title: 'Spa & Wellness', value: 'spa-wellness' },
          { title: 'Beach Club Design', value: 'beach-club-design' },
          { title: 'Resort Restaurant', value: 'resort-restaurant' },
          { title: 'Hotel Signature Weaves', value: 'hotel-signature-weaves' },
          { title: '2026 Summer Collection', value: '2026-summer-collection' },
        ],
      },
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
