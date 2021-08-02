import { useRouter } from 'next/router'
import styled from 'styled-components'
import StyledMain from '../ui/main'
import Form from '../ui/form'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EditEvent({ event }) {
  const router = useRouter()
  async function editHandler(e, inputs) {
    e.preventDefault()

    const formValidation = Object.values(inputs).some(input => input.trim() === '')

    if (formValidation) {
      toast.error('Please fill in all the fields.')
      return
    }

    if (new Date(inputs.date) < new Date()) {
      toast.error('Invalid Date.')
      return
    }

    try {
      const response = await fetch(`${process.env.API_URL}/events/${event.id}`, {
        method: 'PUT',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.data.errors.title || data.data.errors.brief)
      }

      if (response.ok) {
        router.push(`/event/${data.slug}`)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <StyledMain>
      <ToastContainer style={{ fontSize: '1.6rem' }} />
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
