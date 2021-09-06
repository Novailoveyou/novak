import '@/styles/app.sass'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import Script from 'next/script'
import { useEffect, useState, useContext } from 'react'
import TagManager from 'react-gtm-module'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { routes, prod, gtmId } from '@/config/index'
import { Header, Footer } from '@/components/layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (prod) {
    console.log = function () {}
  }
  return (
    <>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo={`${routes.front.root}/assets/images/icons/manifest-icon-512.png`}
        url={routes.front.root}
      />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
export default MyApp
