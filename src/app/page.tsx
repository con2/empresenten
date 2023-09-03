import exampleSvg from './example.svg'
import Presentation from './presentation'
import { IPresentation } from './models'

async function getPresentation(): Promise<IPresentation> {
  return {
    slides: [
      { src: exampleSvg },
    ],
  }
}

export default async function Home() {
  const presentation = await getPresentation()

  return (
    <Presentation presentation={presentation} />
  )
}
