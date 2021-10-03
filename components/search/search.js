import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

function Search() {
  const [isFocus, setIsFocus] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const router = useRouter()

  function onSubmitHandler(event) {
    event.preventDefault()

    if (searchInput.trim() === '') return

    router.push(`/events/search?result=${searchInput}`)
  }

  return (
    <StyledContainer
      isFocus={isFocus}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onSubmit={onSubmitHandler}
    >
      <StyledInput
        type='text'
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        placeholder='Search for events'
      />
      <AiOutlineSearch onClick={onSubmitHandler} />
    </StyledContainer>
  )
}

export default Search

const StyledContainer = styled.form`
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
  font-size: 1.6rem;

  &::placeholder {
    font-size: 1.2rem;
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
