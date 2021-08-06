import Head from 'next/head'
import Event from '../../components/event-page/event-page'

function EventPage({ event }) {
  return (
    <>
      <Head>
        <meta name='description' content={event.brief} />
        <title>{`Tech Events - ${event.title}`}</title>
      </Head>
      <Event event={event} />
    </>
  )
}

export default EventPage

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context

  const response = await fetch(`${process.env.API_URL}/events?slug=${slug[1]}`)
  const data = await response.json()

  return {
    props: {
      event: data[0] || [],
    },
  }
}
