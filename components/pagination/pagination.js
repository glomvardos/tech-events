import Link from 'next/link'
import styled from 'styled-components'

function Pagination({ page, total, perPage }) {
  const lastPage = Math.ceil(total / perPage)

  return (
    <StyledContainer>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <StyledLink>Previous</StyledLink>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <StyledLink className='margin-left'>Next</StyledLink>
        </Link>
      )}
    </StyledContainer>
  )
}

export default Pagination

const StyledContainer = styled.div`
  margin-top: 4rem;
  text-align: center;

  .margin-left {
    margin-left: 3rem;
  }
`

const StyledLink = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 0.8rem 1.8rem;
  border-radius: 0.8rem;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`
