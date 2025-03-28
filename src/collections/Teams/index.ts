import { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { generatePreviewPath } from '@/utilities/generatePreviewPath'

import { hero } from '@/heros/config'

import { Banner } from '@/blocks/Banner/config'
import { Code } from '@/blocks/Code/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'

import { slugField } from '@/fields/slug'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { revalidateDelete, revalidateTeam } from '@/collections/Teams/revalidateTeam'
import { link } from '@/fields/link'

export const Teams: CollectionConfig<'teams'> = {
  slug: 'teams',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    fullName: true,
    slug: true,
    about: {
      position: true,
      image: true,
      socialLinks: {
        socialLink: true,
        icon: true,
      },
      contactLinks: { type: true, emailSelect: true, phoneSelect: true },
    },
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'teams',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'teams',
        req,
      }),
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Team Member Name',
      maxLength: 30,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'about',
          label: 'About',
          fields: [
            {
              name: 'position',
              type: 'text',
              label: 'Position',
              required: true,
              maxLength: 30,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Team Member Image',
              required: true,
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
                        return value.toString().length === 10 || 'Phone number must be 10 digits'
                      },
                      min: 1000000000,
                      max: 9999999999,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateTeam],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
