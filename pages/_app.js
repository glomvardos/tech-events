import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import GlobalStyles from '../styles/global-styles'

import { Provider } from 'react-redux'
import store from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=Exo+2:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
