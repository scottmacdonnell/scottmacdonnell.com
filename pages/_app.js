import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'

import '../styles/globals.scss'

export default function ScottMacDonnell({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}