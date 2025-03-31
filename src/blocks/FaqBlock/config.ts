import { Block } from 'payload'
import { PageHeading } from '@/fields/pageHeading'

export const FaqBlock: Block = {
    slug: 'faqBlock',
    fields: [
        PageHeading,
        {
            name: 'leftSide',
            type: 'array',
            minRows: 5,
            maxRows: 5,
            fields: [
                {
                    name: 'question',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'answer',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'rightSide',
            type: 'array',
            minRows: 5,
            maxRows: 5,
            fields: [
                {
                    name: 'question',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'answer',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
    interfaceName: 'FaqBlock',
}
