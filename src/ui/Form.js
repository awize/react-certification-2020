/* eslint-disable react/forbid-prop-types */
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

const FormContext = React.createContext()
const Form = ({ onSubmit, initialValues, ...props }) => {
  const [form, setForm] = useState(initialValues)

  const onChange = (e) => {
    const {
      target: { value, name }
    } = e
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = () => {
    onSubmit(form)
  }

  return (
    <FormContext.Provider value={{ form, onChange, handleSubmit }}>
      <form {...props} />
    </FormContext.Provider>
  )
}

Form.defaultProps = {
  initialValues: {}
}
Form.propTypes = {
  initialValues: PropTypes.object
}
export const useForm = () => {
  const context = useContext(FormContext)
  return context
}

export const withForm = (Component) => ({ name }) => {
  const context = useForm()
  let childProps = {}

  if (context) {
    const { form, onChange, handleSubmit } = context
    childProps = {
      formValues: form,
      value: name ? form[name] : undefined,
      onChange,
      handleSubmit,
      name
    }
  }

  return <Component {...childProps} />
}

export default Form
