import { PageHeading } from '@/fields/pageHeading'
import { Block } from 'payload'

export const ImpactBlock: Block = {
  slug: 'impactBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'leftSide',
          label: 'Left Side',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'statistic',
              type: 'group',
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
        {
          name: 'rightSide',
          label: 'Right Side',
          fields: [
            PageHeading,
            {
              name: 'progressBar',
              label: 'Progress Bar',
              type: 'array',
              maxRows: 4,
              fields: [
                {
                  name: 'name',
                  label: 'Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'progress',
                  label: 'Progress',
                  type: 'number',
                  min: 0,
                  max: 100,
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  interfaceName: 'ImpactBlock',
}
