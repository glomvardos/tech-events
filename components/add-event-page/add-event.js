import styled from 'styled-components'
import Form from '../ui/form'
import StyledMain from '../ui/main'

function AddEvent() {
  return (
    <StyledMain>
      <StyledTitle>Add Event</StyledTitle>
      <Form />
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
