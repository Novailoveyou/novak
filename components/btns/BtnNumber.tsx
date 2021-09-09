import stls from '@/styles/components/btns/BtnNumber.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconPhone } from '@/components/icons'
import { number } from '@/data/contact/number'

type BtnNumberType = {
  classNames?: string[]
}

const BtnNumber = ({ classNames = [] }: BtnNumberType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <a
      href={number.href}
      className={classnames([stls.container], container)}
      title='Позвонить'>
      <IconPhone classNames={[stls.icon]} />
      <span className={stls.text}>{number.val}</span>
    </a>
  )
}

export default BtnNumber
