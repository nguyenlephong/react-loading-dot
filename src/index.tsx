import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounceLoading = keyframes`
to {
  opacity: 0.3;
  transform: translate3d(0, -1.5rem, 0);
}
`

export const Loading: React.FC = () => {
  const Wraper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  const Dot = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin: 2rem 1rem;
    background: rgb(202, 57, 57);
    border-radius: 50%;
    animation: 0.8s ${bounceLoading} infinite alternate;
    &::nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  `

  return (
    <Wraper>
      <Dot></Dot>
      <Dot></Dot>
      <Dot></Dot>
    </Wraper>
  )
}
