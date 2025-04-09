import type { CollectionAfterReadHook } from 'payload'
import type { Media } from '@/payload-types'

export const transformCDNUrls: CollectionAfterReadHook<Media> = ({ doc }) => {
    // Skip if no URL or environment variable not set
    if (!doc.url || !process.env.CLOUD_CDN_URL) return doc

    // Make a copy of the document to avoid mutation issues
    const updatedDoc = { ...doc } as Media

    try {
        // Extract the filename by getting the last part of the path
        const urlObj = new URL(doc.url)
        const pathParts = urlObj.pathname.split('/')
        const filename = pathParts[pathParts.length - 1]

        // Set the new URL
        updatedDoc.url = `${process.env.CLOUD_CDN_URL}/${filename}`

        // Transform all sizes
        if (updatedDoc.sizes) {
            // Get the keys in a type-safe way
            const sizeKeys = Object.keys(updatedDoc.sizes) as Array<keyof typeof updatedDoc.sizes>

            sizeKeys.forEach((sizeKey) => {
                // Create a type-safe reference to the size
                const size = updatedDoc.sizes?.[sizeKey]
                if (size && size.url) {
                    try {
                        const sizeUrlObj = new URL(size.url)
                        const sizePathParts = sizeUrlObj.pathname.split('/')
                        const sizeFilename = sizePathParts[sizePathParts.length - 1]

                        // Apply type assertions to make TypeScript happy
                        if (updatedDoc.sizes && updatedDoc.sizes[sizeKey]) {
                            ;(updatedDoc.sizes[sizeKey] as any).url =
                                `${process.env.CLOUD_CDN_URL}/${sizeFilename}`
                        }
                    } catch (e) {
                        // If URL parsing fails, just keep the original
                        console.log(`Failed to transform URL for size ${String(sizeKey)}:`, e)
                    }
                }
            })
        }

        return updatedDoc
    } catch (e) {
        console.error('Error transforming CDN URLs:', e)
        // Return the original document if there's an error
        return doc
    }
}
