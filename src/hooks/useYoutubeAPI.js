/* global gapi */
import { useEffect, useState } from 'react'

const useGoogleAPI = () => {
  const [youtubeApi, setYoutubeApi] = useState(null)

  const initGAPI = () => {
    gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
    gapi.client.load('youtube', 'v3', () => {
      setYoutubeApi(gapi.client.youtube)
    })
  }

  useEffect(() => {
    initGAPI()
  }, [])

  return youtubeApi
}

export default useGoogleAPI
