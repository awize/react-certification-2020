import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Drawer, Button } from 'ui'
import { VideoSearchBar } from 'modules/videosSearcher'

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
  const [isMenuOpened, setIsMenuOpened] = useState(false)
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
      id: 'menu__favorites',
      to: '/favorites',
      text: 'Favoritos'
    }
  ]

  return (
    <>
      <NavContainerStyled />
      <NavContainerStyled fixed container justify="space-between" align="center">
        <Button variant="alert" onClick={() => setIsMenuOpened(true)}>
          Menu
        </Button>
        <VideoSearchBar />
        <Button>Iniciar Sesión</Button>
      </NavContainerStyled>

      <DrawerStyled open={isMenuOpened} onToggleMenu={toggleMenu}>
        {menuOptions.map(({ to, text, id }) => {
          return (
            <ListItem key={id} to={`${to}`}>
              {text}
            </ListItem>
          )
        })}
      </DrawerStyled>
    </>
  )
}

Nav.propTypes = {}

export default Nav
