import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ children, component: Component, titleAccess, viewBox, ...other }) => {
  return (
    <Component
      viewBox={viewBox}
      aria-hidden={titleAccess ? 'false' : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  )
}

SvgIcon.defaultProps = {
  titleAccess: ''
}

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string
}

SvgIcon.defaultProps = {
  component: 'svg',
  viewBox: '0 0 512 512'
}

export default SvgIcon
