import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.mixins.rem('10 14')};
  min-width: ${({ theme }) => theme.mixins.rem('100')};

  ${({ variant, theme }) => {
    return css`
      background-color: ${theme.palette[variant].main};
      color: ${theme.palette[variant].mainContrast};
      &:hover {
        background-color: ${theme.palette[variant].darker};
        color: ${theme.palette[variant].darkerContrast};
      }
    `
  }};
  border-radius: 10px;
  border: 1px solid #fff;
  outline: none;
`

const Button = ({ variant, ...props }) => {
  return <ButtonStyled variant={variant} {...props} />
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium'
}

Button.propTypes = {
  /** What kind of button to you want to render? */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'alert']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Button
