import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const backgroundFadeInOut = ({ isAnimatingOut }) => keyframes`
  0%{
    background-color: ${isAnimatingOut ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)'};
    
  }
  100%{
    background-color: ${!isAnimatingOut ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)'};
    
  }

`
const bounceInOut = ({ isAnimatingOut }) => keyframes`
  0% {
    opacity: ${isAnimatingOut ? 1 : 0};
    transform: scale( ${isAnimatingOut ? 1 : 0});
  }
  25% {
    opacity: ${isAnimatingOut ? 1 : 0.5};
    transform: scale(${isAnimatingOut ? 1.4 : 1});
  }
  50% {
    opacity: ${isAnimatingOut ? 0.9 : 1};
    transform: scale( ${isAnimatingOut ? 0.95 : 1.3});
  }
  100% {
    opacity: ${isAnimatingOut ? 0 : 1};
    transform: scale(${isAnimatingOut ? 0 : 1});
  }
`

const FadeContainerStyled = styled.div`
  animation-name: ${({ animation }) => animation};
  animation-duration: ${({ duration }) => duration}ms;
  animation-fill-mode: ${({ fillMode }) => fillMode};
  animation-delay: ${({ delay }) => delay}ms;
  animation-timing-function: ${({ timeFunction }) => timeFunction};
  display: inline-block;
`

const FadeContainer = ({ animation, duration, isAnimatingOut, from, ...props }) => {
  const getAnimation = (animationName) => {
    switch (animationName) {
      case 'bounceInOut':
        return bounceInOut
      case 'background':
        return backgroundFadeInOut

      default:
        return animationName
    }
  }

  const correctAnimation = getAnimation(animation)

  return (
    <FadeContainerStyled
      isAnimatingOut={isAnimatingOut}
      animation={correctAnimation}
      duration={duration}
      from={from}
      {...props}
    />
  )
}

FadeContainer.defaultProps = {
  animation: 'opacity',
  fillMode: 'forwards',
  duration: 1000,
  delay: 0,
  timeFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  isAnimatingOut: false,
  from: 'right'
}

FadeContainer.propTypes = {
  animation: PropTypes.oneOfType([
    PropTypes.oneOf(['opacity', 'translate', 'background', 'bounceInOut']),
    PropTypes.string
  ]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  fillMode: PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']),
  from: PropTypes.bool,
  isAnimatingOut: PropTypes.bool,
  timeFunction: PropTypes.oneOfType([PropTypes.string])
}

export default FadeContainer
