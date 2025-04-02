import { Block } from 'payload'
import { link } from '@/fields/link'

export const FeaturedEventsBlock: Block = {
    slug: 'featuredEventsBlock',
    fields: [
        {
            name: 'events',
            type: 'relationship',
            required: true,
            hasMany: true,
            label: 'Events To Show',
            relationTo: 'events',
            maxDepth: 9,
        },
        {
            name: 'disableCTA',
            type: 'checkbox',
            label: 'Disable CTA Button',
            defaultValue: false,
        },
        link({
            overrides: {
                name: 'ctaButton',
                label: 'CTA Button',
                admin: {
                    condition: (_, siblingData) => !siblingData.disableCTA,
                },
            },
            appearances: false,
        }),
    ],
    interfaceName: 'FeaturedEventsBlock',
}
