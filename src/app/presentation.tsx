'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IPresentation } from "./models"
import styles from './presentation.module.css'

interface PresentationProps {
  presentation: IPresentation
  intervalMillis?: number
}

export default function Presentation({presentation, intervalMillis}: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % presentation.slides.length)
    }, intervalMillis || 5000)
    return () => clearInterval(interval)
  }, [presentation.slides.length, intervalMillis])

  return (
    <main className={styles.presentation}>
      <Image src={presentation.slides[currentSlide].src} alt="Presentation slide" />
    </main>
  )
}
