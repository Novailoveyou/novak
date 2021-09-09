import stls from '@/styles/components/images/hero/ImgHero.module.sass'
import Image from 'next/image'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import pic from '@/public/assets/images/hero/hero.png'

type ImgHeroType = {
  classNames?: string[]
  width?: number
  height?: number
}

const ImgHero = ({ classNames = [], width, height }: ImgHeroType) => {
  const container = getClassNames({ classNames })

  return (
    <div className={classnames([stls.container], container)}>
      <Image
        src={pic}
        alt={'Рабочая станция Super Novak'}
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgHero
