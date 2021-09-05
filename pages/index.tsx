import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { IconHamburger, IconPhone, IconShoppingCart } from '@/components/icons'

const PageHome: NextPage = () => {
  return (
    <div className={stls.container}>
      <IconHamburger />
      <IconPhone />
      <IconShoppingCart />
    </div>
  )
}

export default PageHome
