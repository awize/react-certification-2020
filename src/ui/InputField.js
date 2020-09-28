import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withForm } from './Form'

const InputStyled = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #e8eeef;
  color: ${({ theme }) => theme.palette.text.black};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
`
const InputField = ({ onChange, value: valueProp, name, ...props }) => {
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
  return <InputStyled {...props} onChange={handleChange} value={value} name={name} />
}

InputField.defaultProps = {
  onChange: undefined
}
InputField.propTypes = {
  onChange: PropTypes.func
}

export default withForm(InputField)
