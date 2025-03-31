import React from 'react'
import { FaqBlock as FaqBlockType } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import { PageHeading } from '@/components/PageHeading'
import { FAQCard } from '@/components/FAQCard'

export const FaqBlock: React.FC<FaqBlockType> = ({ pageHeading, leftSide, rightSide }) => {
    return (
        <MainGrid>
            <PageHeading className="col-span-6" {...pageHeading} />
            <div className="col-span-12 flex justify-between items-start">
                <FAQCard
                    className="bg-primary w-[53%] translate-x-[3%] z-10 rounded-tl-none"
                    questionBank={leftSide}
                />
                <FAQCard
                    className="bg-primary w-[53%] mt-20 -translate-x-[3%] z-0 rounded-br-none"
                    questionBank={rightSide}
                />
            </div>
        </MainGrid>
    )
}
