import type { GlobalConfig } from 'payload'
import { hero } from '@/heros/config'
import { PageHeading } from '@/fields/pageHeading'

export const ServicesHero: GlobalConfig = {
  slug: 'servicesHero',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Heading',
          fields: [PageHeading],
        },
      ],
    },
  ],
}
