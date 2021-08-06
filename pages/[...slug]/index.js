import Event from '../../components/event-page/event-page'

function EventPage({ event }) {
  return <Event event={event} />
}

export default EventPage

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context

  const response = await fetch(`${process.env.API_URL}/events`)
  const data = await response.json()
  const findEvent = data.find(e => e.slug === slug[1])
  return {
    props: {
      event: findEvent,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/events`)
  const data = await response.json()
  const slugPaths = data.map(e => ({
    params: { slug: ['event', e.slug] },
  }))

  return {
    paths: slugPaths,
    fallback: 'blocking',
  }
}
