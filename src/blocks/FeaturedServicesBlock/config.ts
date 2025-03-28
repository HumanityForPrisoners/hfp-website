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
    {
      name: 'disableCTA',
      type: 'checkbox',
      label: 'Disable CTA Button',
      defaultValue: false,
    },
    link({
      overrides: {
        name: 'ctaButton',
        label: 'CTA Button',
        admin: {
          condition: (_, siblingData) => !siblingData.disableCTA,
        },
      },
      appearances: false,
    }),
  ],
  interfaceName: 'FeaturedServicesBlock',
}
