import Event from '../../components/event-page/event-page'
import { getEvents } from '../../helpers/getEvents'

function EventPage({ event }) {
  return <Event event={event} />
}

export default EventPage

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context

  const data = await getEvents()
  const findEvent = data.find(e => e.slug === slug[1])
  return {
    props: {
      event: findEvent,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const data = await getEvents()
  const slugPaths = data.map(e => ({
    params: { slug: ['event', e.slug] },
  }))

  return {
    paths: slugPaths,
    fallback: false,
  }
}
