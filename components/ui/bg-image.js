import styled from 'styled-components'

function BgImage({ children, image }) {
  return <StyledBgImage image={image}>{children}</StyledBgImage>
}

export default BgImage

const StyledBgImage = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 240px;

  @media (min-width: 748px) {
    height: 400px;
  }

  @media (min-width: 960px) {
    height: 500px;
    border-radius: 8px;
  }
`
