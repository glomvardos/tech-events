import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

function Modal({ children, onClickHandler }) {
  const modalRoot = document.getElementById('modal-root')

  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop onClick={onClickHandler} />, modalRoot)}
      {ReactDOM.createPortal(<StyledModal>{children}</StyledModal>, modalRoot)}
    </>
  )
}

export default Modal

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
  z-index: 200;
  transform: translate(-50%, -50%);
  border-radius: 4px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`
