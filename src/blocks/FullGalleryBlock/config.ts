import { Block } from 'payload'
import { PageHeading } from '@/fields/pageHeading'

export const FullGalleryBlock: Block = {
    slug: 'fullGalleryBlock',
    fields: [
        PageHeading,
        {
            name: 'row',
            type: 'array',
            label: 'Media Row',
            fields: [
                {
                    name: 'rowContent',
                    type: 'array',
                    labels: {
                        singular: 'Row',
                        plural: 'Row Content',
                    },
                    minRows: 3,
                    maxRows: 4,
                    fields: [
                        {
                            name: 'mediaGroup',
                            type: 'group',
                            fields: [
                                {
                                    name: 'mediaSelect',
                                    type: 'radio',
                                    options: [
                                        {
                                            label: 'Image',
                                            value: 'image',
                                        },
                                        {
                                            label: 'Video',
                                            value: 'video',
                                        },
                                    ],
                                },
                                {
                                    name: 'video',
                                    type: 'text',
                                    label: 'Video URL',
                                    required: true,
                                    admin: {
                                        condition: (_, siblingData) =>
                                            siblingData.mediaSelect === 'video',
                                    },
                                },
                                {
                                    name: 'image',
                                    label: 'Media',
                                    type: 'upload',
                                    relationTo: 'media',
                                    required: true,
                                    admin: {
                                        condition: (_, siblingData) =>
                                            siblingData.mediaSelect === 'image',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    interfaceName: 'FullGalleryBlock',
}
