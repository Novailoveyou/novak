import stls from '@/styles/components/layout/Header.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Logo } from '@/components/general'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })

  return (
    <header className={classnames([stls.container], container)}>
      <Logo />
    </header>
  )
}

export default Header
