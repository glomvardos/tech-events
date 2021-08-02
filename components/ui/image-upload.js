import { useState } from 'react'
import styled from 'styled-components'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ImageUpload({ id, showModalHandler, setImagePreview }) {
  const [image, setImage] = useState(null)

  async function imageHandler(e) {
    e.preventDefault()
    // Upload Image and connect it to the added event
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'event')
    formData.append('refId', id)
    formData.append('field', 'image')

    const response = await fetch(`${process.env.API_URL}/upload`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      toast.error('Failed to update image')
    }

    if (response.ok) {
      const res = await fetch(`${process.env.API_URL}/events/${id}`)
      const data = await res.json()
      setImagePreview(data.image.formats.thumbnail.url)
      toast.success('The image has been updated!')
    }
    showModalHandler()
  }

  return (
    <StyledForm onSubmit={imageHandler}>
      <h2>Upload Image</h2>
      <StyledLabel htmlFor='image'>
        <p>Choose an image </p>
        <p>{image && image.name}</p>
      </StyledLabel>
      <StyledInput id='image' type='file' onChange={e => setImage(e.target.files[0])} />
      <StyledButton>Upload Image</StyledButton>
    </StyledForm>
  )
}

export default ImageUpload

const StyledForm = styled.form`
  padding: 2rem;
`

const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/images/upload-image.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 2rem;
  font-weight: bold;
  height: 220px;
  width: 240px;
  cursor: pointer;
  p {
    margin-bottom: 1rem;
  }
`

const StyledButton = styled.button`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  padding: 0.8rem 0;
  margin-top: 1rem;
  background-color: var(--red-color);
  color: var(--white-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`
