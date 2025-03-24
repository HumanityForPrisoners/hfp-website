import { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonialBlock',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'video',
          label: 'Video',
          fields: [
            {
              name: 'video',
              type: 'text',
              label: 'Video URL',
              required: true,
            },
          ],
        },
        {
          name: 'content',
          label: 'Content',
          fields: [
            {
              name: 'preHeading',
              type: 'text',
              label: 'Pre-Heading',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              required: true,
            },
            {
              name: 'testimonialContent',
              type: 'group',
              fields: [
                {
                  name: 'profilePic',
                  type: 'upload',
                  label: 'Profile Picture',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'fullName',
                  type: 'text',
                  label: 'Full Name',
                  required: true,
                },
                {
                  name: 'testimonial',
                  label: 'Testimonial',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  interfaceName: 'TestimonialBlock',
}
