import exampleSvg1 from './example/1.svg'
import exampleSvg2 from './example/2.svg'
import exampleSvg3 from './example/3.svg'

import Presentation from './presentation'
import { IPresentation } from './models'

async function getPresentation(): Promise<IPresentation> {
  return {
    slides: [
      { src: exampleSvg1 },
      { src: exampleSvg2 },
      { src: exampleSvg3 },
    ],
  }
}

export default async function Home() {
  const presentation = await getPresentation()

  return (
    <Presentation presentation={presentation} />
  )
}
