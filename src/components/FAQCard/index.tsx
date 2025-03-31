import clsx from 'clsx'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
type Props = {
    questionBank:
        | {
              question: string
              answer: string
              id?: string | null | undefined
          }[]
        | null
        | undefined
} & React.HTMLAttributes<HTMLDivElement>

export const FAQCard: React.FC<Props> = ({ questionBank, className }) => {
    return (
        <div className={clsx('p-16 rounded-[7rem] shadow-lg', className)}>
            <Accordion type="single" collapsible>
                {questionBank?.map(({ question, answer }, i) => {
                    return (
                        <AccordionItem
                            className="border-b border-secondary"
                            key={i}
                            value={`item-${i + 1}`}
                        >
                            <AccordionTrigger className="text-xl text-secondary">
                                {question}
                            </AccordionTrigger>
                            <AccordionContent>{answer}</AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}
