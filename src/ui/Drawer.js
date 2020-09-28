import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DrawerContainerStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: ${({ open }) => `translateX(${!open ? '-100%' : 0})}`};
  transition: transform 10ms ease ${({ open }) => (!open ? '300ms' : '0')};
`

const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.12);
  opacity: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 350ms linear;
`

const DrawerStyled = styled.div`
  height: 100%;
  width: fit-content;
  background-color: #fff;
  transform: ${({ open }) => `translateX(${!open ? '-100%' : 0})}`};
  transition: transform 350ms linear;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`
const Drawer = ({ open, onToggleMenu, children }) => {
  return (
    <DrawerContainerStyled open={open}>
      <OverlayStyled open={open} onClick={onToggleMenu} />
      <DrawerStyled open={open}>{children}</DrawerStyled>
    </DrawerContainerStyled>
  )
}

Drawer.defaultProps = {
  open: false,
  onToggleMenu: () => {}
}

Drawer.propTypes = {
  open: PropTypes.bool,
  onToggleMenu: PropTypes.func
}

export default Drawer
