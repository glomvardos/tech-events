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
      <BgImage image={event.image ? event.image.formats.large.url : `/images/defaultImage.jpg`} />
      <StyledMain>
        <StyledTitle>{event.title}</StyledTitle>

        <StyledEventContent>
          <h2>Description</h2>
          <StyledDescription>{event.description}</StyledDescription>
          <h2>Date</h2>
          <StyledDate>
            {date} <span>at</span> {event.time}
          </StyledDate>
          <StyledEventLocation>
            <h2>Event Address</h2>
            <StyledAddress>{event.address}</StyledAddress>
          </StyledEventLocation>
        </StyledEventContent>
      </StyledMain>
    </>
  )
}

export default Event

const StyledEventContent = styled.div`
  h2 {
    color: var(--primary-color);
    margin: 3rem 0 1.5rem 0;
    font-size: 1.9rem;
  }
  @media (min-width: 748px) {
    h2 {
      font-size: 2.6rem;
      margin: 5rem 0 1.5rem 0;
    }
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

  @media (min-width: 748px) {
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
`

const StyledDate = styled.time`
  font-size: 1.5rem;
  color: var(--text-color);
  span {
    margin: 0 0.3rem;
  }
  @media (min-width: 748px) {
    font-size: 1.8rem;
  }
`

const StyledAddress = styled.p`
  font-size: 1.5rem;
  color: var(--text-color);

  @media (min-width: 748px) {
    font-size: 1.8rem;
  }
`

const StyledEventLocation = styled.div`
  @media (min-width: 748px) {
    max-width: 40%;
  }
`
