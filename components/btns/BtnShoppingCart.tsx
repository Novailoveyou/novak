import stls from '@/styles/components/btns/BtnShoppingCart.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconShoppingCart } from '@/components/icons'
import { number } from '@/data/contact/number'

type BtnShoppingCartType = {
  classNames?: string[]
}

const BtnShoppingCart = ({ classNames = [] }: BtnShoppingCartType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <a
      href={number.href}
      className={classnames([stls.container], container)}
      title='Корзина'>
      <IconShoppingCart classNames={[stls.icon]} />
    </a>
  )
}

export default BtnShoppingCart
