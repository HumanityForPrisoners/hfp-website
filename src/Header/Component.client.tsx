'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { CMSLink } from '@/components/Link'

import { YouTube, LinkedIn, Instagram, Facebook, X, LocalPhone, Mail } from '@mui/icons-material'

interface HeaderClientProps {
    data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
    /* Storing the value in a useState to avoid hydration errors */
    const [theme, setTheme] = useState<string | null>(null)
    const { headerTheme, setHeaderTheme } = useHeaderTheme()
    const pathname = usePathname()

    const logo = data?.Logo
    const socials = data?.socialLinks || []
    const contacts = data?.contactLinks || []

    const iconMap = {
        linkedin: LinkedIn,
        youtube: YouTube,
        instagram: Instagram,
        facebook: Facebook,
        x: X,
        phone: LocalPhone,
        mail: Mail,
    }

    const formatPhoneNumber = (phoneNumberString: string | undefined) => {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        return phoneNumberString
    }

    useEffect(() => {
        setHeaderTheme(null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    useEffect(() => {
        if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headerTheme])

    return (
        // Add preheader with social media icons, phone number, and email address
        <header
            className={clsx(
                'z-20 w-full relative top-0 transition-colors duration-1000 bg-primary',
            )}
            {...(theme ? { 'data-theme': theme } : {})}
        >
            <div className="py-2 grid grid-cols-12-90 gap-30 mx-auto relative w-full bg-secondary px-48 xl:hidden">
                <nav className={clsx(socials.length > 0 ? 'show' : 'hidden', 'contents')}>
                    <div className="col-start-1 col-span-6 flex gap-2 items-center">
                        <p className="text-primary text-[.7rem]">Follow us on:</p>
                        {socials.map(({ socialLink, icon }, i) => {
                            const Icon = iconMap[icon]
                            return (
                                <CMSLink
                                    key={i}
                                    className=" bg-primary rounded-full p-3 w-5 h-5 flex items-center justify-center"
                                    {...socialLink}
                                >
                                    <Icon className="text-secondary" fontSize="inherit" />
                                </CMSLink>
                            )
                        })}
                    </div>
                    <div className="col-start-7 col-span-6 flex gap-2 items-center justify-end">
                        {contacts.map(({ emailSelect, phoneSelect, type }, i) => {
                            const Icon = iconMap[type]
                            const contactLink =
                                type === 'phone'
                                    ? formatPhoneNumber(phoneSelect?.toString())
                                    : emailSelect
                            return (
                                <div className="pl-8 flex justify-center items-center" key={i}>
                                    <CMSLink
                                        key={i}
                                        className="bg-primary rounded-full p-3 w-5 h-5 flex items-center justify-center"
                                        url={
                                            type === 'phone'
                                                ? `tel:${phoneSelect}`
                                                : `mailto:${emailSelect}`
                                        }
                                    >
                                        <Icon className="text-secondary" fontSize="inherit" />
                                    </CMSLink>
                                    <p className="text-primary text-[.7rem] pl-2">{contactLink}</p>
                                </div>
                            )
                        })}
                    </div>
                </nav>
            </div>
            <div
                className={clsx(
                    'py-2 grid grid-cols-12-90 gap-30 max-w-[73%] xl:max-w-full xl:px-6 mx-auto',
                )}
            >
                <Link href="/" className="w-fit h-fit self-center col-start-1">
                    <Logo
                        loading="eager"
                        priority="high"
                        logo={typeof logo === 'string' ? { url: logo } : logo || null}
                    />
                </Link>
                <HeaderNav data={data} />
            </div>
        </header>
    )
}
