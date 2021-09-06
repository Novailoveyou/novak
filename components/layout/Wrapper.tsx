import stls from '@/styles/components/layout/Wrapper.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type WrapperType = {
  classNames?: string[]
  children: any
}

const Wrapper = ({ classNames = [], children }: WrapperType) => {
  const container = getClassNames({ classNames })

  return (
    <div className={classnames([stls.container], container)}>{children}</div>
  )
}

export default Wrapper
