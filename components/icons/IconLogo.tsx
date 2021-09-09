import stls from '@/styles/components/icons/IconLogo.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import companyName from '@/data/company/name'

type IconLogoType = {
  classNames?: string[]
}

const IconLogo = ({ classNames = [] }: IconLogoType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <div className={classnames([stls.container], container)}>
      <svg viewBox='0 0 65 66' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{companyName}</title>
        <rect
          x='0.290039'
          y='15.0928'
          width='52.3124'
          height='52.3124'
          rx='8.17381'
          transform='rotate(-15 0.290039 15.0928)'
          fill='#445FF8'
        />
        <path
          d='M39.0825 3.53847L31.8178 5.48502L40.9699 36.4703L40.6665 36.5516L19.9493 18.8344L13.5443 20.5506L24.9093 62.9655L32.2076 61.0099L24.2705 31.3882L24.5234 31.3205L45.3631 49.0229L51.667 47.3338L39.0825 3.53847Z'
          fill='white'
        />
      </svg>
    </div>
  )
}

export default IconLogo
