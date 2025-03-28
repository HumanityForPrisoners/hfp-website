import { link } from '@/fields/link'
import { PageHeading } from '@/fields/pageHeading'
import { Block } from 'payload'

export const TeamMembersBlock: Block = {
  slug: 'teamMembersBlock',
  fields: [
    PageHeading,
    {
      name: 'teams',
      type: 'relationship',
      required: true,
      hasMany: true,
      label: 'Team Members To Show',
      relationTo: 'teams',
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
  interfaceName: 'teamMembersBlock',
}
