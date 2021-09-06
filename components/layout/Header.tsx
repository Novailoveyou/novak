import stls from '@/styles/components/layout/Header.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Logo } from '@/components/general'
import { Navigation, Wrapper } from '@/components/layout'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })

  return (
    <header className={classnames([stls.container], container)}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <Logo />
          <Navigation classNames={[stls.navigation]} />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
