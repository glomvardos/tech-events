import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import StyledMain from '../ui/main'

import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyEvents({ events }) {
  const router = useRouter()

  async function deleteHandler(id) {
    try {
      if (confirm('The event will be deleted. Are you sure?')) {
        const response = await fetch(`${process.env.API_URL}/events/${id}`, {
          method: 'DELETE',
        })
        const data = await response.json()

        if (!response.ok) {
          throw new Error('Failed to delete event.')
        }
        if (response.ok) {
          toast.success('Success! The event has been deleted.')
          router.replace('/my-events')
        }
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  const displayEvents = events.map(event => {
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
  console.log('Rendered')
  return (
    <StyledMain>
      <StyledContainer>
        <ToastContainer style={{ fontSize: '1.6rem' }} />
        <StyledTitle>My Events</StyledTitle>
        <Link href='/my-events/add-event'>
          <a className='add-event'>Add Event</a>
        </Link>
      </StyledContainer>
      <StyledEventGrid>{displayEvents}</StyledEventGrid>
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
