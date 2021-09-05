import stls from '@/styles/components/layout/Header.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })

  return (
    <header className={classnames([stls.container], container)}>Header</header>
  )
}

export default Header
