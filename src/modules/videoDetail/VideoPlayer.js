import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { useYoutubeAPI } from 'hooks'
import { Eye, Like } from 'ui/Icons'
import { Flex, Button, Text } from 'ui'
import { formatSingleVideo } from 'utils/helpers'
import VideoDetailJSON from '../../__mocks__/videoDetail.json'

const StatisticContainerStyled = styled(Flex)`
  svg {
    width: 45px;
    height: 30px;
    margin-right: 10px;
  }
`
const VideoContainerStyled = styled.iframe`
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 2.5px 3px rgba(0, 0, 0, 0.017), 0 6.9px 7.8px rgba(0, 0, 0, 0.025),
    0 19px 21.9px rgba(0, 0, 0, 0.033), 0 100px 80px rgba(0, 0, 0, 0.05);
  border: 0;
`
const VideoPlayer = () => {
  const { videoId } = useParams()
  const youtubeAPI = useYoutubeAPI()
  const [videoData, setVideoData] = useState({})

  const getVideoData = useCallback(async () => {
    if (youtubeAPI && !VideoDetailJSON) {
      const response = await youtubeAPI.videos.list({
        part: 'snippet,statistics,player',
        id: videoId
      })
      console.log({ response })
    }
    setVideoData(formatSingleVideo(VideoDetailJSON))
  }, [videoId, youtubeAPI])

  useEffect(() => {
    getVideoData()
  }, [videoId, youtubeAPI, getVideoData])

  const statistics = [
    {
      icon: Eye,
      value: videoData.viewCount || ''
    },
    {
      icon: Like,
      value: videoData.likeCount || 0
    }
  ]
  return (
    <div
      css={`
        padding: 20px;
      `}
    >
      <VideoContainerStyled
        title="title"
        src={`https://www.youtube.com/embed/${videoId}`}
        height={450}
      />
      <Flex
        container
        justify="space-between"
        css={`
          padding: 15px 0px 10px;
        `}
      >
        <Flex
          container
          inline
          css={`
            margin-right: 10px;
          `}
        >
          {statistics.map(({ icon: Icon, value }) => {
            return (
              <StatisticContainerStyled container center>
                <Icon />
                <p
                  css={`
                    margin: 0;
                  `}
                >
                  {value}
                </p>
              </StatisticContainerStyled>
            )
          })}
        </Flex>
        <Button>Agregar a favoritos</Button>
      </Flex>
      <hr />
      <Text
        css={`
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
        `}
      >
        {videoData.title}
      </Text>
      <Text>{videoData.description}</Text>
    </div>
  )
}

export default VideoPlayer
