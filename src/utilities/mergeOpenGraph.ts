import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    "Ensuring that all of Michigan's prisoners are treated with compassion and dignity. Providing support to friends, families and others impacted by the MDOC. Humanity for Prisoners.",
  images: [
    {
      url: `${getServerSideURL()}/website-template.webp`,
    },
  ],
  siteName: 'Humanity For Prisoners',
  title: 'Humanity For Prisoners',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
