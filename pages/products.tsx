import stls from '@/styles/pages/PageProducts.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import companyName from '@/data/company/name'
import { routes } from '@/config/index'
import { Wrapper } from '@/components/layout'

const PageProducts: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${companyName} | Продукция`}
        description={truncate(`Описание`, 120)}
        canonical={routes.front.products}
      />
      <div className={stls.container}>
        <Wrapper>
          Здесь будет страница Продукция (страница выбора типа, т.е Серверы,
          Графические серверы и т.д.), с ссылками на страницу выбора
          производителя
        </Wrapper>
      </div>
    </>
  )
}

export default PageProducts
