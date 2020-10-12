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
        ${({ theme }) => theme.mixins.mediaQueries.desktop`
          max-height: calc(100vh - 70px);
          overflow: auto;
        `}
      `}
    >
      <Text
        css={`
          font-size: 30px;
          font-weight: bold;
          padding: 10px 20px;
          border-top: 1px solid gray;
          border-bottom: 1px solid gray;
          ${({ theme }) => theme.mixins.mediaQueries.desktop`
            border-top: 0;
          `}
        `}
      >
        Sugerencias
      </Text>

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
