import type { Block } from 'payload'

import { link } from '@/fields/link'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'group',
      label: 'Content',
      fields: [
        {
          name: 'preHeader',
          type: 'text',
          label: 'Pre Heading',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          maxLength: 250,
          required: true,
        },
        link({
          overrides: {
            name: 'ctaButton',
            label: 'CTA Button',
          },
          appearances: false,
        }),
      ],
    },
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
