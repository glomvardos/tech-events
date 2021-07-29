import styled from 'styled-components'
import Search from '../../search/search'

function AllEvents() {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledHeading>Upcoming Events</StyledHeading>
        <Search />
      </StyledContainer>
      <StyledEventsGrid></StyledEventsGrid>
    </StyledMain>
  )
}

export default AllEvents

const StyledMain = styled.main`
  max-width: 1100px;
  margin: 4rem 2rem 0 2rem;

  @media (min-width: 748px) {
    margin: 5rem auto 0 auto;
  }
`

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

const StyledEventsGrid = styled.div``
