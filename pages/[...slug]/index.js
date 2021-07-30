import { getEvents } from '../../helpers/getEvents'

function Slug({ event }) {
  return <h1>TEst</h1>
}

export default Slug

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
  const slugsPaths = data.map(e => ({
    params: { slug: ['event', e.slug] },
  }))

  return {
    paths: slugsPaths,
    fallback: 'blocking',
  }
}
