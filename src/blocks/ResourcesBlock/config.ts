import { Block } from 'payload'

export const ResourcesBlock: Block = {
    slug: 'resourcesBlock',
    fields: [
        {
            name: 'linkGroup',
            labels: {
                singular: 'Link Group',
                plural: 'Link Groups',
            },
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'links',
                    type: 'array',
                    required: true,
                    labels: {
                        singular: 'Link',
                        plural: 'Links',
                    },
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'link',
                            type: 'text',
                            label: 'Link',
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
    interfaceName: 'ResourcesBlock',
}
