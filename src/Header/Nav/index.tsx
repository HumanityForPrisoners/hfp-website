'use client'
import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'
import { Menu, Close } from '@mui/icons-material'
import clsx from 'clsx'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
    const navItems = data?.navItems || []
    const ctaButton = data?.ctaButton || []
    const [mobileMenu, setMobileMenu] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    // State to track which dropdown is open in mobile view
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)

    // Handle opening and closing of mobile menu
    const handleOpen = () => {
        // First make the menu visible
        setMobileMenu(true)
        // Then trigger animation after a tiny delay
        setTimeout(() => {
            setIsAnimating(true)
        }, 10)
    }

    const handleClose = () => {
        // First start the closing animation
        setIsAnimating(false)
        // Reset dropdown state
        setOpenDropdown(null)
        // Then remove the menu from DOM after animation completes
        setTimeout(() => {
            setMobileMenu(false)
        }, 300)
    }

    // Toggle dropdown for mobile view
    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index)
    }

    return (
        <nav className="contents items-center w-full">
            {/* NAV ITEMS */}
            <div className="flex gap-30 items-center col-start-4 w-fit lg:hidden">
                {navItems.map(({ link, multipleLinks, linkType }, i) => {
                    if (linkType === 'single') {
                        return (
                            <CMSLink
                                key={i}
                                className="text-popover-foreground"
                                {...link}
                                appearance="link"
                            />
                        )
                    } else if (linkType === 'multiple') {
                        return (
                            <div key={i} className="group hover:cursor-pointer">
                                <div className="flex gap-1 justify-center items-center">
                                    <p className="text-popover-foreground text-nowrap">
                                        {multipleLinks?.label}
                                    </p>
                                    <ChevronDown className="inline text-ring w-[.7rem] group-hover:-rotate-90 transition-transform" />
                                </div>
                                <div className="flex-col items-center justify-center hidden group-hover:flex pt-4 absolute">
                                    {multipleLinks?.links?.map((subLink, j) => {
                                        return (
                                            <CMSLink
                                                key={j}
                                                appearance="link"
                                                className="text-popover-foreground w-40 text-center rounded-none p-4 bg-primary border border-foreground hover:bg-secondary hover:text-primary transition-colors first:rounded-tr-xl last:rounded-b-xl"
                                                {...subLink.link}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>

            {/* Burger Menu */}
            <div
                className="hidden lg:flex cursor-pointer col-start-12 w-fit h-full items-center"
                onClick={handleOpen}
            >
                <Menu />
            </div>

            {/* Mobile Menu Nav with Animation */}
            {mobileMenu && (
                <>
                    {/* Overlay for the menu */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
                            isAnimating ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={handleClose}
                    />

                    {/* Mobile menu panel */}
                    <div
                        className={clsx(
                            'fixed right-0 top-0 h-full w-3/4 bg-primary p-6 z-50 shadow-xl transition-transform duration-300 ease-in-out',
                            isAnimating ? 'translate-x-0' : 'translate-x-full',
                        )}
                    >
                        <div className="flex justify-end cursor-pointer" onClick={handleClose}>
                            <Close />
                        </div>

                        {/* Menu content */}
                        <div className="mt-8">
                            {navItems.map(({ link, multipleLinks, linkType }, i) => {
                                if (linkType === 'single') {
                                    return (
                                        <div key={i} className="py-3 border-b border-gray-200">
                                            <CMSLink
                                                className="text-popover-foreground text-lg block"
                                                {...link}
                                                appearance="link"
                                                onClick={() => handleClose()}
                                            />
                                        </div>
                                    )
                                } else if (linkType === 'multiple') {
                                    return (
                                        <div key={i} className="py-3 border-b border-gray-200">
                                            <div
                                                className="flex justify-between items-center cursor-pointer"
                                                onClick={() => toggleDropdown(i)}
                                            >
                                                <p className="text-popover-foreground text-lg">
                                                    {multipleLinks?.label}
                                                </p>
                                                <ChevronDown
                                                    className={`text-ring w-5 h-5 transition-transform ${
                                                        openDropdown === i ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </div>
                                            {/* Dropdown content */}
                                            <div
                                                className={`
                                                    overflow-hidden transition-all duration-300 ease-in-out opacity-100
                                                    ${
                                                        openDropdown === i
                                                            ? 'max-h-96 mt-4'
                                                            : 'max-h-0'
                                                    }
                                                `}
                                            >
                                                <div className="space-y-3 pl-4">
                                                    {multipleLinks?.links?.map((subLink, j) => (
                                                        <CMSLink
                                                            key={j}
                                                            {...subLink.link}
                                                            appearance="link"
                                                            className="text-popover-foreground text-md block"
                                                            onClick={() => handleClose()}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}

                            {/* CTA Buttons */}
                            <div className="mt-6 flex gap-4">
                                {/* Search & CTA Buttons */}
                                <div className="h-fit w-fit self-center">
                                    {ctaButton.map(({ link }, i) => {
                                        return (
                                            <CMSLink
                                                key={i}
                                                {...link}
                                                appearance={'default'}
                                                size={'lg'}
                                            />
                                        )
                                    })}
                                </div>
                                <Link
                                    href="/search"
                                    className="h-fit w-fit self-center justify-self-end"
                                >
                                    <p className="sr-only">Search</p>
                                    <SearchIcon className="w-5 text-popover-foreground" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Search & CTA Buttons */}
            <div className="col-end-11 h-fit w-fit self-center lg:hidden">
                {ctaButton.map(({ link }, i) => {
                    return <CMSLink key={i} {...link} appearance={'default'} size={'lg'} />
                })}
            </div>
            <Link
                href="/search"
                className="col-start-12 h-fit w-fit self-center justify-self-end lg:hidden"
            >
                <span className="sr-only">Search</span>
                <SearchIcon className="w-5 text-popover-foreground" />
            </Link>
        </nav>
    )
}
