import { Block } from 'payload'

export const HeroStats: Block = {
  slug: 'heroStats',
  labels: {
    singular: 'Hero Statistic',
    plural: 'Hero Stat',
  },
  fields: [
    {
      name: 'options',
      type: 'group',
      fields: [
        {
          name: 'modifyForHomepage',
          type: 'checkbox',
          label: 'Modify for Homepage?',
          defaultValue: false,
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'removeBackground',
          type: 'checkbox',
          label: 'Remove background?',
          defaultValue: false,
          required: true,admin: {
            width: '50%',
          },
        },
      ],
    },

    {
      name: 'Stats',
      type: 'array',
      labels: {
        singular: 'Statistic',
        plural: 'Statistics',
      },
      admin: {
        initCollapsed: true,
      },
      maxRows: 4,
      minRows: 3,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'mainStat',
              type: 'text',
              required: true,
            },
            {
              name: 'subtitle',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  interfaceName: 'HeroStatsBlock',
}
