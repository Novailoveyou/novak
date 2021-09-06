import stls from '@/styles/components/general/Logo.module.sass'
import Link from 'next/link'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { routes } from '@/config/index'
import { ImgLogo } from '@/components/images'

type LogoType = {
  classNames?: string[]
}

const Logo = ({ classNames = [] }: LogoType) => {
  const container = getClassNames({ classNames })

  return (
    <Link href={routes.front.home}>
      <a className={classnames([stls.container], container)}>
        <ImgLogo classNames={[stls.logo]} />
        <p className={stls.title}>Novak</p>
      </a>
    </Link>
  )
}

export default Logo
