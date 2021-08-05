import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Modal from './modal'
import ImageUpload from '../image-upload/image-upload'

import { FaImage } from 'react-icons/fa'

function Form({ onSubmitHandler, event, jwt }) {
  const [showModal, setShowModal] = useState(false)
  const [inputs, setInputs] = useState({
    title: event ? event.title : '',
    date: event ? event.date : '',
    time: event ? event.time : '',
    brief: event ? event.brief : '',
    description: event ? event.description : '',
  })

  const [imagePreview, setImagePreview] = useState(
    event?.image ? event.image.formats.thumbnail.url : null
  )

  function inputHandler(event) {
    const { name, value } = event.target
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
  }

  const showModalHandler = () => setShowModal(prevState => !prevState) // Show / Hide Modal

  return (
    <>
      {showModal && (
        <Modal onClickHandler={showModalHandler}>
          <ImageUpload
            id={event.id}
            showModalHandler={showModalHandler}
            setImagePreview={setImagePreview}
            jwt={jwt}
          />
        </Modal>
      )}
      {event && (
        <StyledImageContainer>
          {imagePreview && <Image src={imagePreview} alt={event.title} width={177} height={100} />}
          <StyledSetImageBtn type='button' onClick={showModalHandler}>
            <FaImage /> Upload Image
          </StyledSetImageBtn>
        </StyledImageContainer>
      )}
      <StyledForm onSubmit={event => onSubmitHandler(event, inputs, setInputs)}>
        <StyledInputContainer>
          <StyledLabel htmlFor='title'>Title</StyledLabel>
          <StyledInput
            name='title'
            id='title'
            type='text'
            placeholder='Event Title'
            value={inputs.title}
            onChange={inputHandler}
          />
        </StyledInputContainer>
        <div className='flex'>
          <div className='date-time'>
            <StyledInputContainer>
              <StyledLabel htmlFor='date'>Date</StyledLabel>
              <StyledInput
                name='date'
                id='date'
                type='date'
                value={inputs.date}
                onChange={inputHandler}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel htmlFor='time'>Time</StyledLabel>
              <StyledInput
                name='time'
                id='time'
                type='text'
                placeholder='Event Time'
                value={inputs.time}
                onChange={inputHandler}
              />
            </StyledInputContainer>
          </div>
          <StyledInputContainer>
            <StyledLabel htmlFor='brief'>Brief Description</StyledLabel>
            <StyledBriefText
              name='brief'
              id='brief'
              rows='5'
              placeholder='Add a brief event description...'
              value={inputs.brief}
              onChange={inputHandler}
            />
          </StyledInputContainer>
        </div>
        <StyledInputContainer>
          <StyledLabel htmlFor='description'>Description</StyledLabel>
          <StyledDescription
            name='description'
            id='description'
            rows='12'
            placeholder='Add your event description...'
            value={inputs.description}
            onChange={inputHandler}
          />
        </StyledInputContainer>
        <StyledButton>{event ? 'Edit Event' : 'Add Event'}</StyledButton>
      </StyledForm>
    </>
  )
}

export default Form

const StyledImageContainer = styled.div`
  margin-top: 3rem;
`

const StyledSetImageBtn = styled.button`
  font-weight: 500;
  display: block;
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 0.5rem 0;
  width: 177px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }

  svg {
    margin: 0 0.2rem 0 0;
  }
`

const StyledForm = styled.form`
  margin-top: 1rem;

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
  margin-bottom: 2rem;
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
const StyledButton = styled.button`
  width: 100%;
  display: block;
  font-size: 2rem;
  font-weight: bold;
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 1.3rem 0;
  margin: 2rem 0 0 0;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`
