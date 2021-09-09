import stls from '@/styles/components/icons/IconRectangle.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type IconRectangleType = {
  classNames?: string[]
  fill?: 'alpha'
}

const IconRectangle = ({
  classNames = [],
  fill = 'alpha'
}: IconRectangleType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <div className={classnames([stls.container], [stls[fill]], container)}>
      <svg viewBox='0 0 684 684' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect
          y='144.476'
          width='558.212'
          height='558.212'
          rx='100'
          transform='rotate(-15 0 144.476)'
          fill='#445FF8'
        />
      </svg>
    </div>
  )
}

export default IconRectangle
