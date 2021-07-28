import Head from 'next/head'
import '../styles/globals.css'
import GlobalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
