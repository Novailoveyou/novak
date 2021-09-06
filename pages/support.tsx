import stls from '@/styles/pages/PageSupport.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import companyName from '@/data/company/name'
import { routes } from '@/config/index'

const PageSupport: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${companyName} | Поддержка`}
        description={truncate(`Описание`, 120)}
        canonical={routes.front.solutions}
      />
      <div className={stls.container}>Поддержка</div>
    </>
  )
}

export default PageSupport
