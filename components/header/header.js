import Link from 'next/link'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function Header() {
  const user = useSelector(state => state.auth.user)
  console.log(user)
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
          {user && (
            <li>
              <Link href='/my-events'>
                <a className='btn-myevent'>My Events</a>
              </Link>
            </li>
          )}
          <li>
            <Link href='/auth'>
              <a className='btn-login'>{user ? 'Logout' : 'Login'}</a>
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
    transition: all 200ms ease-in-out;
    border-bottom: 2px solid transparent;
    margin-left: 1rem;
    transition: all 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid var(--red-color);
    }
  }

  .btn-login {
    background-color: var(--red-color);
    color: var(--white-color);
    padding: 0.8rem 1.8rem;
    border-radius: 0.8rem;
    transition: all 200ms ease-in-out;
    margin-left: 1rem;

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
