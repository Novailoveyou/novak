import stls from '@/styles/components/icons/IconHamburger.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type IconHamburgerType = {
  classNames?: string[]
  fill?: 'zeta'
}

const IconHamburger = ({
  classNames = [],
  fill = 'zeta'
}: IconHamburgerType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <div className={classnames([stls.container], [stls[fill]], container)}>
      <svg viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Меню</title>
        <rect width='18' height='1.5' rx='0.75' fill='#ADB7BE' />
        <rect y='7' width='18' height='1.5' rx='0.75' fill='#ADB7BE' />
        <rect y='14' width='18' height='1.5' rx='0.75' fill='#ADB7BE' />
      </svg>
    </div>
  )
}

export default IconHamburger
