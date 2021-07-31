import Hero from '../components/hero/hero'
import AllEvents from '../components/events/all-events/all-events'
import { getEvents } from '../helpers/getEvents'

function Home({ allEvents }) {
  return (
    <section>
      <Hero />
      <AllEvents allEvents={allEvents} />
    </section>
  )
}

export default Home

export async function getStaticProps() {
  const data = await getEvents()
  data.sort((a, b) => new Date(a.date) - new Date(b.date))

  return {
    props: {
      allEvents: data,
    },
    revalidate: 1,
  }
}
