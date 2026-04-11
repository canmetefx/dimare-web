import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Proje',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Proje Adı', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'category', title: 'Kategori', type: 'string', placeholder: 'Pool Deck & Cabanas' }),
    defineField({ name: 'location', title: 'Konum', type: 'string', placeholder: 'Belek, Antalya' }),
    defineField({ name: 'year', title: 'Yıl', type: 'string' }),
    defineField({ name: 'rooms', title: 'Oda / Alan Sayısı', type: 'number' }),
    defineField({ name: 'scope', title: 'Proje Kapsamı', type: 'string', placeholder: '18m özel dokuma tavan enstalasyonu' }),
    defineField({ name: 'materials', title: 'Kullanılan Materyaller', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'coverImage', title: 'Kapak Görseli', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'gallery',
      title: 'Galeri',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Metin' }] }],
    }),
    defineField({ name: 'description', title: 'Kısa Açıklama', type: 'text', rows: 3 }),
    defineField({
      name: 'body',
      title: 'Proje Detayı (Uzun Metin)',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Metin' }] },
      ],
    }),
    defineField({ name: 'tags', title: 'Etiketler', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'pinterestBoardUrl', title: 'Pinterest Board URL', type: 'url' }),
    defineField({ name: 'featured', title: 'Ana Sayfada Göster', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sıra', type: 'number' }),
    defineField({ name: 'metaTitle', title: 'SEO Başlık', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Açıklama', type: 'text', rows: 2 }),
  ],
  orderings: [{ title: 'Yıl (Yeni)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] }],
  preview: { select: { title: 'name', subtitle: 'location', media: 'coverImage' } },
})
