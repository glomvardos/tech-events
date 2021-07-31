import styled from 'styled-components'
import BgImage from '../ui/bg-image'
import StyledMain from '../ui/main'

function Event({ event }) {
  const date = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  })

  return (
    <>
      <BgImage image={event.image.formats.large.url} />
      <StyledMain>
        <StyledTitle>{event.title}</StyledTitle>
        <StyledFlexbox>
          <StyledEventContent>
            <h2>Description</h2>
            <StyledDescription>{event.description}</StyledDescription>
            <h2>Date</h2>
            <StyledDate>
              {date} <span>at</span> {event.time}
            </StyledDate>
          </StyledEventContent>
          <StyledEventLocation>
            <h2>Event Location</h2>
          </StyledEventLocation>
        </StyledFlexbox>
      </StyledMain>
    </>
  )
}

export default Event

const StyledEventContent = styled.div`
  @media (min-width: 748px) {
    width: 60%;
  }
`

const StyledTitle = styled.h1`
  font-size: 2.4rem;

  @media (min-width: 748px) {
    font-size: 3.6rem;
  }
`

const StyledDescription = styled.p`
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: var(--text-color);
`

const StyledDate = styled.time`
  font-size: 1.5rem;

  span {
    margin: 0 0.3rem;
  }
`

const StyledEventLocation = styled.div`
  @media (min-width: 748px) {
    margin-left: 6rem;
    max-width: 40%;
  }
`

const StyledFlexbox = styled.div`
  h2 {
    margin: 3rem 0 1.5rem 0;
    font-size: 1.9rem;
  }
  @media (min-width: 748px) {
    display: flex;
    h2 {
      font-size: 2.3rem;
      margin: 5rem 0 1.5rem 0;
    }
  }
`
