import Hero from '../components/hero/hero'
import AllEvents from '../components/events/all-events/all-events'

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
  const api_url = process.env.API_URL
  const response = await fetch(`${api_url}/events`)
  const data = await response.json()
  data.sort((a, b) => new Date(a.date) - new Date(b.date))

  return {
    props: {
      allEvents: data,
    },
    revalidate: 1,
  }
}
