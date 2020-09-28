import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

Text.defaultProps = {
  children: ''
}
Text.propTypes = {
  children: PropTypes.string
}

export default Text
