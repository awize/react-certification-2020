import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withForm } from './Form'

const InputField = ({ onChange, value: valueProp, name }) => {
  const [valueState, setValueState] = useState('')
  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : valueState
  const handleChange = (e) => {
    if (isControlled) {
      if (onChange) onChange(e)
    } else {
      setValueState(e.target.value)
    }
  }
  return <input type="text" onChange={handleChange} value={value} name={name} />
}

InputField.defaultProps = {
  onChange: undefined
}
InputField.propTypes = {
  onChange: PropTypes.func
}

export default withForm(InputField)
