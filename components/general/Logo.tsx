import stls from '@/styles/components/general/Logo.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ImgLogo } from '@/components/images'

type LogoType = {
  classNames?: string[]
}

const Logo = ({ classNames = [] }: LogoType) => {
  const container = getClassNames({ classNames })

  return (
    <div className={classnames([stls.container], container)}>
      <ImgLogo classNames={[stls.logo]} />
      <p className={stls.title}>Novak</p>
    </div>
  )
}

export default Logo
