import stls from '@/styles/components/layout/Navigation.module.sass'
import Link from 'next/link'
import classnames from 'classnames'
import { routes } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type NavigationType = {
  classNames?: string[]
}

const Navigation = ({ classNames = [] }: NavigationType) => {
  const navigation = [
    {
      href: routes.front.solutions,
      val: 'Типовые решения'
    },
    {
      href: routes.front.about,
      val: 'О Компании'
    },
    {
      href: routes.front.products,
      val: 'Продукция'
    },
    {
      href: routes.front.support,
      val: 'Поддержка'
    },
    {
      href: routes.front.contact,
      val: 'Контакты'
    }
  ]

  const container = getClassNames({ classNames })

  return (
    <nav className={classnames([stls.container], container)}>
      <ul className={stls.list}>
        {navigation.map((item, idx) => (
          <li key={item.href + idx} className={stls.item}>
            <Link href={item.href}>
              <a className={stls.link}>{item.val}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
