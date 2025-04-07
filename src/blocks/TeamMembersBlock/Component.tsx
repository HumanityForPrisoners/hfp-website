import React from 'react'
import { TeamMembersBlock as TeamMembersBlockProps, Team } from '@/payload-types'
import { TeamCard } from '@/components/TeamCard'
import { CMSLink } from '@/components/Link'
import { PageHeading } from '@/components/PageHeading'
import { MainGrid } from '@/components/MainGrid'

export const TeamMembersBlock: React.FC<TeamMembersBlockProps> = ({
    teams,
    ctaButton,
    pageHeading,
    disableCTA,
}) => {
    const filteredTeams: Team[] = (teams || []).filter((t): t is Team => typeof t === 'object')

    return (
        <>
            <MainGrid className="pt-8 pb-16 gap-y-16 lg:px-6">
                <PageHeading {...pageHeading} className="col-span-6 lg:col-span-full" />
                {filteredTeams.map((team, i) => {
                    return (
                        <TeamCard
                            className="col-span-4 lg:col-span-full"
                            key={i}
                            reference={team}
                        />
                    )
                })}
            </MainGrid>
            {!disableCTA && (
                <div className="flex w-full pb-8 items-center justify-center">
                    <CMSLink {...ctaButton} appearance={'default'} size={'lg'} />
                </div>
            )}
        </>
    )
}
