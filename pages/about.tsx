import stls from '@/styles/pages/PageAbout.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import companyName from '@/data/company/name'
import { routes } from '@/config/index'
import { Wrapper } from '@/components/layout'

const PageAbout: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${companyName} | О компании`}
        description={truncate(
          'Мощные выделенные серверы с гибкостью и масштабируемостью облачных: 40-минутная готовность, бесплатная поддержка, бесплатная глобальная частная сеть, самостоятельные апгрейды',
          120
        )}
        canonical={routes.front.root + routes.front.about}
      />
      <div className={stls.container}>
        <Wrapper>Здесь будет страница О компании</Wrapper>
      </div>
    </>
  )
}

export default PageAbout
