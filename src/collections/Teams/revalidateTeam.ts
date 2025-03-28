import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Team } from '@/payload-types'

export const revalidateTeam: CollectionAfterChangeHook<Team> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/teams/${doc.slug}`

      payload.logger.info(`Revalidating teams at path: ${path}`)

      revalidatePath(path)
      revalidateTag('teams-sitemap')
    }

    // If the team was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/teams/${previousDoc.slug}`

      payload.logger.info(`Revalidating old team at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('teams-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Team> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/teams/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('teams-sitemap')
  }

  return doc
}
