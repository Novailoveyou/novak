import stls from '@/styles/components/layout/Footer.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type FooterType = {
  classNames?: string[]
}

const Footer = ({ classNames = [] }: FooterType) => {
  const container = getClassNames({ classNames })

  return (
    <footer className={classnames([stls.container], container)}>Footer</footer>
  )
}

export default Footer
