import { urlFor } from '@/sanity/client'

interface SanityImageData {
  asset?: { _id?: string; url?: string }
  hotspot?: { x: number; y: number }
  crop?: { top: number; bottom: number; left: number; right: number }
  alt?: string
}

export function sanityImageUrl(image: SanityImageData | null | undefined, width: number, height?: number): string {
  if (!image?.asset) return ''
  let builder = urlFor(image).width(width).auto('format').fit('crop')
  if (height) builder = builder.height(height)
  return builder.url()
}

export function sanityImageProps(
  image: SanityImageData | null | undefined,
  options: { width: number; height?: number; alt?: string }
) {
  if (!image?.asset) return null
  return {
    src: sanityImageUrl(image, options.width, options.height),
    alt: image.alt ?? options.alt ?? '',
    width: options.width,
    height: options.height ?? Math.round(options.width * 0.75),
  }
}
