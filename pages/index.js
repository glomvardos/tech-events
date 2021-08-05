import Hero from '../components/hero/hero'
import AllEvents from '../components/events/all-events/all-events'

function Home({ allEvents }) {
  return (
    <section>
      <Hero />
      <AllEvents allEvents={allEvents} text='Upcoming Events' />
    </section>
  )
}

export default Home

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/events?_sort=date:ASC`)
  const data = await response.json()

  // Remove expired events
  const upcomingEvents = data.filter(event => new Date(event.date) >= new Date()).slice(0, 6)

  return {
    props: {
      allEvents: upcomingEvents,
    },
    revalidate: 10,
  }
}
