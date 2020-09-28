import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Drawer, Button, Text } from 'ui'
import { VideoSearchBar } from 'modules/videosSearcher'
import { LoginModal } from 'modules/login'
import { useAuth } from 'providers'
import TYPE from 'reducers/type'

const NavContainerStyled = styled(Flex)`
  background-color: #fff;
  box-shadow: 0 13px 24px 0 rgba(0, 0, 0, 0.025);
  height: 70px;
  padding: 0 20px;
  position: ${({ fixed }) => fixed && 'fixed'};
  top: 0;
  left: 0;
  right: 0;
`

const DrawerStyled = styled(Drawer)`
  flex-direction: column;
`
const ListItem = styled(Link)`
  &,
  &:visited {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${({ theme }) => theme.mixins.rem('200')};
    min-height: ${({ theme }) => theme.mixins.rem('45')};
    padding: ${({ theme }) => theme.mixins.rem('5 10')};
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text.black};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.mainContrast};
      border-bottom: none;
    }
    transition: background-color 60ms ease-in-out;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
    margin-top: ${({ inBottom }) => inBottom && 'auto'};
  }
`
const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const { state, dispatch } = useAuth()
  const { isLogged, avatarUrl, name } = state

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  const menuOptions = [
    {
      id: 'menu__login',
      to: '/home',
      text: 'Inicio'
    },
    {
      show: isLogged,
      id: 'menu__favorites',
      to: '/favorites',
      text: 'Favoritos'
    }
  ]

  useEffect(() => {
    if (isLogged) {
      setIsModalOpen(false)
    }
  }, [isLogged])

  return (
    <>
      <NavContainerStyled />
      <NavContainerStyled fixed container justify="space-between" align="center">
        <Button variant="alert" onClick={() => setIsMenuOpened(true)}>
          Menu
        </Button>
        <VideoSearchBar />
        {isLogged ? (
          <Flex
            container
            center
            inline
            css={`
              height: 100%;
            `}
          >
            <img
              src={avatarUrl}
              alt=""
              css={`
                height: 80%;
                margin-right: 10px;
              `}
            />
            <Text
              css={`
                font-size: 21px;
              `}
            >
              {name}
            </Text>
          </Flex>
        ) : (
          <Button onClick={() => setIsModalOpen(true)}>Iniciar Sesión</Button>
        )}
      </NavContainerStyled>

      <DrawerStyled open={isMenuOpened} onToggleMenu={toggleMenu}>
        <Flex
          container
          direction="column"
          css={`
            height: 100%;
          `}
        >
          <Flex col="auto">
            {menuOptions.map(({ to, text, id, show = true }) => {
              return show ? (
                <ListItem key={id} to={`${to}`} onClick={() => setIsMenuOpened(false)}>
                  {text}
                </ListItem>
              ) : null
            })}
          </Flex>

          {isLogged && (
            <Button
              variant="alert"
              css={`
                margin: 10px auto;
              `}
              onClick={() => {
                dispatch({ type: TYPE.LOG_OUT_SUCCESS })
                setIsMenuOpened(false)
              }}
            >
              Cerrar Sesión
            </Button>
          )}
        </Flex>
      </DrawerStyled>
      <LoginModal open={isModalOpen} onClose={setIsModalOpen} />
    </>
  )
}

Nav.propTypes = {}

export default Nav
