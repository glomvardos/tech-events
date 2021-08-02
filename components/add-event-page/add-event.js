import { useRouter } from 'next/router'
import styled from 'styled-components'
import Form from '../ui/form'
import StyledMain from '../ui/main'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AddEvent() {
  const router = useRouter()
  async function addEventHandler(event, inputs, fn) {
    event.preventDefault()

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
      const response = await fetch(`${process.env.API_URL}/events`, {
        method: 'POST',
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
        // Clear input fields and redirect to the event
        fn({
          title: '',
          date: '',
          time: '',
          brief: '',
          description: '',
        })
        router.replace(`/event/${data.slug}`)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <StyledMain>
      <StyledTitle>Add Event</StyledTitle>
      <ToastContainer style={{ fontSize: '1.6rem' }} />
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
