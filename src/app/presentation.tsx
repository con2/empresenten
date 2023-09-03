'use client'

import Image from 'next/image'
import { IPresentation } from "./models"
import styles from './presentation.module.css'

export default function Presentation({presentation}: {presentation: IPresentation}) {
  return (
    <main className={styles.presentation}>
      <Image src={presentation.slides[0].src} alt="Presentation slide" />
    </main>
  )
}
