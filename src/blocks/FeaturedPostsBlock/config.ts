import { Block } from 'payload'
import { PageHeading } from '@/fields/pageHeading'
import { link } from '@/fields/link'

export const FeaturedPostsBlock: Block = {
  slug: 'featuredPostsBlock',
  fields: [
    PageHeading,
    {
      name: 'posts',
      type: 'relationship',
      required: true,
      hasMany: true,
      label: 'Blog Posts To Show',
      relationTo: 'posts',
      maxDepth: 9,
    },
    link({
      overrides: {
        name: 'ctaButton',
        label: 'CTA Button',
      },
      appearances: false,
    }),
  ],
  interfaceName: 'featuredPostsBlock',
}
