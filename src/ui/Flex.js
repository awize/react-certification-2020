import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlexStyled = styled.div`
  display: ${({ container, inline }) =>
    (container && 'flex') || (inline && 'inline-flex')};
  flex-basis: ${({ theme, col = '' }) => {
    let flexBasis = col

    if (col) {
      if (!Number.isNaN(col)) {
        flexBasis = `${(col / theme.flexColumns) * 100}%`
      } else {
        flexBasis = col
      }
    }

    return flexBasis
  }};
  flex-grow: ${({ grow = '', col }) => {
    if (grow === undefined) {
      if (!col) return
    }
    if (col === 'auto') return 1
    return grow ? 1 : 0
  }};
  flex-shrink: ${({ shrink, col }) => {
    if (shrink === undefined) {
      if (!col) return
    }
    if (col === 'auto') return 0
    return shrink ? 1 : 0
  }};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  flex-direction: ${({ container, direction }) =>
    container && !direction ? 'row' : direction};
  justify-content: ${({ direction, justify, align, center, container }) =>
    (center && 'center') ||
    (direction === 'row' || (container && !direction) ? justify : align)};
  align-items: ${({ direction, align, justify, center, container }) =>
    (center && 'center') ||
    (direction === 'row' || (container && !direction) ? align : justify)};
`

const Flex = (props) => {
  return <FlexStyled {...props} />
}

Flex.defaultProps = {
  container: false,
  inline: false,
  direction: undefined,
  col: undefined,
  grow: undefined,
  shrink: undefined,
  justify: undefined,
  align: undefined
}

Flex.propTypes = {
  container: PropTypes.bool,
  inline: PropTypes.bool,
  col: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  grow: PropTypes.number,
  shrink: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    'space-between',
    'space-around',
    'space-evenly'
  ])
}

export default Flex
