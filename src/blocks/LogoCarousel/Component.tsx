'use client'

import React from 'react'
import { LogoCarousel as LogoCarouselProps } from '@/payload-types'
import Slider from 'react-infinite-logo-slider'
import { Media } from '@/components/Media'

export const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={true}
            blurBorderColor={'#F3F2DC'}
        >
            {logos.map((logo, i) => {
                return (
                    <Slider.Slide key={i}>
                        <Media resource={logo.logo} alt="any" className="w-36" loading="lazy" />
                    </Slider.Slide>
                )
            })}
        </Slider>
    )
}
