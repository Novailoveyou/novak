import stls from '@/styles/pages/PageContact.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import companyName from '@/data/company/name'
import { routes } from '@/config/index'
import { number } from '@/data/contact/number'
import { email } from '@/data/contact/email'
import { city, street } from '@/data/contact/location'

const PageContact: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${companyName} | Контакты`}
        description={truncate(
          `Техподежка: ${number.val}, Адрес: ${city}, ${street}, Отдел продаж: ${email.val}`,
          120
        )}
        canonical={routes.front.root + routes.front.contact}
      />
      <div className={stls.container}>Контакты</div>
    </>
  )
}

export default PageContact
