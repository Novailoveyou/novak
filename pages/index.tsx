import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import companyName from '@/data/company/name'
import { routes } from '@/config/index'
import { Hero } from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${companyName} | Рабочкая станция Super Novak`}
        description={truncate(`Описание`, 120)}
        canonical={routes.front.root}
      />
      <div className={stls.container}>
        <Hero />
      </div>
    </>
  )
}

export default PageHome
