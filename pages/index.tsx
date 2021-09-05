import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { ImgLogo } from '@/components/images'

const PageHome: NextPage = () => {
  return (
    <div className={stls.container}>
      Home Page
      <ImgLogo />
    </div>
  )
}

export default PageHome
