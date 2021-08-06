import Head from 'next/head'
import Auth from '../../components/auth-page/auth'

function AuthPage() {
  return (
    <>
      <Head>
        <title>Tech Events - Auth</title>
      </Head>
      <Auth />
    </>
  )
}

export default AuthPage
