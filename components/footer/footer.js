import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; TechEvents - 2021. All rights reserved.</p>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 9rem;
  padding: 1rem 0;
`
