import { useAuth } from 'providers/'
import React from 'react'
import { Modal, Text, InputField, SubmitButton, Flex } from 'ui'
import Form from 'ui/Form'
import TYPE from 'reducers/type'
import loginApi from '../../__mocks__/login.api'

const LoginModal = (props) => {
  const { state, dispatch } = useAuth()
  const onSubmit = async (values) => {
    console.log({ state, values })
    try {
      const { user, password } = values
      const response = await loginApi(user, password)
      console.log(response)
      dispatch({ type: TYPE.LOG_IN_SUCCESS, payload: response })
    } catch (error) {
      dispatch({ type: TYPE.LOG_IN_FAILED })
    }
  }

  return (
    <Modal {...props}>
      <div
        css={`
          height: 200px;
          width: 300px;
          background: white;
          border-radius: 5px;
        `}
      >
        <Text>Iniciar Sesión</Text>
        <Form
          onSubmit={onSubmit}
          initialValues={{ user: 'wizeline', password: 'Rocks!' }}
        >
          <Flex container direction="column">
            <InputField name="user" />
            <InputField name="password" />
            <SubmitButton>Iniciar Sesión</SubmitButton>
          </Flex>
        </Form>
      </div>
    </Modal>
  )
}

export default LoginModal
