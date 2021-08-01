import { useRouter } from 'next/router'
import styled from 'styled-components'
import StyledMain from '../ui/main'
import Form from '../ui/form'

function EditEvent({ event }) {
  const router = useRouter()
  async function editHandler(e, inputs) {
    e.preventDefault()
    const response = await fetch(`${process.env.API_URL}/events/${event.id}`, {
      method: 'PUT',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    router.push(`/event/${data.slug}`)
  }

  return (
    <StyledMain>
      <StyledTitle>Edit Event</StyledTitle>
      <Form onSubmitHandler={editHandler} event={event} />
    </StyledMain>
  )
}

export default EditEvent

const StyledTitle = styled.h1`
  font-size: 2.4rem;

  @media (min-width: 748px) {
    font-size: 3.6rem;
  }
`
