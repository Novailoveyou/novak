import stls from '@/styles/components/sections/Hero.module.sass'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import CarouselItemHero from '@/components/carousel/CarouselItemHero'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })

  return (
    <section className={classnames([stls.container], container)}>
      <Wrapper classNames={[stls.wrapper]}>
        <Carousel
          className={stls.carousel}
          emulateTouch
          showStatus={false}
          infiniteLoop>
          {/* autoPlay interval={3000}  */}
          <CarouselItemHero />
          <div className={stls.item}>
            <p>Здесь будет 2ая страница карусели</p>
          </div>
          <div className={stls.item}>
            <p>Здесь будет 3ая страница карусели</p>
          </div>
        </Carousel>
      </Wrapper>
    </section>
  )
}

export default Header
