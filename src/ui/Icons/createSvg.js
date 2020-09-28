import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SvgIcon from './SvgIcon'

const SvgIconStyled = styled(SvgIcon)`
  width: ${({ className }) => (className === '' ? className : '100%')};
  height: ${({ className }) => (className === '' ? className : '100%')};
`
const createSvgIcon = (path, displayName = '', viewBox) => {
  let Icon = ({ className, ...props }) => {
    console.log({ className })
    return (
      <SvgIconStyled {...props} viewBox={viewBox}>
        {path}
      </SvgIconStyled>
    )
  }

  Icon.displayName = `${displayName}Icon`
  Icon = React.memo(Icon)

  Icon.defaultProps = {
    className: ''
  }

  Icon.propTypes = {
    className: PropTypes.string
  }

  return Icon
}

export default createSvgIcon
