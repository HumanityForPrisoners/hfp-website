import { Field } from 'payload'

export const PageHeading: Field = {
  name: 'pageHeading',
  label: 'Page Heading',
  type: 'group',
  fields: [
    {
      name: 'preHeader',
      type: 'text',
      label: 'Pre-Header',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      name: 'header',
      type: 'text',
      label: 'Heading',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Paragraph Text',
      required: true,
    },
    {
      name: 'direction',
      type: 'radio',
      required: true,
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
      ],
    },
  ],
}
