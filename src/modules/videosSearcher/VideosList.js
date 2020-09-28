import React from 'react'
import styled from 'styled-components'

import { VideoCard } from 'modules/videosSearcher'
import { Flex } from 'ui'

import { useSearcher } from 'providers/'

const VideoListStyled = styled(Flex)`
  width: 1044px;
  max-width: 100%;
  margin: 0 auto;
`

const VideoCardContainer = styled(Flex)`
  padding: 10px;
  box-sizing: border-box;
`

const VideosList = () => {
  const { videos } = useSearcher()

  return (
    <VideoListStyled container direction="column">
      {videos
        ? videos.map((videoData) => {
            return (
              <VideoCardContainer key={videoData.videoId}>
                <VideoCard {...videoData} />
              </VideoCardContainer>
            )
          })
        : ''}
    </VideoListStyled>
  )
}

VideosList.propTypes = {}

export default VideosList
