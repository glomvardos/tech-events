import Head from 'next/head'
import MyEvents from '../../components/my-events-page/my-events'
import { getToken } from '../../helpers/getToken'

function MyEventsPage({ events, jwt }) {
  return (
    <>
      <Head>
        <title>Tech Events - My Events</title>
      </Head>
      <MyEvents events={events} jwt={jwt} />
    </>
  )
}

export default MyEventsPage

export async function getServerSideProps(context) {
  const jwt = getToken(context.req)
  if (!jwt) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const response = await fetch(`${process.env.API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  const data = await response.json()

  const transformedData = data.map(event => ({
    title: event.title,
    slug: event.slug,
    id: event.id,
  }))

  return {
    props: {
      events: transformedData,
      jwt,
    },
  }
}
