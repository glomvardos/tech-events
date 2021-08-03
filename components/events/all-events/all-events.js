import styled from 'styled-components'
import Search from '../../search/search'
import EventCard from '../event-card/event-card'
import StyledMain from '../../ui/main'

function AllEvents({ allEvents, text, children }) {
  const displayEvents = allEvents.map(e => (
    <EventCard
      key={e.id}
      title={e.title}
      brief={e.brief}
      date={e.date}
      slug={e.slug}
      image={e.image}
    />
  ))

  return (
    <StyledMain>
      <StyledContainer>
        <StyledHeading>{text}</StyledHeading>
        <Search />
      </StyledContainer>
      {allEvents.length === 0 && <StyledResultMsg>No Events Found!</StyledResultMsg>}
      <StyledEventsGrid>{displayEvents}</StyledEventsGrid>
      {children}
    </StyledMain>
  )
}

export default AllEvents

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const StyledHeading = styled.h3`
  font-size: 1.9rem;

  @media (min-width: 748px) {
    font-size: 2.8rem;
  }
`

const StyledEventsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;

  @media (min-width: 635px) {
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const StyledResultMsg = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
