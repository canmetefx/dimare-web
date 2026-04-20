import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Proje',
  type: 'document',
  groups: [
    { name: 'basics', title: 'Temel Bilgiler', default: true },
    { name: 'story', title: 'Vaka Analizi' },
    { name: 'scope', title: 'Kapsam & Teslimat' },
    { name: 'media', title: 'Görseller' },
    { name: 'meta', title: 'SEO & Ayar' },
  ],
  fields: [
    // ── Basics ───────────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Proje Adı',
      type: 'string',
      group: 'basics',
      validation: r => r.required(),
      description: 'Örn: "Rixos Premium Belek — Pool Deck Installation"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      group: 'basics',
      validation: r => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      group: 'basics',
      options: {
        list: [
          { title: 'Pool Deck & Cabanas', value: 'Pool Deck & Cabanas' },
          { title: 'Beach Club & Outdoor', value: 'Beach Club & Outdoor' },
          { title: 'Lobby & Public Area', value: 'Lobby & Public Area' },
          { title: 'Suite & Room Décor', value: 'Suite & Room Décor' },
          { title: 'Spa & Wellness', value: 'Spa & Wellness' },
          { title: 'Restaurant & Bar', value: 'Restaurant & Bar' },
          { title: 'Full Property', value: 'Full Property' },
        ],
      },
    }),
    defineField({
      name: 'propertyType',
      title: 'Mülk Tipi',
      type: 'string',
      group: 'basics',
      options: {
        list: ['Resort', 'Boutique Hotel', 'Beach Club', 'Urban Hotel', 'Villa', 'Restaurant', 'Bienal / Event'],
      },
    }),
    defineField({ name: 'location', title: 'Konum', type: 'string', group: 'basics', placeholder: 'Belek, Antalya' }),
    defineField({ name: 'year', title: 'Yıl', type: 'string', group: 'basics' }),
    defineField({
      name: 'rooms',
      title: 'Oda / Alan Sayısı',
      type: 'number',
      group: 'basics',
      description: 'Proje kaç oda veya alan için yapıldı',
    }),
    defineField({
      name: 'timelineWeeks',
      title: 'Teslim Süresi (hafta)',
      type: 'number',
      group: 'basics',
      description: 'Brief\'den installation\'a kadar toplam hafta',
    }),
    defineField({
      name: 'description',
      title: 'Kısa Açıklama (1-2 cümle)',
      type: 'text',
      rows: 3,
      group: 'basics',
      description: 'Listeleme kartlarında ve SEO description için kullanılır',
      validation: r => r.max(280),
    }),

    // ── Story ────────────────────────────────────────────
    defineField({
      name: 'brief',
      title: 'The Brief — Müşteri İhtiyacı',
      type: 'text',
      rows: 5,
      group: 'story',
      description: 'Otelin istediği sonuç, atmosfer, kısıtlar. "Rixos Premium Belek, 2024 yenilemesinde...."',
    }),
    defineField({
      name: 'solution',
      title: 'Our Approach — Çözümümüz',
      type: 'text',
      rows: 5,
      group: 'story',
      description: 'Nasıl yaklaştık, hangi kararları aldık, neden',
    }),
    defineField({
      name: 'body',
      title: 'Uzun Anlatım (opsiyonel)',
      type: 'array',
      group: 'story',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Metin' }] },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Müşteri Alıntısı',
      type: 'object',
      group: 'story',
      fields: [
        defineField({ name: 'quote', title: 'Alıntı', type: 'text', rows: 3 }),
        defineField({ name: 'author', title: 'Kişi Adı', type: 'string' }),
        defineField({ name: 'role', title: 'Ünvan', type: 'string', placeholder: 'General Manager' }),
        defineField({ name: 'company', title: 'Kurum', type: 'string' }),
      ],
    }),

    // ── Scope & Deliverables ─────────────────────────────
    defineField({
      name: 'scope',
      title: 'Proje Kapsamı (tek satır)',
      type: 'string',
      group: 'scope',
      placeholder: '18m özel dokuma tavan enstalasyonu + 24 adet cabana perdesi',
    }),
    defineField({
      name: 'deliverables',
      title: 'Teslim Edilenler',
      type: 'array',
      group: 'scope',
      description: 'Proje kapsamında üretilen/teslim edilen her kalemi buraya ekle',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Ürün / İş', type: 'string', validation: r => r.required() }),
            defineField({ name: 'quantity', title: 'Adet / Miktar', type: 'string', placeholder: '24 adet, 18m²' }),
            defineField({ name: 'note', title: 'Not (opsiyonel)', type: 'string' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'quantity' },
          },
        },
      ],
    }),
    defineField({
      name: 'materials',
      title: 'Kullanılan Materyaller',
      type: 'array',
      group: 'scope',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    // ── Media ────────────────────────────────────────────
    defineField({
      name: 'coverImage',
      title: 'Kapak Görseli',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Metin' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeri',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Metin' },
            { name: 'caption', type: 'string', title: 'Başlık (Galeri altında gösterilir)' },
          ],
        },
      ],
    }),

    // ── Meta ─────────────────────────────────────────────
    defineField({ name: 'tags', title: 'Etiketler', type: 'array', group: 'meta', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'pinterestBoardUrl', title: 'Pinterest Board URL', type: 'url', group: 'meta' }),
    defineField({ name: 'featured', title: 'Ana Sayfada Göster', type: 'boolean', group: 'meta', initialValue: false }),
    defineField({ name: 'order', title: 'Sıra', type: 'number', group: 'meta' }),
    defineField({ name: 'metaTitle', title: 'SEO Başlık', type: 'string', group: 'meta' }),
    defineField({ name: 'metaDescription', title: 'SEO Açıklama', type: 'text', rows: 2, group: 'meta' }),
  ],
  orderings: [
    { title: 'Yıl (Yeni)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
    { title: 'Sıra', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'location', media: 'coverImage' },
  },
})
