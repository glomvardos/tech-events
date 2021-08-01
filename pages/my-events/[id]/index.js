import EditEvent from '../../../components/edit-event-page/edit-event'

function EditEventPage({ event }) {
  return <EditEvent event={event} />
}

export default EditEventPage

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context

  const response = await fetch(`${process.env.API_URL}/events/${id}`)
  const event = await response.json()

  return {
    props: {
      event,
    },
  }
}
