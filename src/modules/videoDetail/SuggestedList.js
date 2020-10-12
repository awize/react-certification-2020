import React, { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useYoutubeAPI } from 'hooks'
import { Flex, Text } from 'ui'

import SuggestedVideoCard from './SuggestedVideoCard'
import { formatVideosResponse } from '../../utils/helpers'

const SuggestedList = () => {
  const { videoId } = useParams()

  const youtubeAPI = useYoutubeAPI()
  const [suggestedVideos, setsuggestedVideos] = useState([])

  const getSuggestedVideos = useCallback(async () => {
    if (youtubeAPI) {
      const response = await youtubeAPI.search.list({
        part: ['snippet'],
        maxResults: 12,
        relatedToVideoId: videoId,
        type: 'video'
      })
      if (response) {
        setsuggestedVideos(formatVideosResponse(response))
      }
    }
  }, [videoId, youtubeAPI])

  useEffect(() => {
    getSuggestedVideos(videoId)
  }, [videoId, getSuggestedVideos])

  return (
    <Flex
      container
      direction="column"
      css={`
        max-height: calc(100vh - 70px);
        overflow: auto;
      `}
    >
      <Text>Sugerencias</Text>

      <Flex container wrap="wrap">
        {suggestedVideos.map((suggestedVideo) => (
          <Flex
            key={`suggest-${suggestedVideo.videoId}`}
            col={12}
            css={`
              padding: 10px;
              box-sizing: border-box;
            `}
          >
            <SuggestedVideoCard {...suggestedVideo} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default SuggestedList
