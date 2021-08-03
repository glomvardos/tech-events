import AllEvents from '../../../components/events/all-events/all-events'
import qs from 'qs'

function AllEventsPage({ allEvents }) {
  return <AllEvents allEvents={allEvents} text='Events' />
}

export default AllEventsPage

export async function getServerSideProps(context) {
  const {
    query: { result },
  } = context

  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: result }, { description_contains: result }],
    },
  })

  const response = await fetch(`${process.env.API_URL}/events?${query}`)

  const allEvents = await response.json()

  return {
    props: {
      allEvents,
    },
  }
}
