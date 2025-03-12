import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'
import { linkGroup } from '@/fields/linkGroup'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    linkGroup({
      overrides: {
        name: 'ctaButton',
        label: {
          singular: 'CTA Button',
          plural: 'CTA Buttons',
        },
        admin: {
          initCollapsed: true,
          components: {
            RowLabel: '@/Header/RowLabel#RowLabel',
          },
        },
        maxRows: 1,
      },
      appearances: false,
    }),
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            link({
              overrides: {
                name: 'socialLink',
                label: {
                  singular: 'Social Link',
                  plural: 'Social Links',
                },
              },
              appearances: false,
              disableLabel: true,
            }),
            {
              name: 'icon',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'Facebook',
                  value: 'facebook',
                },
                {
                  label: 'X',
                  value: 'x',
                },
                {
                  label: 'Instagram',
                  value: 'instagram',
                },
                {
                  label: 'YouTube',
                  value: 'youtube',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'contactLinks',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'type',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'Phone',
                  value: 'phone',
                },
                {
                  label: 'Mail',
                  value: 'mail',
                },
              ],
            },
            {
              name: 'emailSelect',
              type: 'email',
              label: {
                singular: 'Email',
                plural: 'Emails',
              },
              admin: {
                condition: (_, siblingData) => siblingData.type && siblingData.type === 'mail',
              },
              defaultValue: 'mail@mail.com',
            },
            {
              name: 'phoneSelect',
              type: 'number',
              label: {
                singular: 'Phone Number',
                plural: 'Phone Numbers',
              },
              defaultValue: 9999999999,
              admin: {
                condition: (_, siblingData) => siblingData.type && siblingData.type === 'phone',
              },
              validate: (value) => {
                return value.toString().length === 10 || 'Phone number must be 10 digits'
              },
              min: 1000000000,
              max: 9999999999,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
