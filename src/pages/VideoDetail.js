import React from 'react'
import { Flex } from 'ui'
import { SuggestedList, VideoPlayer } from 'modules/videoDetail'

const VideoDetail = () => {
  return (
    <Flex container>
      <Flex col={16}>
        <VideoPlayer />
      </Flex>
      <Flex col={8}>
        <SuggestedList />
      </Flex>
    </Flex>
  )
}

VideoDetail.propTypes = {}

export default VideoDetail
