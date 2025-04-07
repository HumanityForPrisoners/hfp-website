import React from 'react'
import { FaqBlock as FaqBlockType } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import { PageHeading } from '@/components/PageHeading'
import { FAQCard } from '@/components/FAQCard'

export const FaqBlock: React.FC<FaqBlockType> = ({ pageHeading, leftSide, rightSide }) => {
    return (
        <MainGrid className="lg:px-6">
            <PageHeading className="col-span-6 lg:col-span-full" {...pageHeading} />
            <div className="col-span-12 flex lg:flex-col justify-between items-start">
                <FAQCard
                    className="bg-primary w-[53%] lg:w-full translate-x-[3%] z-10 lg:z-0 rounded-tl-none"
                    questionBank={leftSide}
                />
                <FAQCard
                    className="bg-primary w-[53%] lg:w-full mt-20 lg:-mt-16 -translate-x-[3%] z-0 lg:z-10 rounded-br-none"
                    questionBank={rightSide}
                />
            </div>
        </MainGrid>
    )
}
