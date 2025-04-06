import React from 'react'
import { FeaturedServicesBlock as FeaturedServicesBlockProps, Service } from '@/payload-types'
import { ServiceCard } from '@/components/ServiceCard'
import { CMSLink } from '@/components/Link'
import { PageHeading } from '@/components/PageHeading'
import { MainGrid } from '@/components/MainGrid'

export const FeaturedServicesBlock: React.FC<FeaturedServicesBlockProps> = ({
    services,
    ctaButton,
    pageHeading,
    disableCTA,
}) => {
    const filteredServices: Service[] = (services || []).filter(
        (s): s is Service => typeof s === 'object',
    )

    return (
        <>
            <MainGrid className="pt-8 pb-24 gap-y-28 lg:px-6">
                <PageHeading {...pageHeading} className="col-span-6 lg:col-span-full" />
                {filteredServices.map(({ content, title, slug }, i) => {
                    return <ServiceCard key={i} reference={{ content, title, slug }} />
                })}
            </MainGrid>
            {!disableCTA && (
                <div className="flex w-full items-center justify-center">
                    <CMSLink {...ctaButton} appearance={'default'} size={'lg'} />
                </div>
            )}
        </>
    )
}
