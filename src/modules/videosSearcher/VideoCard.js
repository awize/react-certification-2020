import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from 'ui'
import { decodeText } from 'utils/helpers'

const VideoCardStyled = styled(Flex)`
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  height: 200px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px rgba(58, 58, 68, 0.16), 0px 8px 16px rgba(90, 91, 106, 0.16);
  }
`

const VideoImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const TitleStyled = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 25px;
  padding: 4px 5px;
  margin: 0;
`

const TextStyled = styled.p`
  padding: 10px;
  margin: 0;
`

const VideoCard = ({ title, description, thumbnail, videoId, ...props }) => {
  const history = useHistory()

  return (
    <VideoCardStyled
      container
      {...props}
      css={`
        flex-direction: column;
        height: 100%;
        ${({ theme }) => theme.mixins.mediaQueries.ipad`
          flex-direction: row;
          height: initial;
      `}
      `}
      onClick={() => history.push(`/video/${videoId}`)}
    >
      <Flex
        css={`
          flex-basis: 100%;
          height: 140px;
          ${({ theme }) => theme.mixins.mediaQueries.ipad`
               flex-basis: 25%;
               height: initial;
          `}
        `}
      >
        <VideoImageStyled src={thumbnail} alt="" />
      </Flex>
      <Flex container direction="column" col={18}>
        <TitleStyled>{title && decodeText(title)}</TitleStyled>
        <TextStyled>{description}</TextStyled>
      </Flex>
    </VideoCardStyled>
  )
}

export default VideoCard
