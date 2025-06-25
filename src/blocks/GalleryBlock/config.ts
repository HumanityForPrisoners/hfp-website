import { Block } from 'payload'
import { PageHeading } from '@/fields/pageHeading'
import { link } from '@/fields/link'

export const GalleryBlock: Block = {
    slug: 'galleryBlock',
    labels: {
        singular: 'Gallery Block',
        plural: 'Gallery Blocks',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'leftSide',
                    label: 'Left Side',
                    fields: [
                        PageHeading,
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
                    label: 'Right Side',
                    fields: [
                        {
                            name: 'images',
                            type: 'array',
                            label: 'Images',
                            required: true,
                            minRows: 4,
                            maxRows: 4,
                            fields: [
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'isLastOnPage',
            type: 'checkbox',
            defaultValue: 'true',
        },
    ],
    interfaceName: 'GalleryBlock',
}
