import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

function EventCard({ title, brief, date, image, slug }) {
  const getDate = new Date(date)
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
    })
    .split(' ')

  return (
    <Link href={`/event/${slug}`}>
      <StyledEventContainer>
        <Image
          src={image ? image.formats.medium.url : `/images/defaultImage.jpg`}
          alt={title}
          width={400}
          height={200}
          layout='responsive'
        />

        <StyledWrapper>
          <StyledDateWrapper>
            <p className='month'>{getDate[0]}</p>
            <p className='day'>
              <strong>{getDate[1]}</strong>
            </p>
          </StyledDateWrapper>
          <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledBrief>{brief}</StyledBrief>
          </div>
        </StyledWrapper>
      </StyledEventContainer>
    </Link>
  )
}

export default EventCard

const StyledEventContainer = styled.div`
  background-color: var(--white-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  img {
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 2rem 1.4rem;
  min-height: 15rem;
`

const StyledDateWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1.4rem;
  .month {
    font-size: 1.4rem;
    color: var(--red-color);
    text-transform: uppercase;
    margin: 0.3rem 0 1.5rem 0;
    font-weight: 500;
  }

  .day {
    font-size: 1.9rem;
  }
`

const StyledTitle = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`

const StyledBrief = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
`
