import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer, Media } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { MainGrid } from '@/components/MainGrid'
import {
    YouTube,
    LinkedIn,
    Instagram,
    Facebook,
    X,
    LocalPhone,
    Mail,
    Business,
} from '@mui/icons-material'
import { FormBlock } from '@/blocks/Form/Component'
import { Form } from '@payloadcms/plugin-form-builder/types'

export async function Footer() {
    const iconMap = {
        linkedin: LinkedIn,
        youtube: YouTube,
        instagram: Instagram,
        facebook: Facebook,
        x: X,
        phone: LocalPhone,
        mail: Mail,
        address: Business,
    }
    const footerData: Footer = await getCachedGlobal('footer', 1)()

    const formatPhoneNumber = (phoneNumberString: string | undefined) => {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        return phoneNumberString
    }

    const navItems = footerData?.navItems || []
    const contacts = footerData?.contactLinks || []

    return (
        <footer className="mt-auto pt-64 bg-secondary text-primary">
            <MainGrid className="pt-0 pb-0 lg:px-6">
                <div className="flex flex-col col-start-1 col-span-3 lg:col-span-full lg:items-center lg:text-center">
                    <Link className="flex items-center pb-6" href="/">
                        <Logo className="max-w-56" priority="low" logo={footerData.logo as Media} />
                    </Link>
                    <p>{footerData.description}</p>
                </div>
                <div className="col-span-2 lg:col-span-5 lg:col-start-1 col-start-5 flex flex-col lg:items-center">
                    <h5>Quick Links</h5>
                    <nav className="flex flex-col gap-4 pl-6 pt-6">
                        {navItems.map(({ link }, i) => {
                            return (
                                <CMSLink
                                    className="text-primary list-item text-sm"
                                    key={i}
                                    {...link}
                                />
                            )
                        })}
                    </nav>
                </div>
                <div className="col-start-7 lg:col-start-6 col-span-3 lg:col-span-6 flex flex-col items-start">
                    <h5 className="pb-6">Information</h5>
                    {contacts.map(({ emailSelect, phoneSelect, addressSelect, type }, i) => {
                        const Icon = iconMap[type]
                        let contactLink = null
                        let url = null

                        switch (type) {
                            case 'phone':
                                contactLink = formatPhoneNumber(phoneSelect?.toString())
                                url = `tel:${phoneSelect}`
                                break
                            case 'mail':
                                contactLink = emailSelect
                                url = `mailto:${emailSelect}`
                                break
                            case 'address':
                                contactLink = addressSelect
                                url = null
                                break
                            default:
                                contactLink = null
                                url = null
                                break
                        }

                        return (
                            <div className="flex justify-center items-center gap-1 pb-4" key={i}>
                                {url ? (
                                    <CMSLink
                                        className="bg-primary rounded-full p-3 w-5 h-5 flex items-center justify-center"
                                        url={url}
                                    >
                                        <Icon className="text-secondary" fontSize="inherit" />
                                    </CMSLink>
                                ) : (
                                    <div className="bg-primary rounded-full p-3 w-5 h-5 flex items-center justify-center">
                                        <Icon className="text-secondary" fontSize="inherit" />
                                    </div>
                                )}
                                {contactLink && (
                                    <p className="text-primary text-[.7rem] pl-2">{contactLink}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="col-start-10 lg:col-start-1 col-span-3 lg:col-span-12 lg:items-center">
                    <FormBlock enableIntro form={footerData.subscribeForm as Form} />
                </div>
            </MainGrid>
            <hr className="container" />
            <MainGrid className="pt-2 pb-2 lg:px-6">
                <div className="col-span-12 flex justify-between pt-2 items-center">
                    <p className="lg:text-xs">
                        Copyright 2024 © Humanity for Prisoners, All Right Reserved
                    </p>
                    <div className="flex gap-2">
                        {footerData.socialLinks?.map(({ socialLink, icon }, i) => {
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
                </div>
            </MainGrid>
        </footer>
    )
}
