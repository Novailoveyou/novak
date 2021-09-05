const { companyName } = require('@/data/company/name')
const { routes } = require('@/config/index')
// import { routes } from '@/config/index'

const seoconfig = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: routes.front.root,
    site_name: companyName
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: companyName,
  description: 'Novak',
  canonical: routes.front.root,
  noindex: true,
  nofollow: true
}

export default seoconfig
