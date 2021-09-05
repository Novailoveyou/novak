import stls from '@/styles/components/images/general/ImgLogo.module.sass'
import Image from 'next/image'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import companyName from '@/data/company/name'
import pic from '@/public/assets/images/general/logo.png'

type ImgLogoType = {
  classNames?: string[]
  width?: number
  height?: number
}

const ImgLogo = ({ classNames = [], width, height }: ImgLogoType) => {
  const container = getClassNames({ classNames })

  return (
    <div className={classnames([stls.container], container)}>
      <Image
        src={pic}
        alt={companyName}
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgLogo
