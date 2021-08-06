import Head from 'next/head'
import AllEvents from '../../components/events/all-events/all-events'
import Pagination from '../../components/pagination/pagination'

const EVENTS_PER_PAGE = 6

function AllEventsPage({ allEvents, page, total }) {
  return (
    <>
      <Head>
        <meta name='description' content='Here you can find all the events' />
        <title>Tech Events - Events</title>
      </Head>
      <AllEvents allEvents={allEvents} text='Events'>
        <Pagination page={page} total={total} perPage={EVENTS_PER_PAGE} />
      </AllEvents>
    </>
  )
}

export default AllEventsPage

export async function getServerSideProps(context) {
  const {
    query: { page = 1 },
  } = context

  // Calculate start page
  const startPage = +page === 1 ? 0 : (+page - 1) * EVENTS_PER_PAGE

  // Get total events number

  const totalEventsNum = await fetch(`${process.env.API_URL}/events/count`)
  const total = await totalEventsNum.json()

  // Get all events
  const allEventsRes = await fetch(
    `${process.env.API_URL}/events?_sort=date:ASC&_limit=${EVENTS_PER_PAGE}&_start=${startPage}`
  )
  const allEvents = await allEventsRes.json()

  return {
    props: {
      allEvents,
      total,
      page: +page,
    },
  }
}
