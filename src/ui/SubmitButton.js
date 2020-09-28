import React from 'react'
import { useForm } from 'ui/Form'
import { Button } from 'ui'

const SubmitButton = (props) => {
  const { handleSubmit } = useForm()

  const handleClick = (e) => {
    e.preventDefault()
    handleSubmit()
  }

  return <Button variant="secondary" {...props} onClick={handleClick} />
}

export default SubmitButton
