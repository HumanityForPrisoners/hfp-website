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
      <MainGrid className="pt-0 pb-0">
        <div className="flex flex-col col-start-1 col-span-3">
          <Link className="flex items-center" href="/">
            <Logo className="max-w-52" priority="low" logo={footerData.logo as Media} />
          </Link>
          <p>{footerData.description}</p>
        </div>
        <div className="col-span-2 col-start-5 flex flex-col">
          <h5>Quick Links</h5>
          <nav className="flex flex-col gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
        <div className="col-start-7 col-span-3 flex flex-col items-start">
          <h5>Information</h5>
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
              <div className="flex justify-center items-center" key={i}>
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
                {contactLink && <p className="text-primary text-[.7rem] pl-2">{contactLink}</p>}
              </div>
            )
          })}
        </div>
        <div className="col-start-10 col-span-3">
          <FormBlock enableIntro form={footerData.subscribeForm as Form} />
        </div>
      </MainGrid>
    </footer>
  )
}
