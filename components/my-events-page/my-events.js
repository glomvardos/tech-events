import Link from 'next/link'
import styled from 'styled-components'
import StyledMain from '../ui/main'

function MyEvents() {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledTitle>My Events</StyledTitle>
        <Link href='my-events/add-event'>
          <a className='add-event'>Add Event</a>
        </Link>
      </StyledContainer>
    </StyledMain>
  )
}

export default MyEvents

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
