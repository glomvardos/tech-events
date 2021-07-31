import Link from 'next/link'
import styled from 'styled-components'

function MyEvents() {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledTitlt>My Events</StyledTitlt>
        <Link href='my-events/add-event'>
          <a>Add Event</a>
        </Link>
      </StyledContainer>
    </StyledMain>
  )
}

export default MyEvents

const StyledMain = styled.main``
