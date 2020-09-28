import { useFavorites } from 'providers/'
import React from 'react'
import { Flex, Text } from 'ui'
import { VideoCard } from 'modules/videosSearcher'

const Favorites = () => {
  const {
    state: { favoriteVideos }
  } = useFavorites()

  return (
    <>
      <Text
        css={`
          font-size: 45px;
          font-weight: bold;
          text-align: center;
          margin: 10px;
        `}
      >
        Videos Favoritos
      </Text>
      <Flex
        container
        direction="column"
        css={`
          width: 800px;
          max-width: 100%;
          margin: 0 auto;
          > * {
            margin: 10px;
          }
        `}
      >
        {favoriteVideos.map(VideoCard)}
      </Flex>
    </>
  )
}

export default Favorites
