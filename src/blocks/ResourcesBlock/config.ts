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
        {
            name: 'newsletters',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'content',
                    type: 'array',
                    required: true,
                    labels: {
                        singular: 'Newsletter',
                        plural: 'Newsletters',
                    },
                    fields: [
                        {
                            name: 'newsletterLabel',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'content',
                            type: 'upload',
                            relationTo: 'media',
                            label: 'content',
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
    interfaceName: 'ResourcesBlock',
}
