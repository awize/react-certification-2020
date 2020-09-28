/* global gapi */
import { useEffect, useState } from 'react'

const useYoutubeAPI = () => {
  const [youtubeApi, setYoutubeApi] = useState(null)
  const { gapi: { client } = {} } = window
  const initGAPI = () => {
    setTimeout(() => {
      window.gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
      window.gapi.client.load('youtube', 'v3', () => {
        setYoutubeApi(gapi.client.youtube)
      })
    }, 0)
  }

  useEffect(() => {
    if (client) initGAPI()
  }, [client])

  return youtubeApi
}

export default useYoutubeAPI
