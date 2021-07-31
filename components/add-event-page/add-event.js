import { useRouter } from 'next/router'
import styled from 'styled-components'
import Form from '../ui/form'
import StyledMain from '../ui/main'

function AddEvent() {
  const router = useRouter()
  async function addEventHandler(event, inputs, fn) {
    event.preventDefault()
    const response = await fetch(`${process.env.API_URL}/events`, {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    // Clear Input Fields
    fn({
      title: '',
      date: '',
      time: '',
      brief: '',
      description: '',
    })

    router.replace(`/event/${data.slug}`)
  }

  return (
    <StyledMain>
      <StyledTitle>Add Event</StyledTitle>
      <Form onSubmitHandler={addEventHandler} />
    </StyledMain>
  )
}

export default AddEvent

const StyledTitle = styled.h1`
  font-size: 2.4rem;

  @media (min-width: 748px) {
    font-size: 3.6rem;
  }
`
