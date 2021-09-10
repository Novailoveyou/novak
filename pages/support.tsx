import stls from '@/styles/pages/PageSupport.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import companyName from '@/data/company/name'
import { routes } from '@/config/index'
import { Wrapper } from '@/components/layout'

const PageSupport: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${companyName} | Поддержка`}
        description={truncate(`Описание`, 120)}
        canonical={routes.front.solutions}
      />
      <div className={stls.container}>
        <Wrapper>Здесь будет страница Поддержка</Wrapper>
      </div>
    </>
  )
}

export default PageSupport
