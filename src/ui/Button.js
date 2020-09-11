import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  color: ${({ variant }) => {
    let color
    switch (variant) {
      case 'primary':
        color = 'red'
        break
      default:
        color = 'orange'
    }
    return color
  }};
`

const Button = ({ variant, ...props }) => {
  return <ButtonStyled {...props} />
}

Button.defaultProps = {
  variant: 'primary'
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button
