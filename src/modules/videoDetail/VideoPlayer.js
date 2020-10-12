import React, { useEffect, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useYoutubeAPI } from 'hooks'
import { Eye, Like } from 'ui/Icons'
import { Flex, Button, Text } from 'ui'
import { formatSingleVideo } from 'utils/helpers'
import { useAuth, useFavorites } from 'providers'
import TYPE from 'reducers/type'

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
  const {
    state: { isLogged }
  } = useAuth()
  const {
    state: { favoriteVideos },
    dispatch
  } = useFavorites()
  const { videoId } = useParams()
  const youtubeAPI = useYoutubeAPI()
  const [videoData, setVideoData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const isAlreadyFavorite =
    favoriteVideos.filter((favorite) => favorite.videoId === videoId).length > 0

  const getVideoData = useCallback(async () => {
    if (youtubeAPI) {
      setIsLoading(true)
      const response = await youtubeAPI.videos.list({
        part: 'snippet,statistics,player',
        id: videoId
      })
      setIsLoading(false)

      if (response) {
        setVideoData(formatSingleVideo(response))
      }
    }
  }, [videoId, youtubeAPI])

  useEffect(() => {
    if (youtubeAPI) getVideoData()
  }, [videoId, youtubeAPI, getVideoData])

  const statistics = [
    {
      id: 'views',
      icon: Eye,
      value: videoData.viewCount || ''
    },
    {
      id: 'likes',
      icon: Like,
      value: videoData.likeCount || 0
    }
  ]

  const getCorrectButton = () => {
    if (!isLogged) return null
    if (isAlreadyFavorite)
      return (
        <Flex container inline center>
          <Link
            to="/favorites"
            css={`
              margin-right: 20px;
            `}
          >
            Ir a favoritos
          </Link>
          <Button
            variant="alert"
            onClick={() =>
              dispatch({ type: TYPE.REMOVE_FAVORITE_VIDEO, payload: videoId })
            }
          >
            Eliminar de Favorites
          </Button>
        </Flex>
      )
    return (
      <Button
        onClick={() =>
          dispatch({ type: TYPE.ADD_FAVORITE_VIDEO, payload: { ...videoData, videoId } })
        }
      >
        Agregar de Favorites
      </Button>
    )
  }
  return (
    <div
      css={`
        padding: 20px;
      `}
    >
      {!isLoading && (
        <VideoContainerStyled
          title="title"
          src={`https://www.youtube.com/embed/${videoId}`}
          height={450}
        />
      )}
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
          {statistics.map(({ icon: Icon, value, id }) => {
            return (
              <StatisticContainerStyled
                container
                center
                key={`${id}-statistic-icon-${value}`}
              >
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

        {getCorrectButton()}
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
