import Head from 'next/head'
import EditEvent from '../../../components/edit-event-page/edit-event'
import { getToken } from '../../../helpers/getToken'

function EditEventPage({ event, jwt }) {
  return (
    <>
      <Head>
        <title>Tech Events - Edit Event</title>
      </Head>
      <EditEvent event={event} jwt={jwt} />
    </>
  )
}

export default EditEventPage

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context

  const jwt = getToken(context.req)

  if (!jwt) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const response = await fetch(`${process.env.API_URL}/events/${id}`)
  const event = await response.json()

  return {
    props: {
      event,
      jwt,
    },
  }
}
