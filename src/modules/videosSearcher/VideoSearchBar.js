import React, { useCallback, useEffect, useState } from 'react'
import { SearchBar } from 'ui'
import { useSearcher } from 'providers'
import { useYoutubeAPI } from 'hooks'
import { formatVideosResponse } from 'utils/helpers'
import TYPE from 'reducers/type'

const VideoSearchBar = () => {
  const [q, setQ] = useState('Wizeline')
  const { dispatch } = useSearcher()
  const youtubeAPI = useYoutubeAPI()

  const searchVideos = useCallback(
    async (query) => {
      if (youtubeAPI) {
        const response = await youtubeAPI.search.list({
          q: query,
          part: 'snippet',
          maxResults: 12,
          type: 'video'
        })

        if (response) {
          dispatch({
            type: TYPE.SEARCH_VIDEOS_SUCCESS,
            payload: {
              videos: formatVideosResponse(response),
              totalPages: 20
            }
          })
        }
      }
    },
    [youtubeAPI, dispatch]
  )

  useEffect(() => {
    searchVideos(q)
  }, [searchVideos])

  return (
    <SearchBar onSearch={searchVideos} value={q} onChange={(e) => setQ(e.target.value)} />
  )
}

export default VideoSearchBar
