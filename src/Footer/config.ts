import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
    slug: 'footer',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            maxLength: 200,
            required: true,
        },
        {
            name: 'titles',
            type: 'group',
            fields: [
                {
                    name: 'quickLinkTitle',
                    type: 'text',
                },
                {
                    name: 'contactLinkTitle',
                    type: 'text',
                },
            ],
        },

        {
            name: 'navItems',
            type: 'array',
            labels: {
                singular: 'Quick Link',
                plural: 'Quick Links',
            },
            fields: [
                link({
                    appearances: false,
                }),
            ],
            maxRows: 6,
            admin: {
                initCollapsed: true,
                components: {
                    RowLabel: '@/Footer/RowLabel#RowLabel',
                },
            },
        },
        {
            name: 'socialLinks',
            type: 'array',
            fields: [
                {
                    type: 'row',
                    fields: [
                        link({
                            overrides: {
                                name: 'socialLink',
                                label: {
                                    singular: 'Social Link',
                                    plural: 'Social Links',
                                },
                            },
                            appearances: false,
                            disableLabel: true,
                        }),
                        {
                            name: 'icon',
                            type: 'select',
                            required: true,
                            options: [
                                {
                                    label: 'Facebook',
                                    value: 'facebook',
                                },
                                {
                                    label: 'X',
                                    value: 'x',
                                },
                                {
                                    label: 'Instagram',
                                    value: 'instagram',
                                },
                                {
                                    label: 'YouTube',
                                    value: 'youtube',
                                },
                                {
                                    label: 'LinkedIn',
                                    value: 'linkedin',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'contactLinks',
            type: 'array',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'type',
                            type: 'select',
                            required: true,
                            options: [
                                {
                                    label: 'Phone',
                                    value: 'phone',
                                },
                                {
                                    label: 'Mail',
                                    value: 'mail',
                                },
                                {
                                    label: 'Address',
                                    value: 'address',
                                },
                            ],
                        },
                        {
                            name: 'emailSelect',
                            type: 'email',
                            label: {
                                singular: 'Email',
                                plural: 'Emails',
                            },
                            admin: {
                                condition: (_, siblingData) =>
                                    siblingData.type && siblingData.type === 'mail',
                            },
                            defaultValue: 'mail@mail.com',
                        },
                        {
                            name: 'phoneSelect',
                            type: 'number',
                            label: {
                                singular: 'Phone Number',
                                plural: 'Phone Numbers',
                            },
                            defaultValue: 9999999999,
                            admin: {
                                condition: (_, siblingData) =>
                                    siblingData.type && siblingData.type === 'phone',
                            },
                            validate: (value: any) => {
                                return (
                                    value.toString().length === 10 ||
                                    'Phone number must be 10 digits'
                                )
                            },
                            min: 1000000000,
                            max: 9999999999,
                        },
                        {
                            name: 'addressSelect',
                            type: 'text',
                            label: {
                                singular: 'Address',
                                plural: 'Addresses',
                            },
                            admin: {
                                condition: (_, siblingData) =>
                                    siblingData.type && siblingData.type === 'address',
                            },
                            defaultValue: 'PO Box 123, Grand Haven...',
                        },
                    ],
                },
            ],
        },
        {
            name: 'subscribeForm',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
            maxDepth: 9,
        },
    ],
    hooks: {
        afterChange: [revalidateFooter],
    },
}
