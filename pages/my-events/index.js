import MyEvents from '../../components/my-events-page/my-events'
import { getEvents } from '../../helpers/getEvents'

function MyEventsPage({ events }) {
  return <MyEvents events={events} />
}

export default MyEventsPage

export async function getServerSideProps(context) {
  const data = await getEvents()

  const { req } = context

  const transformedData = data.map(event => ({
    title: event.title,
    slug: event.slug,
    id: event.id,
  }))

  return {
    props: {
      events: transformedData,
    },
  }
}
