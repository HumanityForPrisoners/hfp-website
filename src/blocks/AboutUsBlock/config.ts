import { Block } from 'payload'
import { link } from '@/fields/link'
import { PageHeading } from '@/fields/pageHeading'

export const AboutUsBlock: Block = {
  slug: 'aboutUsBlock',
  labels: {
    singular: 'About Us',
    plural: 'About Us',
  },
  fields: [
    {
      name: 'leftSide',
      type: 'group',
      fields: [
        PageHeading,
        {
          name: 'values',
          type: 'array',
          label: 'Values',
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              required: true,
              options: [
                {
                  label: 'Handshake',
                  value: 'handshake',
                },
                {
                  label: 'Accessibility New',
                  value: 'accessibilityNew',
                },
                {
                  label: 'Hearing',
                  value: 'hearing',
                },
                {
                  label: 'Assist Walker',
                  value: 'assistWalker',
                },
                {
                  label: 'Info',
                  value: 'info',
                },
                {
                  label: 'Privacy Tip',
                  value: 'privacyTip',
                },
                {
                  label: 'Help',
                  value: 'help',
                },
                {
                  label: 'Question Mark',
                  value: 'questionMark',
                },
                {
                  label: 'Volunteer Activism',
                  value: 'volunteerActivism',
                },
              ],
            },
            {
              name: 'valueTitle',
              type: 'text',
              label: 'Value Title',
              required: true,
            },
            {
              name: 'valueDescription',
              type: 'textarea',
              label: 'Value Description',
              required: true,
            },
          ],
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
    {
      name: 'rightSide',
      type: 'group',
      fields: [
        {
          name: 'topImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'bottomImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  interfaceName: 'AboutUsBlock',
}
