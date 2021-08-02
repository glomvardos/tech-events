import Link from 'next/link'
import styled from 'styled-components'

function Header() {
  return (
    <StyledHeader>
      <Link href='/'>
        <StyledLogo>TechEvents</StyledLogo>
      </Link>
      <StyledNav>
        <ul>
          <li>
            <Link href='/events'>
              <a className='btn-myevent'>Events</a>
            </Link>
          </li>
          <li>
            <Link href='/my-events'>
              <a className='btn-myevent'>My Events</a>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <a className='btn-login'>Login</a>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  padding: 3rem 0;

  @media (min-width: 748px) {
    margin: 0 auto 1rem auto;
  }
`

const StyledLogo = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: var(--primary-color);
  cursor: pointer;

  @media (min-width: 748px) {
    font-size: 3rem;
  }
`

const StyledNav = styled.nav`
  font-size: 1.6rem;
  font-weight: 500;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 1rem;
    }
  }

  .btn-myevent {
    padding: 0.7rem 1.8rem;
    border-radius: 0.8rem;
    border: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover {
      border: 2px solid var(--primary-color);
    }
  }

  .btn-login {
    background-color: var(--red-color);
    color: var(--white-color);
    padding: 0.8rem 1.8rem;
    border-radius: 0.8rem;
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: var(--primary-color);
    }
  }

  @media (min-width: 748px) {
    ul {
      li {
        margin-left: 2rem;
      }
    }

    .btn-login {
      padding: 0.8rem 2.5;
    }
    .btn-signup {
      padding: 1rem 2rem;
    }
    .btn-login {
      padding: 0.8rem 2.5;
    }
  }
`
