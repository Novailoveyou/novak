import stls from '@/styles/components/carousel/CarouselItemHero.module.sass'
import classnames from 'classnames'
import Link from 'next/link'
import { getClassNames } from '@/helpers/index'
import { IconRectangle } from '@/components/icons'
import { ImgHero } from '@/components/images'
import routes from '@/config/routes'

type CarouselItemHeroType = {
  classNames?: string[]
}

const CarouselItemHero = ({ classNames = [] }: CarouselItemHeroType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <div className={classnames([stls.container], container)}>
      <div className={stls.left}>
        <div className={stls.label}>Типовые решения</div>
        <h1 className={stls.title}>Рабочая станция Super Novak</h1>
        <p className={stls.description}>
          Сфера вычислений переживает невероятные изменения с появлением
          технологий глубокого обучения и искусственного интеллекта.{' '}
        </p>
        <Link href={routes.front.products}>
          <a className={stls.btn}>Смотреть продукцию</a>
        </Link>
        <Link href={routes.front.about}>
          <a className={stls.btnAlt}>Узнать больше о нас</a>
        </Link>
      </div>
      <div className={stls.right}>
        <ImgHero classNames={[stls.img]} />
        <IconRectangle classNames={[stls.icon]} />
      </div>
    </div>
  )
}

export default CarouselItemHero
