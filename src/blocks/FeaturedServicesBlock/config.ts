import { Block } from 'payload'
import { link } from '@/fields/link'
import { PageHeading } from '@/fields/pageHeading'

export const FeaturedServicesBlock: Block = {
  slug: 'featuredServicesBlock',
  fields: [
    PageHeading,
    {
      name: 'services',
      type: 'relationship',
      required: true,
      hasMany: true,
      label: 'Services To Show',
      relationTo: 'services',
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
  interfaceName: 'FeaturedServicesBlock',
}
