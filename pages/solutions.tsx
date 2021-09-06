import stls from '@/styles/pages/PageSolutions.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import companyName from '@/data/company/name'
import { routes } from '@/config/index'

const PageSolutions: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${companyName} | Типовые решения`}
        description={truncate(`Описание`, 120)}
        canonical={routes.front.solutions}
      />
      <div className={stls.container}>Типовые решения</div>
    </>
  )
}

export default PageSolutions
