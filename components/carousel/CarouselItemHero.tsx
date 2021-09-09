import stls from '@/styles/components/carousel/CarouselItemHero.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconRectangle } from '@/components/icons'
import { ImgHero } from '@/components/images'

type CarouselItemHeroType = {
  classNames?: string[]
}

const CarouselItemHero = ({ classNames = [] }: CarouselItemHeroType) => {
  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <div className={classnames([stls.container], container)}>
      <div className={stls.left}>
        <h1 className={stls.title}>Рабочая станция Super Novak</h1>
        <p className={stls.description}>
          Сфера вычислений переживает невероятные изменения с появлением
          технологий глубокого обучения и искусственного интеллекта.{' '}
        </p>
      </div>
      <div className={stls.right}>
        <ImgHero classNames={[stls.img]} />
        <IconRectangle classNames={[stls.icon]} />
      </div>
    </div>
  )
}

export default CarouselItemHero
