import React from 'react'
import { Flex } from 'ui'
import { SuggestedList, VideoPlayer } from 'modules/videoDetail'

const VideoDetail = () => {
  return (
    <Flex
      container
      css={`
        flex-direction: column;
        ${({ theme }) => theme.mixins.mediaQueries.desktop`
          flex-direction: row;
        `}
      `}
    >
      <Flex
        css={`
          ${({ theme }) => theme.mixins.mediaQueries.desktop`
            flex-basis: 75%;
          `}
        `}
      >
        <VideoPlayer />
      </Flex>
      <Flex
        css={`
          ${({ theme }) => theme.mixins.mediaQueries.desktop`
            flex-basis: 25%;
          `}
        `}
      >
        <SuggestedList />
      </Flex>
    </Flex>
  )
}

VideoDetail.propTypes = {}

export default VideoDetail
