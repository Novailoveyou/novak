import stls from '@/styles/components/layout/Wrapper.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type WrapperType = {
  classNames?: string[]
}

const Wrapper = ({ classNames = [] }: WrapperType) => {
  const container = getClassNames({ classNames })

  return <div className={classnames([stls.container], container)}>Wrapper</div>
}

export default Wrapper
