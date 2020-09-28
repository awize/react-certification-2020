import React, { useState } from 'react'
import { Modal, Text, InputField, SubmitButton, Flex } from 'ui'
import Form from 'ui/Form'
import TYPE from 'reducers/type'
import { useAuth } from 'providers'
import loginApi from '../../__mocks__/login.api'

const LoginModal = (props) => {
  const { dispatch } = useAuth()
  const [error, setError] = useState(null)
  const onSubmit = async (values) => {
    try {
      const { user, password } = values
      const response = await loginApi(user, password)

      dispatch({ type: TYPE.LOG_IN_SUCCESS, payload: response })
    } catch (e) {
      setError(
        e.message === 'Username or password invalid'
          ? 'Credenciales inválidas'
          : 'Error inesperado, intentalo más tarde'
      )
    }
  }

  return (
    <Modal {...props}>
      <div
        css={`
          width: 300px;
          background: white;
          border-radius: 5px;
          padding: 20px 30px;
        `}
      >
        <Text
          css={`
            font-size: 21px;
            text-align: center;
            padding: 10px;
          `}
        >
          Iniciar Sesión
        </Text>

        <Form
          onChange={() => setError(null)}
          onSubmit={onSubmit}
          initialValues={{ user: 'wizeline', password: 'Rocks!' }}
        >
          <Flex container direction="column">
            <Flex
              col="auto"
              css={`
                position: relative;
              `}
            >
              <InputField name="user" placeholder="Usuario" />
              <InputField name="password" placeholder="Contraseña" type="password" />
              {error && (
                <Text
                  css={`
                    color: ${({ theme }) => theme.palette.alert.main};
                    padding: 2px;
                    position: absolute;
                    top: calc(100% - 25px);
                    font-size: 16px;
                  `}
                >
                  {error}
                </Text>
              )}
            </Flex>

            <SubmitButton>Iniciar Sesión</SubmitButton>
          </Flex>
        </Form>
      </div>
    </Modal>
  )
}

export default LoginModal
