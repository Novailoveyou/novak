import stls from '@/styles/components/layout/Header.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Logo } from '@/components/general'
import { Navigation, Wrapper } from '@/components/layout'
import { BtnNumber, BtnShoppingCart } from '@/components/btns'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })

  return (
    <header className={classnames([stls.container], container)}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <Logo classNames={[stls.logo]} />
          <Navigation classNames={[stls.navigation]} />
        </div>
        <div className={stls.right}>
          <BtnNumber classNames={[stls.number]} />
          <BtnShoppingCart />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
