import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Text } from 'ui'

const SuggestedVideoCardContainer = styled.div`
  max-width: 100%;
  background-color: #fff;
  height: 180px;
  margin: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.019), 0 1.8px 2.1px rgba(0, 0, 0, 0.019),
    0 2.7px 3.7px rgba(0, 0, 0, 0.019), 0 4.6px 6.3px rgba(0, 0, 0, 0.026),
    0 10px 11.5px rgba(0, 0, 0, 0.036), 0 49px 38px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 13.5px 10px rgba(0, 0, 0, 0.068), 0 100px 80px rgba(0, 0, 0, 0.07);
  }
`

const CoverImageStyled = styled.img`
  width: 100%;
  height: 50%;
  background-color: #000;
  object-fit: contain;
`
const SuggestedVideoCard = ({ title, thumbnail, videoId }) => {
  const history = useHistory()

  const goToSuggestion = () => {
    history.push(`/video/${videoId}`)
  }

  return (
    <SuggestedVideoCardContainer onClick={goToSuggestion}>
      <CoverImageStyled src={thumbnail} alt="" />
      <Text
        css={`
          padding: 10px;
          text-align: center;
        `}
      >
        {title}
      </Text>
    </SuggestedVideoCardContainer>
  )
}

export default SuggestedVideoCard
