import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import StyledMain from '../ui/main'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { authActions } from '../../store/auth-slice'

function Auth() {
  const [isFocusEmail, setIsFocusEmail] = useState(false)
  const [isFocusUsername, setIsFocusUsername] = useState(false)
  const [isFocusPassword, setIsFocusPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const dispatch = useDispatch()
  const router = useRouter()

  const authFormHandler = () => setIsLogin(prevState => !prevState)

  async function onSubmitHandler(event) {
    event.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const usernameInput = !isLogin ? usernameRef.current.value : ''
    const emailInput = emailRef.current.value
    const passwordInput = passwordRef.current.value

    // Form validation
    if (
      (!isLogin && usernameInput.trim() === '') ||
      emailInput.trim() === '' ||
      passwordInput.trim() === ''
    ) {
      toast.error('Please fill in all the fields.')
      return
    }

    // Email validation
    if (!emailInput.match(emailRegex)) {
      toast.error('Invalid Email.')
      return
    }

    //Sign up
    if (!isLogin) {
      try {
        const response = await fetch(`${process.env.API_URL}/auth/local/register`, {
          method: 'POST',
          body: JSON.stringify({
            username: usernameInput,
            email: emailInput,
            password: passwordInput,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()

        if (response.ok) {
          toast.success('You have successfully signed up!')

          // Reset inputs
          usernameRef.current.value = ''
          emailRef.current.value = ''
          passwordRef.current.value = ''
        }

        if (!response.ok) {
          throw new Error('Email or Username already taken.')
        }
      } catch (err) {
        toast.error(err.message)
      }
    }

    // Login
    if (isLogin) {
      try {
        const response = await fetch(`api/login`, {
          method: 'POST',
          body: JSON.stringify({
            identifier: emailInput,
            password: passwordInput,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()

        if (response.ok) {
          dispatch(authActions.storeUser(data))
          router.replace('/my-events')
          // Reset inputs
          emailRef.current.value = ''
          passwordRef.current.value = ''
        }

        if (!response.ok) {
          throw new Error('Wrong email or password')
        }
      } catch (err) {
        toast.error(err.message)
      }
    }
  }

  return (
    <StyledMain>
      <ToastContainer style={{ fontSize: '1.6rem' }} />
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledTitle>{isLogin ? 'Login' : 'Sign up'}</StyledTitle>
        {!isLogin && (
          <>
            <StyledLabel>Username</StyledLabel>
            <StyledContainer
              isFocus={isFocusUsername}
              onFocus={() => setIsFocusUsername(true)}
              onBlur={() => setIsFocusUsername(false)}
            >
              <StyledInput ref={usernameRef} type='text' placeholder='Username' />
              <FaUserAlt />
            </StyledContainer>
          </>
        )}
        <StyledLabel>Email</StyledLabel>
        <StyledContainer
          isFocus={isFocusEmail}
          onFocus={() => setIsFocusEmail(true)}
          onBlur={() => setIsFocusEmail(false)}
        >
          <StyledInput ref={emailRef} type='text' placeholder='Email' />
          <MdEmail style={{ fontSize: '1.7rem' }} />
        </StyledContainer>
        <StyledLabel>Password</StyledLabel>
        <StyledContainer
          isFocus={isFocusPassword}
          onFocus={() => setIsFocusPassword(true)}
          onBlur={() => setIsFocusPassword(false)}
        >
          <StyledInput ref={passwordRef} type='password' placeholder='Password' />
          <FaLock />
        </StyledContainer>
        <StyledButton>{isLogin ? 'Login' : 'Sign up'}</StyledButton>
        <StyledText>
          {isLogin ? "You don't have an account?" : 'Already have an account?'}
          {isLogin ? (
            <span onClick={authFormHandler}>Sign up</span>
          ) : (
            <span onClick={authFormHandler}>Login</span>
          )}
        </StyledText>
      </StyledForm>
    </StyledMain>
  )
}

export default Auth

const StyledForm = styled.form`
  margin: 5rem auto 0 auto;
  background-color: var(--white-color);
  padding: 3rem 4rem;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.12), 0 1px 2px 2px rgba(0, 0, 0, 0.24);

  span {
    margin-left: 0.4rem;
    color: #2f80ed;
    cursor: pointer;
  }

  @media (min-width: 470px) {
    margin: 10rem auto 0 auto;
    padding: 5rem 7rem;
  }
`

const StyledTitle = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 4rem;
`

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  border: ${({ isFocus }) => (isFocus ? '1px solid var(--red-color)' : '1px solid #828282')};
  border-radius: 4px;

  svg {
    font-size: 1.5rem;
    color: ${({ isFocus }) => (isFocus ? 'var(--red-color)' : '#828282')};
  }
`

const StyledInput = styled.input`
  border: none;
  width: 90%;
  font-size: 1.4rem;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`

const StyledButton = styled.button`
  width: 100%;
  display: block;
  font-size: 1.7rem;
  font-weight: bold;
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 1.1rem 0;
  margin: 4rem 0 2rem 0;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`

const StyledText = styled.p`
  margin-top: 4rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
`
