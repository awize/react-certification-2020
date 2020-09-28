import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import { FadeContainer } from 'ui'

const GlobalStyled = createGlobalStyle`
 html,
  body {
    overflow: ${({ isOpen }) => (isOpen ? 'hidden' : '')};
  }
 `

const ContainerStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const FadeContainerStyled = styled(FadeContainer)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Modal = ({ children, onClose, open, className, fullScreen }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const id = null

  const handleClose = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setIsAnimatingOut(false)
      setIsOpen(false)
      if (onClose) onClose(false)
    }, 300)
  }

  useEffect(() => {
    if (isMounted) {
      if (open === true) {
        if (id) clearTimeout(id)
        setIsOpen(true)
      } else if (isOpen && !open) {
        handleClose()
      }
    } else {
      setIsMounted(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <>
      {isOpen && (
        <ContainerStyled>
          <FadeContainerStyled
            onClick={handleClose}
            isAnimatingOut={isAnimatingOut}
            open={open}
            duration={isAnimatingOut ? 500 : 400}
            animation="background"
          />

          <FadeContainer
            open={open}
            isAnimatingOut={isAnimatingOut}
            duration={isAnimatingOut ? 100 : 800}
            animation="bounceInOut"
            timeFunction="ease-in-out"
            className={className}
            fullScreen={fullScreen}
          >
            {children}
          </FadeContainer>
        </ContainerStyled>
      )}
      <GlobalStyled isOpen={isOpen} />
    </>
  )
}

Modal.defaultProps = {
  children: <div />,
  className: '',
  fullScreen: false,
  onClose: undefined,
  open: undefined
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool
}

export default Modal
