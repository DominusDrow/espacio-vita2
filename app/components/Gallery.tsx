'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface GalleryProps {
  imgs: string[]
  title: string
}

export default function Gallery({ imgs, title }: GalleryProps) {
  return (
    <div className="bg-white px-4 sm:px-8 py-12">
      <div className="grid grid-cols-1 gap-4">
        {imgs[1] && (
          <AnimatedImage
            src={imgs[1]}
            alt={`${title} image 2`}
            heightClass="h-[60vh]"
            priority
          />
        )}

        {imgs[2] && imgs[3] && (
          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedImage
              src={imgs[2]}
              alt={`${title} image 3`}
              heightClass="h-[50vh]"
              priority
            />
            <AnimatedImage
              src={imgs[3]}
              alt={`${title} image 4`}
              heightClass="h-[50vh]"
            />
          </div>
        )}

        {imgs[4] && (
          <AnimatedImage
            src={imgs[4]}
            alt={`${title} image 5`}
            heightClass="h-[60vh]"
          />
        )}
      </div>
    </div>
  )
}

function AnimatedImage({
  src,
  alt,
  heightClass,
  priority = false,
}: {
  src: string
  alt: string
  heightClass: string
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const filter = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ['blur(10px)', 'blur(0px)', 'blur(0px)']
  )
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  return (
    <motion.div
      ref={ref}
      className={`w-full relative overflow-hidden ${heightClass}`}
      style={{ filter, scale }}
    >
      <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
    </motion.div>
  )
}
