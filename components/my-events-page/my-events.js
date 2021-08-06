import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import StyledMain from '../ui/main'

import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

let index = 5 // Index for showing more events

function MyEvents({ events, jwt }) {
  const [showEvents, setShowEvents] = useState(events.slice(0, 5))
  const router = useRouter()

  async function deleteHandler(id) {
    try {
      if (confirm('The event will be deleted. Are you sure?')) {
        const response = await fetch(`${process.env.API_URL}/events/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        const data = await response.json()

        if (!response.ok) {
          throw new Error('Failed to delete event.')
        }
        if (response.ok) {
          router.reload()
        }
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  // Show more events
  function showMoreHandler() {
    index += 3
    setShowEvents(events.slice(0, index))
  }

  // Show less events
  function showLessHandler() {
    index = 5
    setShowEvents(events.slice(0, index))
  }

  const displayEvents = showEvents.map(event => {
    return (
      <StyledEventContainer key={event.id}>
        <Link href={`/event/${event.slug}`}>
          <StyledEventTitle>{event.title}</StyledEventTitle>
        </Link>
        <StyledEventActions>
          <Link href={`/my-events/${event.id}`}>
            <a>
              <BiEdit />
            </a>
          </Link>

          <button type='button'>
            <RiDeleteBin5Line onClick={() => deleteHandler(event.id)} />
          </button>
        </StyledEventActions>
      </StyledEventContainer>
    )
  })

  return (
    <StyledMain>
      <ToastContainer style={{ fontSize: '1.6rem' }} />
      <StyledContainer>
        <StyledTitle>My Events</StyledTitle>
        <Link href='/my-events/add-event'>
          <a className='add-event'>Add Event</a>
        </Link>
      </StyledContainer>
      <StyledEventGrid>{displayEvents}</StyledEventGrid>
      {index < events.length && events.length > 5 && (
        <StyledButton onClick={showMoreHandler} type='button'>
          Show More
        </StyledButton>
      )}
      {index > events.length && events.length > 5 && (
        <StyledButton onClick={showLessHandler} type='button'>
          Show Less
        </StyledButton>
      )}
    </StyledMain>
  )
}

export default MyEvents

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  .add-event {
    font-size: 1.8rem;
    font-weight: 500;
    background-color: var(--red-color);
    color: var(--white-color);
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: var(--primary-color);
    }
  }
`

const StyledTitle = styled.h1`
  font-size: 2.4rem;

  @media (min-width: 748px) {
    font-size: 3.6rem;
  }
`

const StyledEventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.7rem;
`

const StyledEventContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: var(--white-color);
  border-radius: 4px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.3);
  transition: all 300ms ease-in-out;

  @media (min-width: 748px) {
    padding: 5rem;
    &:hover {
      transform: translateY(-3%);
    }
  }
`

const StyledEventTitle = styled.h2`
  cursor: pointer;
  font-size: 1.8rem;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--red-color);
  }

  @media (min-width: 500px) {
    font-size: 2rem;
  }

  @media (min-width: 748px) {
    font-size: 2.3rem;
  }
`

const StyledEventActions = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  button {
    background-color: transparent;
    border: none;
  }

  svg {
    font-size: 1.8rem;
    cursor: pointer;
    margin-bottom: 0.3rem;
    transition: all 200ms ease-in-out;

    &:hover {
      color: var(--red-color);
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    svg {
      font-size: 2.5rem;
      margin-left: 1rem;
    }
  }
`

const StyledButton = styled.button`
  display: block;
  margin: 4rem auto 4rem auto;
  font-size: 1.8rem;
  font-weight: 500;
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`
