import stls from '@/styles/components/layout/Footer.module.sass'
import classnames from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { getClassNames } from '@/helpers/index'
import Navigation from '@/components/layout/Navigation'
import { number } from '@/data/contact/number'
import { email } from '@/data/contact/email'
import { city, street, zip } from '@/data/contact/location'
import companyName from '@/data/company/name'

type FooterType = {
  classNames?: string[]
}

const Footer = ({ classNames = [] }: FooterType) => {
  const container = getClassNames({ classNames })

  return (
    <footer className={classnames([stls.container], container)}>
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.left}>
            <a href={number.href} className={stls.number}>
              {number.val}
            </a>
            <p className={stls.address}>
              {city}, {street}, {zip}
            </p>
            <a href={email.href}>{email.val}</a>
          </div>
          <div className={stls.right}>
            <Navigation />
          </div>
        </div>
        <div className={stls.bottom}>
          {companyName} &copy; Все права защищены
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
