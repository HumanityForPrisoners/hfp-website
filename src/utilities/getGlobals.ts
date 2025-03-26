import type { Config } from 'src/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

// Map slug to its corresponding global type
type GlobalData<T extends Global> = Config['globals'][T]

async function getGlobal<T extends Global>(slug: T, depth = 0): Promise<GlobalData<T>> {
  const payload = await getPayload({ config: configPromise })
  const global = await payload.findGlobal({
    slug,
    depth,
  })
  return global as GlobalData<T>
}

export const getCachedGlobal = <T extends Global>(
  slug: T,
  depth = 0,
): (() => Promise<GlobalData<T>>) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })
