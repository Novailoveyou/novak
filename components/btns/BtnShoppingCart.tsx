import stls from '@/styles/components/btns/BtnShoppingCart.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconShoppingCart } from '@/components/icons'

type BtnShoppingCartType = {
  classNames?: string[]
}

const BtnShoppingCart = ({ classNames = [] }: BtnShoppingCartType) => {
  const handleClick = () => {
    alert('Тут будет функционал корзины')
  }

  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <a
      className={classnames([stls.container], container)}
      title='Корзина'
      onClick={handleClick}>
      <IconShoppingCart classNames={[stls.icon]} />
    </a>
  )
}

export default BtnShoppingCart
