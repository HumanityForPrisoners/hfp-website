import { Block } from 'payload'

export const LogoCarousel: Block = {
  slug: 'logoCarousel',
  fields: [
    {
      name: 'logos',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  interfaceName: 'LogoCarousel',
}
