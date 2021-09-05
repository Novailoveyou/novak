import stls from '@/styles/components/icons/IconShoppingCart.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type IconShoppingCartType = {
  classNames?: string[]
  fill?: 'zeta'
}

const IconShoppingCart = ({
  classNames = [],
  fill = 'zeta'
}: IconShoppingCartType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <div className={classnames([stls.container], [stls[fill]], container)}>
      <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Корзина</title>
        <path
          d='M13.6418 13.3749C12.4899 13.3749 11.54 14.3045 11.54 15.4766C11.54 16.6286 12.4697 17.5784 13.6418 17.5784C14.7937 17.5784 15.7436 16.6488 15.7436 15.4766C15.7234 14.3247 14.7937 13.3749 13.6418 13.3749Z'
          fill='#ADB7BE'
        />
        <path
          d='M17.3395 3.35173C17.2991 3.35173 17.2385 3.33152 17.1779 3.33152H4.44603L4.24394 1.9775C4.12269 1.08829 3.35473 0.421387 2.44532 0.421387H0.80837C0.363766 0.421387 0 0.785153 0 1.22976C0 1.67436 0.363766 2.03813 0.80837 2.03813H2.44532C2.54636 2.03813 2.6272 2.11896 2.64741 2.22001L3.90038 10.7483C4.06206 11.8194 4.99168 12.6278 6.08298 12.6278H14.49C15.5409 12.6278 16.4503 11.88 16.6726 10.8494L17.9862 4.28135C18.0671 3.85696 17.7841 3.43256 17.3395 3.35173Z'
          fill='#ADB7BE'
        />
        <path
          d='M8.48759 15.3756C8.44717 14.2641 7.51755 13.3749 6.40604 13.3749C5.2339 13.4355 4.3447 14.4055 4.38511 15.5575C4.42553 16.669 5.33495 17.5582 6.44646 17.5582H6.48688C7.6388 17.4976 8.54822 16.5275 8.48759 15.3756Z'
          fill='#ADB7BE'
        />
      </svg>
    </div>
  )
}

export default IconShoppingCart
