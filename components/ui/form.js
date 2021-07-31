import styled from 'styled-components'

function Form() {
  return (
    <StyledForm>
      <StyledInputContainer>
        <StyledLabel htmlFor='title'>Title</StyledLabel>
        <StyledInput id='title' type='text' placeholder='Event Title' />
      </StyledInputContainer>
      <div className='flex'>
        <div className='date-time'>
          <StyledInputContainer>
            <StyledLabel htmlFor='date'>Date</StyledLabel>
            <StyledInput id='date' type='date' />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel htmlFor='time'>Time</StyledLabel>
            <StyledInput id='time' type='text' placeholder='Event Time' />
          </StyledInputContainer>
        </div>
        <StyledInputContainer>
          <StyledLabel htmlFor='brief'>Brief Description</StyledLabel>
          <StyledBriefText id='brief' rows='5' placeholder='Add a brief event description...' />
        </StyledInputContainer>
      </div>
      <StyledInputContainer>
        <StyledLabel htmlFor='description'>Description</StyledLabel>
        <StyledDescription id='description' rows='12' placeholder='Add your event description...' />
      </StyledInputContainer>
      <StyledButton>Add Event</StyledButton>
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.form`
  margin-top: 3rem;

  @media (min-width: 650px) {
    .flex {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
    .date-time {
      margin-right: 1.5rem;
    }
  }
`

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const StyledLabel = styled.label`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.8rem;
  padding: 0.6rem 1rem;
  border: 2px solid var(--primary-color);
  border-radius: 4px;

  &:focus {
    border-color: var(--red-color);
    outline: none;
  }
`

const StyledBriefText = styled.textarea`
  font-family: inherit;
  font-size: 1.8rem;
  padding: 0.6rem 1rem;
  border: 2px solid var(--primary-color);
  border-radius: 4px;

  &:focus {
    border-color: var(--red-color);
    outline: none;
  }
`

const StyledDescription = styled.textarea`
  font-family: inherit;
  font-size: 1.8rem;
  padding: 0.6rem 1rem;
  border: 2px solid var(--primary-color);
  border-radius: 4px;

  &:focus {
    border-color: var(--red-color);
    outline: none;
  }
`
const StyledButton = styled.button``
