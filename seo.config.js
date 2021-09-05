const { routes } = require('@/config/index')
// import { routes } from '@/config/index'

const seoconfig = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: routes.front.root,
    site_name: 'Novak'
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: 'Novak',
  description: 'Novak',
  canonical: routes.front.root
}

export default seoconfig
