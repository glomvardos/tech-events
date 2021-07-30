import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

function Search() {
  const [isFocus, setIsFocus] = useState(false)

  const focusHandler = () => setIsFocus(true)
  const blurHandler = () => setIsFocus(false)

  return (
    <StyledContainer onFocus={focusHandler} onBlur={blurHandler} isFocus={isFocus}>
      <StyledInput placeholder='Search for events' />
      <AiOutlineSearch />
    </StyledContainer>
  )
}

export default Search

const StyledContainer = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  border: ${({ isFocus }) => (isFocus ? '1px solid var(--red-color)' : '1px solid #828282')};
  border-radius: 8px;
  padding: 0.8rem;

  svg {
    color: ${({ isFocus }) => (isFocus ? 'var(--red-color)' : '#828282')};
    font-size: 2rem;
  }

  @media (min-width: 414px) {
    width: 200px;
  }
  @media (min-width: 550px) {
    width: 250px;
  }

  @media (min-width: 748px) {
    width: 300px;
    padding: 1rem;
    svg {
      font-size: 2.2rem;
    }
  }
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.4rem;

  &::placeholder {
    font-size: 1.2rem;
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 748px) {
    font-size: 1.8rem;

    &::placeholder {
      font-size: 1.4rem;
    }
  }
`
